import React, { Component ,useState } from 'react';
import {
  Button,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
} from 'react-native';

import Constants from 'expo-constants';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import { XAxis, YAxis } from 'react-native-svg-charts';

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
} from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class  UserDetail extends React.Component {
 
  render(){
       const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <View style={styles.userdatatop}>
        <Text style={{ color: '#ffffff' }}>用戶名</Text>
        <TouchableOpacity>
          <AntDesign
            name="closesquare"
            size={26}
            color="white"
            style={styles.iconclose}
            
          />
          
        </TouchableOpacity>
         <Button
          title="Switch Test to UD" 
          onPress={() =>
            this.props.navigation.navigate('UserDetail')
          }
        />
      </View>

      
      <View style={styles.userdatabottom}>
        <Ionicons
          name="md-person"
          size={55}
          color="black"
          style={styles.person}
        />
        <View>
          <View style={styles.bottominfor}>
            <Text
              style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>
              最擅長球類:
            </Text>
            <Text
              style={{
                color: '#930000',
                fontWeight: 'bold',
                paddingLeft: 20,
                fontSize: 18,
              }}>
              排球
            </Text>
          </View>

          <View style={styles.bottomscore}>
            <Text
              style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>
              程度:
            </Text>
            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                paddingLeft: 80,
                fontSize: 18,
              }}>
              88
            </Text>
          </View>

          <View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Text
                style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>
                球品評價:
              </Text>
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: 15 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: 2 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: 2 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: 2 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="gray"
                style={{ paddingLeft: 2 }}
              />
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Text
                style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>
                各項球類詳細數據
              </Text>
                  
                  
              <Picker
                selectedValue={selectedValue}
                style={{ height: 25, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="排球" value="java" />
                <Picker.Item label="其他" value="js" />
              </Picker>
              
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Card style={styles.cardsty}>
                <Text style={{ color: '#000000', fontSize: 14 }}>
                  綜合程度:88
                </Text>
              </Card>
            </View>
          </View>
         
        </View>
      </View>
       <View style={{width: width * 0.90 ,marginLeft:10, borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,borderBottomWidth :1,borderLeftWidth:1,borderRightWidth:1}}>
            <LineChart
              data={{
                labels: [
                  '接發',
                  '扣球',
                  '舉球',
                  '發球',
                  '修正舉球',
                  '修正攻擊',
                  '接扣',
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
              width={Dimensions.get('window').width * 0.895} // from react-native
              height={200}
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#84C1FF',
                backgroundGradientFrom: '#84C1FF',
                backgroundGradientTo: '#84C1FF',
                decimalPlaces: 3, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2.5',
                  stroke: '#ffa726',
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
    }
   
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight * 2.2,
    padding: 8,
  },
  userdatatop: {
    flexDirection: 'row',
    backgroundColor: '#6A6AFF',
    width: width * 0.9,
    height: height * 0.045,
    marginLeft: 10,
    alignItems: 'center',
    paddingLeft: 127,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  iconclose: {
    paddingLeft: 127,
  },
  userdatabottom: {
    flexDirection: 'row',
    width: width * 0.9,
    height: height * 0.40,
    backgroundColor: '#84C1FF',
    marginLeft: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
   
  },
  person: {},
  bottominfor: {
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 95,
  },
  bottomscore: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 95,
  },
  cardsty: {
    borderRadius: 8,
    width: width * 0.33,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
  },
});
