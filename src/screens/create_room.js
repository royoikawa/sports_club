import React, { Component, useState } from "react";

import axios from "axios";

import {
  Button,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
  
} from "react-native";

import Constants from "expo-constants";

import { useNavigation } from "@react-navigation/native";

import { withNavigation } from "react-navigation";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { XAxis, YAxis } from "react-native-svg-charts";

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

// set window width,height
const { width, height } = Dimensions.get("window");


import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Overlay } from "react-native-elements";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

import Overlay_test from "./Overlay_test";


import Modal from "react-native-modal";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

export default class create_room extends React.Component {
  // set initial state in constructor

 

  constructor(props) {
    super(props);

    this.state = {
      TypeOfSport: "排球",
      place: "台北",
      setpmin: 0,
      setpmax: 10,
      timehourbegin: 0,
      timehourend: 0,
      timeminutebegin: 0,
      timeminuteend: 0,
      lowest_sco: 0,
      highest_sco: 9,
      isDatePickerVisible: false,
      isVisible: true,
      date: date,
    };
  }

  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  setDate = (dates) => {
    this.setState({
      date: dates,
    });
  };

  

  funselectfilter() {}

  /*
  At line 224,Specify state status to value, use the click Picker.Item to change the value 
      index, and pass the changed value to Onvaluechange function.    
           
  At line 292, r: The radius of the inner circle point.    
  */
  render = () => {
    var u_name = this.props.route.params.name;
    var ballopt = 0;
    var r_ball=this.state.TypeOfSport;
    var r_pmin = this.state.setpmin;
    var r_pmax = this.state.setpmax;
    var r_place = this.state.place;
     const axios_config = {
       headers: {
         'Authorization': "Bearer keyUwcLvTO51TNEHV",
         'Content-Type': "application/json"
       }
     };
     const url =
       "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/room?api_key=keyYDUJ2A3aj7Z5M7";

    async function PostroomData() {
      /*
      if (this.state.TypeOfSport.equals("排球"))
      {
         ballopt=1;
      }
      */

      const newRoom = {
        "fields": {
          "rid": 1,
          "r_user": u_name,
          "r_ball": ballopt,
          "r_pmin": parseInt(r_pmin),
          "r_pmax": parseInt(r_pmax),
          "r_place": r_place
        }
      }
      
      alert(newRoom.fields.rid);
      alert("enter");
      //alert(newPerson.fields.uid);

      const result = await axios.post(url, newRoom, axios_config);

      alert(result.data.fields.uid);
      //console.log(result);

      //setPersons(result.data.records);

      //props.update();
    }

    function Create_room()
    {
        PostroomData();
        alert("ok")
    }
    const showDatePicker = () => {
      this.setState({ isDatePickerVisible : true});
    };

    const hideDatePicker = () => {
      this.setState({ isDatePickerVisible: false });
    };

    const handleConfirm = (date) => {
      var changeddate =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate();
      this.setState({date : changeddate})
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

   

    return (
      <View style={styles.container}>
        <View style={styles.userdatatop} navigation={this.props.navigation}>
          <Text
            style={{ color: "#ffffff", alignItems: "baseline", fontSize: 18 }}
          >
            建立房間
          </Text>

          <TouchableHighlight>
            <AntDesign
              name="closesquare"
              size={26}
              color="white"
              style={styles.iconclose}
              onPress={() => this.setState({ isModalVisible: false })}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.userdatabottom}>
          <View style={styles.createtype}>
            <View style={{ backgroundColor: "white", borderWidth: 1.5 }}>
              <Picker
                selectedValue={this.state.TypeOfSport}
                style={{
                  height: height * 0.035,
                  width: width * 0.38,
                }}
                onValueChange={(ball) => {
                  this.setState({ TypeOfSport: ball });
                }}
              >
                <Picker.Item label="排球" value="java" />
                <Picker.Item label="其他" value="js" />
              </Picker>
            </View>

            <Text
              style={{
                paddingLeft: width * 0.2,
                fontSize: 17,
              }}
            >
              邀請
            </Text>
            <Ionicons
              name="md-person-add"
              size={30}
              color="blue"
              style={{
                paddingLeft: width * 0.03,
              }}
              onPress={() => alert("invite")}
            />
          </View>
        </View>

        <View style={styles.create_room_infor}>
          <Text
            style={{
              paddingLeft: width * 0.05,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            人數
          </Text>
          <Text
            style={{
              paddingLeft: width * 0.06,
              fontSize: 14,
            }}
          >
            最少
          </Text>
          <TextInput
            style={styles.textinput}
            placeholder="5"
            onChangeText={(min) => this.setState({ setpmin: min })}
          ></TextInput>

          <Text
            style={{
              paddingLeft: width * 0.03,
              fontSize: 14,
            }}
          >
            人
          </Text>
        </View>

        <View style={styles.create_room_infor}>
          <Text
            style={{
              paddingLeft: width * 0.21,
              fontSize: 14,
            }}
          >
            最多
          </Text>
          <TextInput
            style={styles.textinput}
            placeholder="10"
            onChangeText={(max) => this.setState({ setpmax: max })}
          ></TextInput>

          <Text
            style={{
              paddingLeft: width * 0.03,
              fontSize: 14,
            }}
          >
            人
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#84C1FF",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            width: width * 0.92,
            height: height * 0.11,
          }}
        >
          <Text style={styles.inputitem}>地點</Text>
          <TextInput
            style={styles.addressinput}
            placeholder="台北市大安區"
            onChangeText={(text) => this.setState({ place: text })}
          ></TextInput>
        </View>

        <View
          style={{
            backgroundColor: "#84C1FF",
            flexDirection: "row",
            alignItems: "baseline",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            width: width * 0.92,
            height: height * 0.07,
          }}
        >
          <Text style={styles.inputitem}>時段</Text>

          <MaterialCommunityIcons
            name="calendar"
            size={31}
            color="red"
            style={{ paddingLeft: width * 0.1 }}
            onPress={showDatePicker}
          >
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              mode="date"
              date={this.today}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </MaterialCommunityIcons>

          <Text style={styles.inputitem}>{this.state.date}</Text>
        </View>

        <View
          style={{
            backgroundColor: "#84C1FF",
            flexDirection: "row",
            paddingLeft: width * 0.25,
            alignItems: "baseline",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            width: width * 0.92,
            height: height * 0.06,
          }}
        >
          <View style={{ backgroundColor: "white", borderWidth: 1.5 }}>
            <Picker
              selectedValue={this.state.timehourbegin}
              style={styles.pickertime}
              onValueChange={(ball) => {
                this.setState({ timehourbegin: ball });
              }}
            >
              <Picker.Item label="06" value="java" />
              <Picker.Item label="08" value="js" />
              <Picker.Item label="10" value="js" />
              <Picker.Item label="12" value="java" />
              <Picker.Item label="14" value="js" />
              <Picker.Item label="16" value="js" />
            </Picker>
          </View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              paddingLeft: width * 0.015,
              paddingRight: width * 0.015,
            }}
          >
            :
          </Text>

          <View style={{ backgroundColor: "white", borderWidth: 1.5 }}>
            <Picker
              selectedValue={this.state.timeminutebegin}
              style={styles.pickertime}
              onValueChange={(ball) => {
                this.setState({ timeminutebegin: ball });
              }}
            >
              <Picker.Item label="00" value="java" />
              <Picker.Item label="01" value="js" />
            </Picker>
          </View>

          <Text style={{ fontWeight: "bold", paddingLeft: width * 0.015 }}>
            到
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#84C1FF",
            flexDirection: "row",
            paddingLeft: width * 0.25,
            alignItems: "baseline",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            width: width * 0.92,
            height: height * 0.07,
          }}
        >
          <View style={{ backgroundColor: "white", borderWidth: 1.5 }}>
            <Picker
              selectedValue={this.state.timehourend}
              style={styles.pickertime}
              onValueChange={(ball) => {
                this.setState({ timehourend: ball });
              }}
            >
              <Picker.Item label="07" value="java" />
              <Picker.Item label="09" value="js" />
              <Picker.Item label="11" value="js" />
              <Picker.Item label="12" value="java" />
              <Picker.Item label="15" value="js" />
              <Picker.Item label="17" value="js" />
            </Picker>
          </View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              paddingLeft: width * 0.015,
              paddingRight: width * 0.015,
            }}
          >
            :
          </Text>

          <View style={{ backgroundColor: "white", borderWidth: 1.5 }}>
            <Picker
              selectedValue={this.state.timeminuteend}
              style={styles.pickertime}
              onValueChange={(ball) => {
                this.setState({ timeminuteend: ball });
              }}
            >
              <Picker.Item label="00" value="java" />
              <Picker.Item label="01" value="js" />
            </Picker>
          </View>
        </View>

        <View style={styles.create_room_infor}>
          <Text style={styles.inputitem}>程度</Text>
          <Text
            style={{
              paddingLeft: width * 0.1,
              fontSize: 15,
            }}
          >
            評分數值
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#84C1FF",
            flexDirection: "row",
            paddingLeft: width * 0.25,
            alignItems: "baseline",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            width: width * 0.92,
            height: height * 0.07,
          }}
        >
          <View style={{ backgroundColor: "white", borderWidth: 1.5 }}>
            <Picker
              selectedValue={this.state.lowest_sco}
              style={styles.pickertime}
              onValueChange={(ball) => {
                this.setState({ lowest_sco: ball });
              }}
            >
              <Picker.Item label="0" value="bad" />
              <Picker.Item label="9" value="good" />
            </Picker>
          </View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              paddingLeft: width * 0.015,
              paddingRight: width * 0.015,
            }}
          >
            ~
          </Text>

          <View style={{ backgroundColor: "white", borderWidth: 1.5 }}>
            <Picker
              selectedValue={this.state.highest_sco}
              style={styles.pickertime}
              onValueChange={(ball) => {
                this.setState({ highest_sco: ball });
              }}
            >
              <Picker.Item label="1" value="badlimit" />
              <Picker.Item label="10" value="goodlimit" />
            </Picker>
          </View>
        </View>

        <View style={styles.create_button}>
          <TouchableHighlight
            underlayColor="rgb(210, 230, 255)"
            activeOpacity={0.5}
            style={{
              borderRadius: 8,
              borderWidth: 1.5,
              paddingLeft: width * 0.07,
              paddingTop: height * 0.015,
              width: width * 0.25,
              height: height * 0.07,
              marginTop: height * 0.02,
              marginLeft: width * 0.27,
              backgroundColor: "white",
            }}
            onPress={Create_room}
          >
            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
              創建
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 0.5,
    alignItems: "center",
  },
  userdatatop: {
    flexDirection: "row",
    backgroundColor: "#6A6AFF",
    width: width * 0.92,
    height: height * 0.045,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: width * 0.35,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },

  userdatabottom: {
    flexDirection: "row",
    width: width * 0.92,
    height: height * 0.11,
    backgroundColor: "#84C1FF",

    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  createtype: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: height * 0.04,
    marginLeft: width * 0.05,
    height: height * 0.04,
  },
  create_room_infor: {
    flexDirection: "row",
    alignItems: "baseline",
    width: width * 0.92,
    height: height * 0.05,
    backgroundColor: "#84C1FF",

    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  create_button: {
    flexDirection: "row",
    alignItems: "baseline",
    width: width * 0.92,
    height: height * 0.13,
    backgroundColor: "#84C1FF",

    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  textinput: {
    height: 25,
    marginLeft: width * 0.03,

    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    width: "15%",
    borderRadius: 1,
    marginBottom: 20,
  },
  addressinput: {
    height: 25,
    marginLeft: width * 0.05,
    marginTop: height * 0.01,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    width: "75%",
    borderRadius: 1,
    marginBottom: 20,
  },
  inputitem: {
    paddingLeft: width * 0.05,
    fontSize: 17,
    fontWeight: "bold",
  },
  pickertime: {
    height: height * 0.035,
    width: width * 0.23,
  },
  person: {
    marginTop: height * 0.06,
    paddingLeft: width * 0.15,
  },
  bottominfor: {
    flexDirection: "row",
    marginTop: height * 0.045,
    marginLeft: width * 0.1,
  },
  bottomscore: {
    flexDirection: "row",
    marginTop: height * 0.025,
    marginLeft: width * 0.1,
  },
  cardsty: {
    borderRadius: 8,
    borderWidth: 1,
    width: width * 0.33,
    height: height * 0.05,
    marginLeft: width * 0.15,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 3,
  },
});
