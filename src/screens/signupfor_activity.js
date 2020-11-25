import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import { Card,Searchbar } from 'react-native-paper';

import Constants from 'expo-constants';
import {
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

import Footer from '../screens/Footer';
const { width, height } = Dimensions.get('window');

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.blueline}>
        <Ionicons name="ios-arrow-back" size={26} color="white" />
        <Text style={styles.toptext}>已加入活動</Text>
        <Entypo name="home" size={24} color="white" />
      </View>
      <View style={styles.searchline}>
       
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon="search-web" 
          iconColor="#6A6AFF"
        />
      </View>

      <View style={styles.middle}>
         <Card style={styles.cardsty}>
            
            <Text style={styles.cardinside}>恩恩                                        房號  0001</Text>
          </Card>
          <Card style={styles.cardsty1}>
            <View style={styles.cardinsidetop}>
                <Ionicons name="md-person" size={24} color="black" />
                <Text style={styles.cardText}>5~7人   (目前3人)</Text>
            </View>
            <View style={styles.cardinside}>
                <FontAwesome name="location-arrow" size={24} color="black" />
                <Text style={styles.cardText}>台北  台科大     </Text>
                <Text style={ { borderBottomWidth : 1 ,justifyContent : "center"}}>Detail</Text>

            </View>
             <View style={styles.cardinside}>
              <MaterialCommunityIcons name="clock-alert" size={24} color="black" />
              <Text style={styles.cardText}>2020/09/30     </Text>
            </View>
         </Card>
       
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  blueline: {
    
    height : height * 0.055,
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    alignItems : 'center',
    backgroundColor: '#46A3FF',
    paddingLeft: width *0.065,
  },
  toptext: {
    color: '#FCFCFC',
    fontSize: 19,
    textAlign: 'center',
  },
  searchline: {
    flexDirection: 'row',
    alignItems : "center",
  },
  middle : {
     flex:9,
     backgroundColor : "#C1FFE4",
  },
  cardsty : {
    width :width * 0.8, 
    marginTop :30,
    marginLeft :25,
    paddingLeft :15,
    borderBottomWidth : 1,
  },
  cardsty1 : {
    width :width * 0.8, 
    marginLeft :25,
    paddingLeft :15,
    
  },
  cardinside :{
    flexDirection : "row",
    alignItems : "center",
    
  
  },
  cardinsidetop :{
    flexDirection : "row",
    
  },
  cardText : {
    paddingLeft :20,
  }
});
