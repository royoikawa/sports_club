import { Rating, AirbnbRating } from 'react-native-elements';

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

import Stars from 'react-native-stars';

export default class Rating1 extends React.Component {

  ratingCompleted(rating) {
  console.log("Rating is: " + parseFloat(rating).toFixed(1));
}

render = () => {

  const { rating } = this.props;
    return (

    /*
      <Rating
        type='star'
        ratingCount={5}
        startingValue="{4.1}"
        imageSize={60}
        showRating
        onFinishRating={this.ratingCompleted}
      />

      */


    <Stars
    half={true}
    spacing={12}
    update={(val)=>{this.setState({stars: val})}}
    count={5}
    starSize={40}
    backingColor='cornsilk' 
    fullStar= {require('../screens/starFilled.png')}
    emptyStar= {require('../screens/starEmpty.png')}
    halfStar={require('../screens/starHalf.png')}

    />
 

      )

}
     
}
