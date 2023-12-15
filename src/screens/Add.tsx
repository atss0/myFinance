import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import Colors from '../styles/Colors'
import Fonts from '../styles/Fonts'
import { hScale, wScale } from '../styles/Scale'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import axios from 'axios'
import storage from '../storage'

interface AddProps {
  route: any
}

const Add: React.FC<AddProps> = ({ route }) => {
  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState('')
  const [inputTitle1, setInputTitle1] = useState('')
  const [data, setData] = useState<any>(null)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const screenState = useSelector((state: RootState) => state.User)

  const getBankAccounts = async () => {
    await axios({
      method: "POST",
      url: `${process.env.API}/user/bank-account`,
      data: {
        user_code: screenState?.user?.user_code
      },
      headers: {
        'Authorization': 'Bearer ' + storage.getString('token')
      }
    })
      .then((res) => {
        setData(res.data.data)
      })
      .catch((e) => {
        console.error(e.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (route.params?.type == 'money') {
      getBankAccounts()
    } else if (route.params?.type == 'gold') {
      setData([
        { key: '1', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png', value: 'Gram' },
        { key: '2', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png', value: 'Gram' },
        { key: '3', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png', value: 'Gram' },
      ])
    } else if (route.params?.type == 'stock') {
      setData([
        { key: '1', img: 'https://companieslogo.com/img/orig/VAKBN.IS-68aa6daf.png', value: 'Vakıfbank' },
        { key: '2', img: 'https://companieslogo.com/img/orig/VAKBN.IS-68aa6daf.png', value: 'Vakıfbank' },
        { key: '3', img: 'https://companieslogo.com/img/orig/VAKBN.IS-68aa6daf.png', value: 'Vakıfbank' },
      ])
    }
    if (route.params?.type === 'money') {
      setTitle('Nakit Ekle')
      setInputTitle1('Banka Hesabı')
    } else if (route.params?.type === 'gold') {
      setTitle('Altın Ekle')
      setInputTitle1('Birim')
    } else if (route.params?.type === 'stock') {
      setTitle('Hisse Senedi Ekle')
      setInputTitle1('Hisse Senedi')
    } else {
      setTitle('')
    }
  }, [route.params.type])

  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.inputTitle}>{inputTitle1}</Text>
        <SelectList
          setSelected={(val: any) => setSelected(val)}
          data={data}
          isLoading={isLoading}
          save="value"
          onSelect={() => console.log(selected)}
          search={false}
          dropdownTextStyles={styles.dropdownText}
          placeholder={inputTitle1}
          boxStyles={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wScale({ size: 325 }),
            height: hScale({ size: 50 }),
            marginBottom: hScale({ size: 10 })
          }}
          inputStyles={{ fontFamily: Fonts.bold, fontSize: 15 }}
        />
        <Text style={styles.inputTitle}>Miktar</Text>
        <View style={styles.wrapper}>
          <View style={{ width: 1, height: 24, backgroundColor: Colors.gray }} />
          {route.params?.type == 'money' && <Text style={{color: Colors.main, fontSize: 20, fontFamily: Fonts.bold, marginLeft: wScale({size: 10})}}>₺</Text>}
          <TextInput
            style={styles.input}
            placeholder='Miktar'
            placeholderTextColor={Colors.gray}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: wScale({ size: 22 }), marginTop: hScale({ size: 30 }) }}>
        <View style={{ flexDirection: 'row', width: wScale({ size: 172 }), justifyContent: 'space-between' }}>
          <Button text='İptal' bg={Colors.red} textColor={Colors.white} />
          <Button text='Ekle' bg={Colors.main} textColor={Colors.white} />
        </View>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: wScale({ size: 300 }), height: wScale({ size: 300 }), backgroundColor: Colors.main, marginTop: hScale({ size: 30 }), alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 28, fontFamily: Fonts.bold, color: Colors.white }}>
            REKLAM
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontFamily: Fonts.bold,
    color: Colors.main,
    marginTop: hScale({ size: 40 }),
    marginBottom: hScale({ size: 20 })
  },
  inputTitle: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: `${Colors.main}B3`,
    alignSelf: 'flex-start',
    marginLeft: wScale({ size: 37 })
  },
  wrapper: {
    borderWidth: 1,
    width: wScale({ size: 325 }),
    height: hScale({ size: 50 }),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  input: {
    width: wScale({ size: 270 }),
    height: hScale({ size: 50 }),
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.main,
    textAlign: 'center'
  },
  dropdownText: {
    color: Colors.main,
    fontFamily: Fonts.bold
  }
})

export default Add