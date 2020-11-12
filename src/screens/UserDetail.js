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

 constructor(props) {
    super(props);
    this.state = {
     TypeOfSport: '排球',
    };

  }
  

   funselectfilter(){
    //const [selectedValue, setSelectedValue] = useState('java');
    //const [selectedIndex, setSelectedIndex] = useState('1');
   
  }
  render(){
      
  return (
    
    <View style={styles.container}>
      <View style={styles.userdatatop}>
        <Text style={{ color: '#ffffff',alignItems:"baseline" ,fontSize : 18}}>用戶名</Text>
        <Text style={{ paddingLeft:width * 0.355 }}></Text>
        <TouchableOpacity>
        
          <AntDesign
            name="closesquare"
            size={26}
            color="white"
            style={styles.iconclose}
            
          />
          
        </TouchableOpacity>
         
      </View>

      
      <View style={styles.userdatabottom}>
        <View>
          
        </View>
        
        <View>


          <View style={{flexDirection : "row"}}>

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
              style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>
              最擅長球類:
            </Text>
            <Text
              style={{
                color: '#930000',
                fontWeight: 'bold',
                paddingLeft: width *0.04,
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
                paddingLeft: width *0.1,
                fontSize: 18,
              }}>
              88
            </Text>
          </View>
        </View>   
         


            </View>
              



         




          <View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Text
                style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 ,paddingLeft : width *0.15}}>
                球品評價:
              </Text>
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width *0.035 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width *0.008 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width *0.008 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="#F9F900"
                style={{ paddingLeft: width *0.008 }}
              />
              <AntDesign
                name="star"
                size={24}
                color="gray"
                style={{ paddingLeft: width *0.008 }}
              />
            </View>
          </View>

          <View>
            
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Text
                style={{ color: '#000000', fontWeight: 'bold', fontSize: 18,paddingLeft : width *0.15 }}>
                各項球類詳細數據
              </Text>
                  
                  
              <Picker
                selectedValue={this.state.TypeOfSport}
                style={{ height: 25, width: width *0.24, marginLeft: width * 0.05 }}
                onValueChange={(ball) => {
                  this.setState({TypeOfSport : ball})
                 
                }}>
                <Picker.Item label="排球" value="java" />
                <Picker.Item label="其他" value="js" />
              </Picker>
              
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', marginTop: height *0.03 }}>
              <Card style={styles.cardsty}>
                <Text style={{ color: '#000000', fontSize: 16 ,}}>
                  綜合程度:88
                </Text>
              </Card>
            </View>
          </View>
         
        </View>
      </View>
       <View style={{width: width * 0.940 ,marginLeft:width * 0.015, borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,borderBottomWidth :1,borderLeftWidth:1,borderRightWidth:1}}>
            <LineChart
              data={{
                labels: [
                  '接發',
                  '扣球',
                  '舉球',
                  '發球\t\t',
                  '修正舉球\t\t\t',
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
              width={Dimensions.get('window').width * 0.934} // from react-native
              height={205}
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#84C1FF',
                backgroundGradientFrom: '#84C1FF',
                backgroundGradientTo: '#84C1FF',
                decimalPlaces: 2, // optional, defaults to 2dp
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
    paddingTop: Constants.statusBarHeight * 1,
    padding: 8,
  },
  userdatatop: {
    flexDirection: 'row',
    backgroundColor: '#6A6AFF',
    width: width * 0.94,
    height: height * 0.045,
    marginLeft: width *0.015,
    alignItems: 'center',
    paddingLeft: width * 0.38,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  
  userdatabottom: {
    flexDirection: 'row',
    width: width * 0.94,
    height: height * 0.40,
    backgroundColor: '#84C1FF',
    marginLeft: width *0.015,
    borderLeftWidth: 1,
    borderRightWidth: 1,
   
  },
  person: {
    marginTop : height *0.06,
     paddingLeft : width *0.15,
  },
  bottominfor: {
    flexDirection: 'row',
    marginTop: height *0.045,
    marginLeft: width *0.1,
  },
  bottomscore: {
    flexDirection: 'row',
    marginTop: height *0.025,
    marginLeft: width *0.1,
  },
  cardsty: {
    borderRadius: 8,
    borderWidth:1,
    width: width * 0.33,
    height: height * 0.05,
    marginLeft : width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
  },
});
