import React,{Component,useState} from 'react';
import {Alert, Button, View, Text} from 'react-native';

export default class Index extends React.Component{
    render(){
    return(
        <View>
            <Text>good</Text>
             <Button
          title="Switch Test to UD" 
          onPress={() =>
            this.props.navigation.navigate('UserDetail')
          }
        />
        </View>
        
    )
        } 
}

