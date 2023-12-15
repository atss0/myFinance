import React, { useEffect, useState } from 'react'
import { Provider, useDispatch } from 'react-redux'
import store from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './src/navigators/TabNavigation'
import AuthStackNavigation from './src/navigators/AuthStackNavigation'
import { useSelector } from 'react-redux'
import { RootState } from './src/redux/store'
import { setUser } from './src/redux/UserSlice'
import storage from './src/storage'

const App = () => {
  const screenState = useSelector((state: RootState) => state.User)
  const dispatch = useDispatch()
  useEffect(() => {
    if (storage.contains('user') && storage.contains('token')) {
      const user: any = storage.getString('user')
      dispatch(setUser({ user: JSON.parse(user), token: storage.getString('token') }))
    }
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer>
        {screenState.user && screenState.token ? <TabNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </Provider>
  )
}

export default App