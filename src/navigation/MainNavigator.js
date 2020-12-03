import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserDetail from '../screens/UserDetail'
import Index1 from '../screens/Index1'
import Overlay from '../screens/Overlay'
import Overlay_test from  '../screens/Overlay_test';

import Location_List from '../screens/Location_List';

import signupfor_activity from '../screens/signupfor_activity';

import EditingWindow from '../screens/EditingWindow';

import Rating from  '../screens/Rating';



// create stack type navigation
const Stack = createStackNavigator()

function GoToButton({ screenName }) {
  const navigation = useNavigation();
}
// The main page is signupfor_activity because it is on top of Stack.Screen
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name= 'Rating' component=  {Rating} />


      <Stack.Screen name= 'EditingWindow' component=  {EditingWindow}/>

      <Stack.Screen name= 'signupfor_activity' component= {signupfor_activity} />

      <Stack.Screen name= 'Location_List' component= {Location_List} />

      <Stack.Screen name= 'UserDetail' component= {UserDetail} />


      <Stack.Screen name='Overlay_test' component={Overlay_test} />

      

       
     
     
      <Stack.Screen name='Overlay' component={Overlay} />

      
      <Stack.Screen name='Index1' component={Index1} />
       
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainNavigator
