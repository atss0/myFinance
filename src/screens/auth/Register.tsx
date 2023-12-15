import { StatusBar, View, Text, KeyboardAvoidingView, ScrollView, Image, TextInput, Platform, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Eye, EyeClose, Facebook, Google, Twitter } from '../../components/Icons';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/UserSlice';
import storage from '../../storage'
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface RegisterProps {
  navigation: any;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const dispatch = useDispatch()

  // const image = require('../../img/logo.png');
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);

  const [secureText, setSecureText] = useState(true);

  const handleFocus1 = () => setIsFocused1(true);
  const handleBlur1 = () => setIsFocused1(false);
  const handleFocus2 = () => setIsFocused2(true);
  const handleBlur2 = () => setIsFocused2(false);
  const handleFocus3 = () => setIsFocused3(true);
  const handleBlur3 = () => setIsFocused3(false);
  const handleFocus4 = () => setIsFocused4(true);
  const handleBlur4 = () => setIsFocused4(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    navigation.navigate('Login')
  }

  const handleRegister = () => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: `${process.env.API}/user/register`,
      data: {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        image: "https://cdn.ankaramasasi.com/2023/8/16/barbara-palvin-kimdir-hbzytwa1.jpg",
        cover: "https://img.imgyukle.com/2023/09/27/r7i3aY.jpeg"
      }
    })
      .then((res) => {
        dispatch(setUser({ user: res?.data?.user, token: res?.data?.token }))
        storage.set('user', JSON.stringify(res?.data?.user))
        storage.set('token', res?.data?.token)

      })
      .catch((e) => {
        console.error(e?.response?.data?.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    < KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
      <ScrollView style={styles.scroll} >
        <View style={styles.textInputContainer}>
          {/* <Image source={image} style={{ width: 256, height: 52.5, marginBottom: 50, alignSelf: 'center' }} /> */}
          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: isFocused1 ? 'transparent' : '#ffffff24',
                borderColor: isFocused1 ? '#fff' : 'transparent',
              },
            ]}
            onFocus={handleFocus1}
            onBlur={handleBlur1}
            placeholder="İsim"
            placeholderTextColor="#909090"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: isFocused2 ? 'transparent' : '#ffffff24',
                borderColor: isFocused2 ? '#fff' : 'transparent',
              },
            ]}
            onFocus={handleFocus2}
            onBlur={handleBlur2}
            placeholder="E-Posta"
            placeholderTextColor="#909090"
            value={email}
            onChangeText={setEmail}
          />

          <View style={{ flex: 1, flexDirection: 'row', width: '87%', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextInput
              secureTextEntry={secureText}
              style={[
                styles.textInput,
                {
                  backgroundColor: isFocused3 ? 'transparent' : '#ffffff24',
                  borderColor: isFocused3 ? '#fff' : 'transparent',
                },
              ]}
              onFocus={handleFocus3}
              onBlur={handleBlur3}
              placeholder="Şifre"
              placeholderTextColor="#909090"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={{ paddingHorizontal: 10 }}
            >
              {secureText ? <Eye style={{ marginBottom: 20 }} size={24} /> : <EyeClose style={{ marginBottom: 20 }} size={24} />}
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', width: '87%', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextInput
              secureTextEntry={secureText}
              style={[
                styles.textInput,
                {
                  backgroundColor: isFocused4 ? 'transparent' : '#ffffff24',
                  borderColor: isFocused4 ? '#fff' : 'transparent',
                },
              ]}
              onFocus={handleFocus4}
              onBlur={handleBlur4}
              placeholder="Şifreyi Onayla"
              placeholderTextColor="#909090"
              value={password_confirmation}
              onChangeText={setPasswordConfirmation}
            />

            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={{ paddingHorizontal: 10 }}
            >
              {secureText ? <Eye style={{ marginBottom: 20 }} size={24} /> : <EyeClose style={{ marginBottom: 20 }} size={24} />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            {isLoading ? <ActivityIndicator size="large" color={Colors.main} /> : <Text style={styles.buttonText} >Kaydol</Text>}
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.forgot} >Hesabın Var Mı? GİRİŞ YAP</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.line} />
            <View><Text style={styles.or} >YA DA</Text></View>
            <View style={styles.line}></View>
          </View>
          <View style={[styles.accounts, { flex: 1, flexDirection: 'row' }]} >
            <TouchableOpacity>
              <Google />
            </TouchableOpacity>
            <TouchableOpacity>
              <Facebook />
            </TouchableOpacity>
            <TouchableOpacity>
              <Twitter />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  scroll: {
    paddingTop: '20%'
  },
  textInputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '87%',
    height: 50,
    color: '#fff',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'transparent',
    fontSize: 16,
    fontFamily: Fonts.bold,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  button: {
    width: '87%',
    height: 50,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.main,
  },
  forgot: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: '#fff',
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 20
  },
  or: {
    fontSize: 40,
    fontFamily: Fonts.bold,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginTop: 30,
  },
  line: {
    width: '100%',
    height: 3,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  image: {
    width: 60,
    height: 60
  },
  accounts: {
    width: '80%',
    justifyContent: 'space-around',
    marginHorizonal: 20,
    marginTop: 20

  }
});

export default Register