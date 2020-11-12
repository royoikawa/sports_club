import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/Index'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Index' component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator