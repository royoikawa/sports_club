import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserDetail from '../screens/UserDetail'
import Index1 from '../screens/Index1'
import Overlay from '../screens/Overlay'
import Overlay_test from  '../screens/Overlay_test';



const Stack = createStackNavigator()

function GoToButton({ screenName }) {
  const navigation = useNavigation();
}

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name='Overlay_test' component={Overlay_test} />

      

       

       
       <Stack.Screen name='UserDetail' component={UserDetail} />
     
     
      <Stack.Screen name='Overlay' component={Overlay} />
      <Stack.Screen name='Index1' component={Index1} />
       
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator