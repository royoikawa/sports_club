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


     <Rating 
      fractions={1} startingValue={3.3} 
      imageSize={60} 
      minValue={0}
      showRating 
     
      onFinishRating={this.ratingCompleted}
     />
    
 

      )

}
     
}
