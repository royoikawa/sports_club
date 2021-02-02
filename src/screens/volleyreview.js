import React, {useState}  from "react";

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
import basketreview from "./basketreview";


export default function volleyreview ({route,navigation}){
 
 

  
   const axios_config = {
     headers: {
       Authorization: "Bearer keyUwcLvTO51TNEHV",
       "Content-Type": "application/json",
     },
   };
   const url =
     "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/volley?api_key=keyYDUJ2A3aj7Z5M7";

 const [value_cser, setValue_cser] = useState(0);
 const [value_ser, setValue_ser] = useState(0);
 const [value_lb, setValue_lb] = useState(0);
 const [value_spi, setValue_spi] = useState(0);
 const [value_flb, setValue_flb] = useState(0);
 const [value_fspi, setValue_fspi] = useState(0);
 const [value_cspi, setValue_cspi] = useState(0);

 var uid= route.params.userid;
 console.log(uid);

  var sco =
    (value_cser +
      value_ser +
      value_lb +
      value_spi +
      value_flb +
      value_fspi+
      value_cspi 
    ) /
    7.0;


 const newVolley = {

   "fields": {
     "u_id": uid,
     "v_cser": parseInt(value_cser),
     "v_ser": parseInt(value_ser),
     "v_lb": parseInt(value_lb),
     "v_spi": parseInt(value_spi),
     "v_flb": parseInt(value_flb),
     "v_fspi": parseInt(value_fspi),
     "v_cspi": parseInt(value_cspi),
     "v_sco" : parseFloat(sco)
   }
 }

 

 function postvolley_rev ()
 {
  
   PostvolleyData();
   async function PostvolleyData() {
      console.log("Hiiii");
     const result = await axios.post(url, newVolley, axios_config);

     alert(result.data.fields.u_id);
     uid= result.data.fields.u_id ;
    
   }
    navigation.navigate("basketreview", { uid });
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
            排球
          </Text>
          <Image
            style={{ marginLeft: width * 0.015, width: 22, height: 22 }}
            source={require("../../Image/volleyball.png")}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("basketreview", { uid })}
          >
            <View style={styles.button}>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                略過排球自評
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.reviewItems}>
          <Text style={styles.itemtext}>接發</Text>
          <Text style={{ paddingLeft: width * 0.1 }}>0</Text>
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
          <Text style={styles.itemtext}>扣球</Text>
          <Text style={{ paddingLeft: width * 0.1 }}>0</Text>
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
          <Text style={styles.itemtext}>舉球</Text>
          <Text style={{ paddingLeft: width * 0.1 }}>0</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={value_lb}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onValueChange={(sliderValue) => setValue_lb(sliderValue)}
          />
          <Text>10</Text>
        </View>

        <View style={styles.reviewItems}>
          <Text style={styles.itemtext}>發球</Text>
          <Text style={{ paddingLeft: width * 0.1 }}>0</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={value_spi}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onValueChange={(sliderValue) => setValue_spi(sliderValue)}
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
          <Text style={styles.itemtext1}>修正舉球</Text>
          <Text style={{ paddingLeft: width * 0.045 }}>0</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={value_flb}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onValueChange={(sliderValue) => setValue_flb(sliderValue)}
          />
          <Text>10</Text>
        </View>

        <View style={styles.reviewItems}>
          <Text style={styles.itemtext1}>修正攻擊</Text>
          <Text style={{ paddingLeft: width * 0.045 }}>0</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={value_fspi}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onValueChange={(sliderValue) => setValue_fspi(sliderValue)}
          />
          <Text>10</Text>
        </View>

        <View style={styles.reviewItems}>
          <Text style={styles.itemtext}>接扣</Text>
          <Text style={{ paddingLeft: width * 0.1 }}>0</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={value_cspi}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onValueChange={(sliderValue) => setValue_cspi(sliderValue)}
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
              前往籃球評分{" "}
              <AntDesign name="arrowright" size={22} color="white" />
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
});
