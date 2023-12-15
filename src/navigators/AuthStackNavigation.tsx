import { View, Text } from 'react-native'
import React from 'react'

//SCREENS
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AuthStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStackNavigation