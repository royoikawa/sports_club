import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Ionicons, Entypo, FontAwesome, FontAwesome5, Foundation, Feather, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

import { withNavigation } from 'react-navigation';
import Location_detail from './Location_detail';
import Mapview from './Mapview';





export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: null,
      user: '新竹',
    }
  }

  _onPress(user) {
    this.props.navigate(
      'Mapview',
      { user },
    );
  }




  render = () => {


    return (
      <View style={styles.container}>
        <View style={styles.footer}>

          <MaterialIcons name="people" size={24} color="black"
            onPress={() =>
              this.props.navigate('Index')
            }
          />
          <FontAwesome5 name="calendar" size={24} color="blue"

            onPress={() => {
              this.props.navigate('Mapview')
            }}
          />
          <MaterialCommunityIcons name="target" size={24} color="#D26900"

            onPress={() => {
              this.props.navigate('signupfor_activity')
            }}

          />
          <Ionicons name="ios-document" size={24} color="gray"
            onPress={() => {
              this.props.navigate('signupfor_activity')
            }}

          />
          <Ionicons name="md-checkmark-circle-outline" size={24} color="#B15BFF"

            onPress={() => {
              this.props.navigate('Location_detail')
            }}

          />
          <Ionicons name="md-person-add" size={24} color="#FF9224"
            onPress=
            {() => this._onPress(this.state.user)}
          >

          </Ionicons>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: -10,
    paddingRight: 15,
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: width * 0.04,
    marginTop: -22,
    width: width,
    height: height * 0.5,
  },

});
