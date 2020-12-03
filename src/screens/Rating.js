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
  console.log("Rating is: " + rating);
}

render = () => {

  const Star_img = require('../screens/star.png');

    return (


      <AirbnbRating
      count={5}
       reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
      defaultRating={5}
      size={20}
    />

 

      )

}
     
}
