import { StatusBar, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image, Platform, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Eye, EyeClose, Facebook, Google, Twitter } from '../../components/Icons'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/UserSlice';
import storage from '../../storage'
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useDispatch()

  // const image = "require('../../img/logo.png')";
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const [secureText, setSecureText] = useState(true);

  const handleFocus1 = () => setIsFocused1(true);
  const handleBlur1 = () => setIsFocused1(false);
  const handleFocus2 = () => setIsFocused2(true);
  const handleBlur2 = () => setIsFocused2(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigation.navigate('Register')
  }

  const handleLogin = () => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: `${process.env.API}/user/login`,
      data: {
        email: email,
        password: password
      }
    })
      .then((res) => {
        dispatch(setUser({ user: res.data.user, token: res.data.token }))
        storage.set('user', JSON.stringify(res.data.user))
        storage.set('token', res.data.token)
      })
      .catch((e) => {
        console.error(e.response.data.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
      <ScrollView style={styles.scroll} >
        <View style={styles.textInputContainer}>
          {/* <Image source={image} style={{ width: 256, height: 56.5, marginBottom: 50, alignSelf: 'center', resizeMode: 'contain' }} /> */}
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
                  backgroundColor: isFocused2 ? 'transparent' : '#ffffff24',
                  borderColor: isFocused2 ? '#fff' : 'transparent',
                },
              ]}
              onFocus={handleFocus2}
              onBlur={handleBlur2}
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
          <TouchableOpacity
            onPress={() => console.log("sa")}
            style={{ paddingHorizontal: 10 }}
          >
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin} >
            {isLoading ? <ActivityIndicator size="large" color={Colors.main} /> : <Text style={styles.buttonText} >Giriş Yap</Text>}
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgot} >Şifremi Unuttum</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.forgot} >Hesabın Yok Mu? KAYDOL</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.line} />
            <View><Text style={styles.or} >YA DA</Text></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.accounts}  >
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
    </KeyboardAvoidingView>
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
    fontSize: 30,
    fontFamily: Fonts.bold,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginTop: 35,
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
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginHorizonal: 20,
    marginTop: 20
  }
});

export default Login