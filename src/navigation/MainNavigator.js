import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/Index'
import Login from '../screens/Login'
import Reg from '../screens/Reg'
const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Reg" component={Reg} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator