import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export  default class TestNav extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
          title="Open Msg" 
          onPress={() =>
            this.props.navigation.navigate('Msg')
          }
        />
        <Button
          title="Open UserD" 
          onPress={() =>
            this.props.navigation.navigate('UserD')
          }
        />
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});