import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import App from './App'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const ReduxProvider = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
                <App />
            </Provider>
        </GestureHandlerRootView>
    )
}

export default ReduxProvider