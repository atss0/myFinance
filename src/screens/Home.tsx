import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../styles/Colors'
import Fonts from '../styles/Fonts'

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.main}/>
      <View style={styles.currency}>
        <Text style={styles.currencyText}>1286,90</Text>
        <Text style={styles.currencyText}>5 g</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg
  },
  currency: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  currencyText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
    fontFamily: Fonts.bold
  }
})

export default Home