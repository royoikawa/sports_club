
 
import { create } from "apisauce";
import React, { Component, useState } from "react";
import {
  Button,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";

import {
  AntDesign,
  Ionicons,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import axios from "axios";

const { width, height } = Dimensions.get("window");


 
export default class APIRetrofittest extends React.Component {
 
    
 
   
   
 
    render = () => {

    var params=
    {
        r_pmax: 12
    }

      const api = create({
        baseURL: "https://airtable.com/api",
        headers: { Authorization: "Bearer keyUwcLvTO51TNEHV" }
      });
      function search()
      {
         var result= api.get(
              "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/room/?api_key=keyYDUJ2A3aj7Z5M7",
              {  rid: parseInt(1),r_pmax: parseInt(12) }
                
            )
            .then((response) => response.data.records)
            .then(console.log);

            //console.log(result.data.records)
      }
      

     
        return (
          <View style={styles.container}>
            <View style={styles.blueline}>
              <Ionicons
                name="ios-arrow-back"
                size={30}
                color="white"
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
              <Text style={styles.toptext}>場館資訊列表</Text>
              <Entypo
                name="home"
                size={30}
                color="white"
                onPress={() => {
                  this.props.navigation.navigate("Index1");
                }}
              />
            </View>
            <View>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Enter text to search an image"
                returnKeyType="search"
                autoFocus={true}
                onChangeText={(text) => this.setState({ text: text })}
                onSubmitEditing={() => search()}
              />
            </View>
          </View>
        );
       
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  blueline: {
    width: width,
    height: height * 0.058,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#46A3FF",
    paddingLeft: width * 0.07,
  },
});