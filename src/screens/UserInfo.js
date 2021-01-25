import React, { Component, useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
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

import { RadioButton } from "react-native-paper";


import axios from "axios";
import { CheckBox } from "react-native";

const { width, height } = Dimensions.get("window");

function UserInfo({ route,navigation }) {

     const [checked, setChecked] = useState("first");

     const [selectedValue, setSelectedValue] = useState("java");
      const [numup, setNumup] = useState(77);

      var reguid = route.params.uid;
      console.log(reguid);

    const [isSelectedTable, setTable] = useState(false);
    const [isSelectedVolley, setVolley] = useState(false);
    const [isSelectedBasket, setBasket] = useState(false);
    const [isSelectedBad, setBad] = useState(false);

    function upd() {
     
      const axios_config = {
        headers: {
          'Authorization': "Bearer keyUwcLvTO51TNEHV",
          "Content-Type": "application/json"
        },
      };
      const url =
        "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/User/?api_key=keyUwcLvTO51TNEHV";

      res()
      async function res() {
        
        const result = await axios.get(url, axios_config);
        var len = (result.data.records).length
        for (var i = 0; i < len; i++) {
          if (result.data.records[i].fields.uid == reguid  ) {
            var rid = result.data.records[i].id;
            console.log(rid+" "+reguid);
            const upurl =
              "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/User/" +
              rid +
              "?api_key=keyUwcLvTO51TNEHV";

            const updata = {

              "fields": {
                "u_gen": parseInt(checked),
                "u_area": selectedValue
                
              }
            }
            const result2 =  await axios.patch(upurl, updata, axios_config);
             console.log(result.data.records[i]);
          }
        }
      }
    }
    function Postuserinfo()
    {
        upd();
        navigation.navigate("Login");
    }


    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.toptext}>填寫個人資料</Text>
        </View>

        <View style={styles.picture}>
          <Ionicons name="md-person" size={54} color="black" />
        </View>

        <View style={styles.inputarea}>
          <View style={styles.username}>
            <Text style={styles.userinfor}>用戶名</Text>
            <View style={{ borderBottomWidth: 1.5, width: width * 0.5 }}>
              <Text style={{ paddingLeft: width * 0.02 }}>AK47</Text>
            </View>
          </View>
          <View style={styles.username}>
            <Text style={styles.userinfor}>性別</Text>
            <RadioButton
              value="0"
              status={checked === "0" ? "checked" : "unchecked"}
              onPress={() => setChecked("0")}
              color="black"
            />
            <Text style={{ paddingRight: width * 0.05 }}>男</Text>
            <RadioButton
              value="1"
              status={checked === "1" ? "checked" : "unchecked"}
              onPress={() => setChecked("1")}
              color="black"
            />
            <Text>女</Text>
          </View>

          <View style={styles.username}>
            <Text style={styles.userinfor}>地區</Text>
            <Picker
              selectedValue={selectedValue}
              style={{ height: height * 0.1, width: width * 0.6 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <View style={styles.username}>
            <Text style={styles.userinfor}>擅長球類(可複選)</Text>
          </View>

          <View>
            <View style={styles.choose}>
              <CheckBox
                value={isSelectedTable}
                onValueChange={setTable}
                style={styles.checkbox}
              />
              <Text>桌球</Text>
              <CheckBox
                value={isSelectedBasket}
                onValueChange={setBasket}
                style={styles.checkbox}
              />
              <Text>籃球</Text>
              <CheckBox
                value={isSelectedVolley}
                onValueChange={setVolley}
                style={styles.checkbox}
              />
              <Text>排球</Text>
              <CheckBox
                value={isSelectedBad}
                onValueChange={setBad}
                style={styles.checkbox}
              />
              <Text>羽球</Text>
            </View>
          </View>
          <View
            style={{
              height: height * 0.05,
              flexDirection: "row",
              marginTop: height * 0.05,
            }}
          >
            <TouchableOpacity
              onPress={() => Postuserinfo()}
            >
              <View style={styles.button}>
                <Text style={{ paddingTop: height * 0.02, color: "white" }}>
                  填寫球類自我評分
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
   

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
  },
  head: {
    flexDirection: "row",
    backgroundColor: "#2894FF",
    height: height * 0.1,
    alignItems: "baseline",
    paddingLeft: width * 0.05,
  },
  toptext: {
    paddingLeft: width * 0.25,
    fontSize: 19,
    color: "white",
  },
  picture: {
    backgroundColor: "#2894FF",
    height: height * 0.15,
    paddingLeft: width * 0.4,
  },
  inputarea: {},
  username: {
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.1,
  },
  userinfor: {
    paddingLeft: width * 0.13,
    paddingRight: width * 0.05,
    fontSize: 18,
    color: "#9D9D9D",
    fontWeight: "bold",
  },
  textinput: {
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    width: "75%",
    borderRadius: 10,
    marginBottom: 20,
  },
  choose: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: width * 0.11,
    height: height * 0.04,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4A4AFF",
    width: width * 0.5,
    height: height * 0.07,
    marginLeft: width * 0.2,
    borderRadius: 7,
  },
});

export default UserInfo