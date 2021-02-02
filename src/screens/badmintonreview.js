import React, { useState } from "react";

import axios from "axios";

import {
  Alert,
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
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

const { width, height } = Dimensions.get("window");

import { withNavigation } from "react-navigation";
import Location_detail from "./Location_detail";
import Mapview from "./Mapview";

import Slider from "@react-native-community/slider";

export default function badmintonreview({ route, navigation }) {

  const axios_config = {
    headers: {
      'Authorization': "Bearer keyUwcLvTO51TNEHV",
      "Content-Type": "application/json",
    },
  };
  const url =
    "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/badminton?api_key=keyYDUJ2A3aj7Z5M7";

  const [value_shot, setValue_shot] = useState(0);
  const [value_dri, setValue_dri] = useState(0);
  const [value_lay, setValue_lay] = useState(0);
  const [value_cut, setValue_cut] = useState(0);
  const [value_backb, setValue_backb] = useState(0);
  const [value_stb, setValue_stb] = useState(0);
  const [value_eur, setValue_eur] = useState(0);


   var sco =
     (value_shot +
       value_dri +
       value_lay +
       value_cut +
       value_backb +
       value_stb +
       value_eur 
     ) /
     7.0;


  var uid = route.params.uid;
  

  const newBadminton = 
  {

    "fields": {
      "u_id": uid,
      "ba_cser": parseInt(value_shot),
      "ba_ser": parseInt(value_dri),
      "ba_ls": parseInt(value_lay),
      "ba_spi": parseInt(value_cut),
      "ba_cspi": parseInt(value_backb),
      "ba_run": parseInt(value_stb),
      "ba_aim": parseInt(value_eur),
      "ba_sco" : parseFloat(sco)
    }
  }

 

  function postbadminton_rev() {
    PostbadminData();
    async function PostbadminData() {
     
      const result = await axios.post(url, newBadminton, axios_config);

      alert(result.data.fields.u_id);
      
      navigation.navigate("TableTennisReview", { uid });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.blueline}>
        <Ionicons
          name="ios-arrow-back"
          size={36}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.toptext}>球類技術自評</Text>
        <Text></Text>
      </View>
      <View style={styles.reviewtopic}>
        <Text
          style={{
            marginLeft: width * 0.08,
            fontSize: 18,
            color: "#BB3D00",
            fontWeight: "bold",
          }}
        >
          羽球
        </Text>
        <Image
          style={{ marginLeft: width * 0.015, width: 22, height: 22 }}
          source={require("../../Image/badminton.png")}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("TableTennisReview", { uid })}
        >
          <View style={styles.button}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              略過羽球自評
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>接發</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_shot}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_shot(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext3}>長短球</Text>
        <Text style={{ paddingLeft: width * 0.06 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_dri}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_dri(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>發球 </Text>
        <Text style={{ paddingLeft: width * 0.08 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_lay}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_lay(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>殺球</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_cut}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_cut(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>接殺</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_backb}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_backb(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View
        style={{
          borderTopWidth: 1,
          marginLeft: width * 0.05,
          width: width * 0.9,
          height: height * 0.03,
        }}
      ></View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>跑位</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_stb}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_stb(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>打點</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_eur}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_eur(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View>
        <TouchableOpacity
          underlayColor="rgb(113, 183, 185)"
          activeOpacity={0.5}
          style={{
            borderRadius: 8,
            borderWidth: 1.5,
            paddingLeft: width * 0.07,

            width: width * 0.45,
            height: height * 0.07,
            alignItems: "baseline",
            justifyContent: "center",
            marginLeft: width * 0.32,
            backgroundColor: "#2894FF",
          }}
          onPress={() => postbadminton_rev()}
        >
          <Text style={{ fontSize: 17, color: "white", fontWeight: "bold" }}>
            前往桌球評分 <AntDesign name="arrowright" size={22} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
  },
  blueline: {
    width: width,
    height: height * 0.06,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#46A3FF",
    paddingLeft: 10,
  },
  toptext: {
    color: "#FCFCFC",
    fontSize: 22,
    textAlign: "center",
  },
  reviewtopic: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.015,
    height: height * 0.1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ADADAD",
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.4,
    paddingTop: height * 0.01,
    borderWidth: 1,
    borderRadius: 7,
  },
  reviewItems: {
    flexDirection: "row",
    marginLeft: width * 0.1,
    height: height * 0.08,
  },
  itemtext: {
    fontSize: 16,
    color: "#6C6C6C",
    fontWeight: "bold",
    marginLeft: width * 0.03,
  },
  itemtext1: {
    fontSize: 16,
    color: "#6C6C6C",
    fontWeight: "bold",
  },
  itemtext3: {
    fontSize: 16,
    color: "#6C6C6C",
    fontWeight: "bold",
    marginLeft: width * 0.015,
  },
});
