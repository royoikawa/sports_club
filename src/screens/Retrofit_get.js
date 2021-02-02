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

export default class Retrofit_get extends React.Component {
  //Default state
  state = {
    text: null,
    r_pmax: 0,
    loading: false,
    error: null,
  };

  changestate() {}

  render = () => {
    function search() {
      GetData();
    }

    const Pmax = this.state.r_pmax;
    async function GetData() {
      const res = await axios
        .get(
          "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/room?api_key=keyYDUJ2A3aj7Z5M7"
        )
        .then(function (response) {
          //promise is resolved and 'then' block is triggered
          //set state with new values
          console.log("Everything is awesome.");
          console.log(response.data.records);
          console.log("-------------------------------");
          /*
          this.setState({
            "r_pmax": response.data.records.fields,
            error: null,
            loading: false,
          });
          */
        })
        .catch(function (error) {
          console.log(error);
        });
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
  };
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
