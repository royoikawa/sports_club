import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './src/navigation/MainNavigator'
export default function App() {
  return <MainNavigator />
}
/*
function HomeScreen({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to test"
        onPress={() => navigation.navigate('Test')}
      />

    </View>

  );

}
function TestScreen({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Test Screen</Text>

      <Button

      title="Go to Home"

      onPress={() => navigation.navigate('Home')}

    />

    </View>

  );

}
function DetailsScreen({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Details Screen</Text>

      <Button

      title="Go to Home"

      onPress={() => navigation.navigate('Home')}

    />

    </View>

  );

}
const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}*/