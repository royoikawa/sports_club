import React,{Component,useState} from 'react';
import { version } from 'react';
import {Alert, Button, View, StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class Index extends React.Component{
    render(){
    return(
        <View>
          <View>
                <Text>good</Text>
                <Button
              title="Switch Test to UD" 
              onPress={() =>
                this.props.navigation.navigate('UserDetail')
              }
            />

          </View>

           
          <View>
           
          

          </View>
      
        
        </View>

        
        
    )
        } 
}

const styles = StyleSheet.create({

  container: {
  
    padding: 8,
  },

  login:{

    width:70,

    height:24,

    position:'absolute',

    right:15,

    top:30,

    backgroundColor:'rgba(178,178,178,0.5)',

    borderRadius:3,

    justifyContent: 'center',

  },
  loginText:{

    fontSize:14,

    color:'white',

    height:24,

    textAlign:'center',

    lineHeight:24,

    opacity:1.0

  },

  });

