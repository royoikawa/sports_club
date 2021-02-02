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

export default function TableTennisReview({ route, navigation }) {
  const axios_config = {
    headers: {
      Authorization: "Bearer keyUwcLvTO51TNEHV",
      "Content-Type": "application/json",
    },
  };
  const url =
    "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/table_tennis?api_key=keyYDUJ2A3aj7Z5M7";

  const [value_cser, setValue_cser] = useState(0);
  const [value_ser, setValue_ser] = useState(0);
  const [value_fore, setValue_fore] = useState(0);
  const [value_back, setValue_back] = useState(0);
  const [value_cut, setValue_cut] = useState(0);
  const [value_pb, setValue_pb] = useState(0);
  const [value_twi, setValue_twi] = useState(0);

  const [value_cho, setValue_cho] = useState(0);

   const [value_blo, setValue_blo] = useState(0);

  var uid = route.params.uid;

   var sco =
     (value_cser +
       value_ser +
       value_fore +
       value_back +
       value_cut +
       value_pb +
       value_twi +
       value_cho +
       value_blo) /
     9.0;

  const newTableTennis = 
  {
    fields: {
      u_id: uid,
      t_cser: parseInt(value_cser),
      t_ser: parseInt(value_ser),
      t_fore: parseInt(value_fore),
      t_back: parseInt(value_back),
      t_cut: parseInt(value_cut),
      t_pb: parseInt(value_pb),
      t_twi: parseInt(value_twi),
      t_cho: parseInt(value_cho),
      t_blo: parseInt(value_blo),
      "t_sco" : parseFloat(sco)
    }
  }


  function postvolley_rev() {
    PostvolleyData();
    async function PostvolleyData() {
      console.log("Hiiii");
      const result = await axios.post(url, newTableTennis, axios_config);

      alert(result.data.fields.u_id);
      uid = result.data.fields.u_id;
      navigation.navigate("Login", { uid });
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
          桌球
        </Text>
        <Image
          style={{ marginLeft: width * 0.015, width: 22, height: 22 }}
          source={require("../../Image/table-tennis.png")}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login", { uid });
          }}
        >
          <View style={styles.button}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              略過桌球自評
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
          value={value_cser}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_cser(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>正手</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_ser}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_ser(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>反手</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_fore}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_fore(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>發球</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_back}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_back(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>切球</Text>
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

      <View
        style={{
          borderTopWidth: 1,
          marginLeft: width * 0.05,
          width: width * 0.9,
          height: height * 0.03,
        }}
      ></View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext4}>拉下旋球</Text>
        <Text style={{ paddingLeft: width * 0.035 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_pb}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_pb(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>擰球</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_twi}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_twi(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext4}>中台拉球</Text>
        <Text style={{ paddingLeft: width * 0.035 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_cho}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_cho(sliderValue)}
        />
        <Text>10</Text>
      </View>

      <View style={styles.reviewItems}>
        <Text style={styles.itemtext}>削球</Text>
        <Text style={{ paddingLeft: width * 0.09 }}>0</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value_blo}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={(sliderValue) => setValue_blo(sliderValue)}
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
          onPress={() => postvolley_rev()}
        >
          <Text style={{ fontSize: 17, color: "white", fontWeight: "bold" }}>
            進入系統 <AntDesign name="arrowright" size={22} color="white" />
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
    marginBottom: height * 0.03,
    marginTop: height *0.01,
    height: height * 0.06,
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
    height: height * 0.064,
  },
  itemtext: {
    fontSize: 16,
    color: "#6C6C6C",
    fontWeight: "bold",
    marginLeft: width * 0.03,
  },
  itemtext4: {
    fontSize: 16,
    color: "#6C6C6C",
    fontWeight: "bold",
  },
});
