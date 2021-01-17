import React, { Component, useState } from "react";
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

import { Overlay } from "react-native-elements";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

import Overlay_test from "./Overlay_test";

import Modal from "./Overlay_test";

export default class create_room extends React.Component {
  // set initial state in constructor

  constructor(props) {
    super(props);

    this.state = {
      TypeOfSport: "排球",
      isVisible: true,
    };
  }

  funselectfilter() {}

  /*
  At line 224,Specify state status to value, use the click Picker.Item to change the value 
      index, and pass the changed value to Onvaluechange function.    
           
  At line 292, r: The radius of the inner circle point.    
  */
  render = () => {
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
              }}
            >
              邀請
            </Text>
            <Ionicons
              name="md-person-add"
              size={24}
              color="blue"
              style={{
                paddingLeft: width * 0.02,
              }}
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
          <TextInput style={styles.textinput} placeholder="5"></TextInput>

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
          <TextInput style={styles.textinput} placeholder="10"></TextInput>

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
          <Text
            style={{
              paddingLeft: width * 0.05,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            地點
          </Text>
          <TextInput
            style={styles.addressinput}
            placeholder="台北市大安區"
          ></TextInput>
        </View>

        <View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Ionicons
                name="md-person"
                size={55}
                color="black"
                style={styles.person}
              />
            </View>
            <View>
              <View style={styles.bottominfor}>
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  最擅長球類:
                </Text>
                <Text
                  style={{
                    color: "#930000",
                    fontWeight: "bold",
                    paddingLeft: width * 0.04,
                    fontSize: 18,
                  }}
                >
                  排球
                </Text>
              </View>

              <View style={styles.bottomscore}>
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  程度:
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    paddingLeft: width * 0.2,
                    fontSize: 18,
                  }}
                >
                  88
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row", marginTop: height * 0.035 }}>
              <Text
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingLeft: width * 0.15,
                }}
              >
                球品評價:
              </Text>
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width * 0.035 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width * 0.008 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width * 0.008 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width * 0.008 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="gray"
                style={{ paddingLeft: width * 0.008 }}
              />
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row", marginTop: height * 0.035 }}>
              <Text
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingLeft: width * 0.15,
                }}
              >
                各項球類詳細數據
              </Text>

              <Picker
                selectedValue={this.state.TypeOfSport}
                style={{
                  height: height * 0.035,
                  width: width * 0.27,
                  marginLeft: width * 0.05,
                }}
                onValueChange={(ball) => {
                  this.setState({ TypeOfSport: ball });
                }}
              >
                <Picker.Item label="排球" value="java" />
                <Picker.Item label="其他" value="js" />
              </Picker>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row", marginTop: height * 0.03 }}>
              <Card style={styles.cardsty}>
                <Text style={{ color: "#000000", fontSize: 16 }}>
                  綜合程度:88
                </Text>
              </Card>
            </View>
          </View>
        </View>

        <View
          style={{
            width: width * 0.92,
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1.5,
          }}
        >
          <LineChart
            data={{
              labels: [
                "接發",
                "扣球",
                "舉球",
                "發球\t",
                "修舉\t",
                "修攻",
                "接扣",
              ],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={width * 0.91666} // from react-native
            height={height * 0.33}
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#84C1FF",
              backgroundGradientFrom: "#84C1FF",
              backgroundGradientTo: "#84C1FF",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2.5",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 0.001,
            }}
          />
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
    height: height * 0.07,
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
