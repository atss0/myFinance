import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Button.style'

interface ButtonProps {
  text?: string;
  bg?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, bg, textColor }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: bg ? bg : '#000' }]}>
      <Text style={[styles.text, { color: textColor ? textColor : '#fff' }]}>{text ? text : 'Button'}</Text>
    </TouchableOpacity>
  )
}

export default Button