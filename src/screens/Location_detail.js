import * as React from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';


import Footer from '../screens/Footer';

import { Rating, AirbnbRating } from 'react-native-elements';

import StarRating from 'react-native-star-rating';

import MapView from 'react-native-maps';

import { Card } from 'react-native-paper';

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

import Modal from 'react-native-modal';


//抓取螢幕寬高度
const { width, height } = Dimensions.get('window');

const win = Dimensions.get('window');



//場地詳細資訊(負責人、姓名、分數)

export default class Location_detail extends React.Component {
    constructor(){
        super();
        this.state = {
            setVisible: false,
            visible : false,
            starCount: 3.5,
            isModalVisible:false,
    };

}


    DoRating = () => {
        this.setState({ visible: true });
     }

    

     componentWillUnmount() {
    this._isMounted = false;
  }


    openModal = () =>{
        this.setState({
        isModalVisible:true
        })
   }

    closeModal = () =>{
    this.setState({
    isModalVisible:false
    })
    }


  render = () => {
    
     
   
        return (
    <View style={styles.container}>
      <View style={styles.blueline}>
        <Ionicons name="ios-arrow-back" size={36} color="white" 

             onPress={() => {
            this.props.navigation.goBack()
          } }

        />
        <Text style={styles.toptext}>巨力乒乓</Text>
        <Entypo name="home" size={32} color="white" 
             onPress={() => {
            this.props.navigation.navigate('Index1')
          } }
         />
      </View>

      <View style={styles.image1}>
        <Ionicons name="md-arrow-dropleft-circle" size={24} color="black" />
        <Image
          source={require('../screens/image_locate.jpg')}
          style={styles.imagesty}
        />
        <Ionicons name="md-arrow-dropright-circle" size={24} color="black" />
      </View>

      <View style={styles.infor}>
        <Card style={styles.cardsty}>
          <View style={styles.midsty}>
            <Text style={styles.middlebordertext}>桌球</Text>
            <Text style={styles.middlebordertext}>冷氣開放</Text>
            <Text style={styles.middlebordertext}>台北橋站</Text>
          </View>
          <View style={styles.midsty}>
            <Ionicons name="md-person" size={24} color="black" />
            <Text style={styles.middletext}>黃銘輝</Text>
            <FontAwesome
              style={styles.phonetext}
              name="phone"
              size={24}
              color="blue"
            />
            <Text style={styles.phonetext}>29742916</Text>
          </View>
          <View style={styles.midsty}>
            <FontAwesome name="location-arrow" size={24} color="black" />
            <Text style={styles.middletext}>新北市新北區新北街118號1F</Text>
          </View>
          <View style={styles.midsty}>
            <MaterialCommunityIcons
              name="clock-alert"
              size={24}
              color="black"
            />
            <Text style={styles.middletext1}>平日: 08:00~17:00</Text>
          </View>
          <View style={styles.midsty}>
            <Text style={styles.clocktext}>假日: 09:00~20:00</Text>
          </View>
          <View style={styles.midsty}>
            <Text style={styles.clocktext}>周一公休</Text>
          </View>
          <View style={styles.midsty}>
            <Text style={styles.startext}>4.0</Text>
            <Entypo
              style={styles.starimg}
              name="star"
              size={24}
              color="#D9B300"
            />
            <Entypo name="star" size={24} color="#D9B300" />
            <Entypo name="star" size={24} color="#D9B300" />
            <Entypo name="star" size={24} color="#D9B300" />
            <Entypo name="star" size={24} color="black" />
            <TouchableHighlight
              underlayColor="rgb(210, 230, 255)"
              activeOpacity={0.5}
              style={{
                borderRadius: 8,
                borderWidth: 1,
                padding: 5,
                margin: 3.5,
                marginLeft: 15,
              }}
            onPress={()=>this.openModal()}
              >
              <Text style={{ fontSize: 16, color: '#BB5E00' }}>我要評分</Text>
            </TouchableHighlight>
            <Modal   isVisible={this.state.isModalVisible} style={{backgroundColor:'white',maxHeight:Dimensions.get('window').height / 2}}>
                <View style={{ flex: 1,justifyContent:'center',backgroundColor:'#0072E3'}}>
                
                  <Text style={{textAlign:'center',fontSize:24,color:'#FF7575',fontWeight:'bold'}}>請給評分(1~5顆星)</Text>
                  <Rating
                        type='star'
                        fractions={1} startingValue={3} 
                        imageSize={40}
                        ratingColor='#3498db'
                        ratingBackgroundColor='#0072E3'
                        showRating
                        onFinishRating={this.ratingCompleted}
                  />
                     
                </View>
                <View style={{ flex: 1,justifyContent:'center',position:'absolute',bottom:0}}>
                  <View style={{flexDirection:'row',}}>
                      <TouchableOpacity style={{backgroundColor:'green',width:'50%'}} onPress={()=>this.closeModal()}>
                          <Text style={{color:'white',textAlign:'center',padding:10}}>Ok</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:'red',width:'50%'}} onPress={()=>this.closeModal()}>
                        <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
                </View>
            </Modal>
        
          </View>

          <View style={styles.foodsty}>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color="orange"
            />
            <TouchableHighlight
              
              underlayColor="rgb(210, 230, 255)"
              activeOpacity={0.5}
              style={{
                borderRadius: 8,
                borderWidth: 1,
                padding: 5,
                paddingLeft: 10,
                paddingRight: 10,
                margin: 3.5,
                marginLeft: 20,
              }}
              onPress = { () => {
                  this.props.navigation.navigate('Mapview')
              } }
              >
              
              <Text style={{ fontSize: 16, color: '#BB5E00' }}>附近美食</Text>
            </TouchableHighlight>
          </View>
        </Card>
      </View>
     <Footer navigate={this.props.navigation.navigate}/>
    </View>
  );


  }

  
}
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#BEBEBE',
  },

  image1: {
    height: height * 0.21,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 15,
    paddingLeft: 4,
  },
  imagesty: {
    width: win.width * 0.49,
    height: win.height * 0.224,
  },
  middletext: {
    paddingLeft: width * 0.04,
    paddingTop: 16,
    marginRight: width *0.025,
    marginLeft: width * 0.04,
  },
  middletext1: {
    paddingLeft: width *0.025,
    paddingTop: 16,
    marginRight: 20,
    marginLeft: width * 0.04,
  },
  phonetext: {
    marginLeft: width * 0.08,
  },
  middlebordertext: {
    paddingRight: width * 0.03,
    paddingLeft: width * 0.03,
    marginTop: height * 0.013,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: width * 0.04,
    fontSize: 18,
    borderColor: '#6C6C6C',
    textAlign: 'center',
  },
  clocktext: {
    marginLeft: width  * 0.1,
    paddingLeft: 11,
    marginTop: 5,
  },
  startext: {
    marginLeft: width * 0.01,
    marginRight: width * 0.05,
  },
  starimg: {
    marginLeft: 5,
  },
  dialogsty:{
    width : width *0.6,
    height: height *0.3,
    marginBottom : height *0.5,
  },
  infor: {
    height: height * 0.56,
    width: width,
  },
  cardsty: {
    width: width * 0.9,
    height: height * 0.485,
    marginLeft: width *0.045,
    marginTop: width *0.025,
  },
  midsty: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginTop: height * 0.005,
    marginLeft: width * 0.06,
  },
  blueline: {
    width: width,
    height: height * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#46A3FF',
    paddingLeft: 10,
  },
  toptext: {
    color: '#FCFCFC',
    fontSize: 22,
    textAlign: 'center',
  },
  foodsty: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginLeft: width * 0.07,
  },
});
