import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from '../components/TabBar'

//SCREENS
import Home from '../screens/Home'
import Add from '../screens/Add'
import Settings from '../screens/Settings'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home' tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Add' component={Add} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

export default TabNavigation