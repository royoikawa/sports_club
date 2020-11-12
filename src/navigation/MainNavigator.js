import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserDetail from '../screens/UserDetail'
import Index from '../screens/Index'
import Overlay from '../screens/Overlay'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Index' component={Index} />
        <Stack.Screen name='Overlay' component={Overlay} />
        
        <Stack.Screen name='UserDetail' component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator