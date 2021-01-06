import * as React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Footer from '../screens/Footer';

// or any pure javascript modules available in npm
import { Card, Searchbar } from 'react-native-paper';

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

//抓取螢幕寬高度
//const  = Dimensions.get('screen');
const { width, height } = Dimensions.get('window');
//顯示可使用的場地


export default class  Location_List extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  
  render = () => {

    const { search } = this.state;

  return (

    <View style={styles.container}>
      <View style={styles.blueline}>
        <Ionicons name="ios-arrow-back" size={30} color="white" 
        
           onPress={() => {
            this.props.navigation.goBack()
          } }

        />
        <Text style={styles.toptext}>場館資訊列表</Text>
        <Entypo name="home" size={30} color="white" 
          onPress={() => {
            this.props.navigation.navigate('Index1')
          } }
     />
      </View>
      <View style={styles.searchline}>
        <Searchbar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
          icon="search-web"
          iconColor="#6A6AFF"
        />
      </View>
  
    

      <View style={styles.listline}>
        <Card style={styles.cardtopline}>
          <View style={styles.midviwline}>
            <Image
              source={require('../screens/image_locate.jpg')}
              style={styles.imagesty}></Image>
            <View style={styles.listtopic}>
              <Text style={styles.listtext}>巨力乒乓 </Text>
              <View style={styles.textdetail}>
                <Text>地區: </Text>
                <Text style={{ color: '#D94600' }}> 新北市 </Text>
                <Text> 負責人: </Text>
                <Text style={{ color: '#007500' }}> 黃銘輝 </Text>
              </View>
              <View style={styles.textdetail}>
                <Text>聯絡電話: </Text>
                <Text style={{ color: '#272727', fontWeight: 'bold' }}>
                  29742916
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Card style={styles.cardline}>
          <View style={styles.midviwline}>
            <Image
              source={require('../screens/image_locate.jpg')}
              style={styles.imagesty}></Image>
            <View style={styles.listtopic}>
              <Text style={styles.listtext}>巨力乒乓 </Text>
              <View style={styles.textdetail}>
                <Text>地區: </Text>
                <Text style={{ color: '#D94600' }}> 新北市 </Text>
                <Text> 負責人: </Text>
                <Text style={{ color: '#007500' }}> 黃銘輝 </Text>
              </View>
              <View style={styles.textdetail}>
                <Text>聯絡電話: </Text>
                <Text style={{ color: '#272727', fontWeight: 'bold' }}>
                  29742916
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Card style={styles.cardline}>
          <View style={styles.midviwline}>
            <Image
              source={require('../screens/image_locate.jpg')}
              style={styles.imagesty}></Image>
            <View style={styles.listtopic}>
              <Text style={styles.listtext}>巨力乒乓 </Text>
              <View style={styles.textdetail}>
                <Text>地區: </Text>
                <Text style={{ color: '#D94600' }}> 新北市 </Text>
                <Text> 負責人: </Text>
                <Text style={{ color: '#007500' }}> 黃銘輝 </Text>
              </View>
              <View style={styles.textdetail}>
                <Text>聯絡電話: </Text>
                <Text style={{ color: '#272727', fontWeight: 'bold' }}>
                  29742916
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Card style={styles.cardline}>
          <View style={styles.midviwline}>
            <Image
              source={require('../screens/image_locate.jpg')}
              style={styles.imagesty}></Image>
            <View style={styles.listtopic}>
              <Text style={styles.listtext}>巨力乒乓 </Text>
              <View style={styles.textdetail}>
                <Text>地區: </Text>
                <Text style={{ color: '#D94600' }}> 新北市 </Text>
                <Text> 負責人: </Text>
                <Text style={{ color: '#007500' }}> 黃銘輝 </Text>
              </View>
              <View style={styles.textdetail}>
                <Text>聯絡電話: </Text>
                <Text style={{ color: '#272727', fontWeight: 'bold' }}>
                  29742916
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
      <Footer navigate={this.props.navigation.navigate} />
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  blueline: {
    width: width,
    height: height * 0.058,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#46A3FF',
    paddingLeft: width *0.07,
  },
  toptext: {
    color: '#FCFCFC',
    fontSize: 22,
    textAlign: 'center',
  },
  searchline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listline: {
    height: height * 0.715,
    backgroundColor: '#84C1FF',
  },
  cardtopline: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: width * 0.9,
    height: height * 0.138,
    alignItems: 'baseline',
    backgroundColor: 'white',
    marginLeft: width *0.04,
    marginTop: width *0.03,
    borderRadius: 7,
    borderWidth: 1,
  },
  cardline: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: width * 0.9,
    height: height * 0.138,
    alignItems: 'baseline',
    backgroundColor: 'white',
    marginLeft: width *0.04,
    marginTop: width *0.035,
    borderRadius: 7,
    borderWidth: 1,
  },
  midviwline: {
    flexDirection: 'row',
  },
  imagesty: {
    width: width * 0.21,
    height: height * 0.13,
    marginLeft: 6,
    marginTop: 5,
  },
  listtext: {
    marginLeft: width * 0.05,
    marginTop: 7,
    color: '#2828FF',
    fontWeight: 'bold',
    fontSize: 17,
    borderBottomWidth: 1,
  },
  listtopic: {
    width: width * 0.672,
    flexDirection: 'column',
  },
  textdetail: {
    flexDirection: 'row',
    marginLeft: width *0.05,
    marginTop: 3,
  },
});
