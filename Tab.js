import React, { useState,Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
} from 'react-native';

export default class Tab extends Component{
    //UI渲染
    render() {
        return(
            <View style={styles.container}>
                {/*<BackHeader style={styles.title} title="帶back的標題欄" showBack={true} />*/}
                <TouchableWithoutFeedback
                    onPress={()=> {
                        this.props.navigation.navigate('Msg', { deviceId: '10010' })
                    }}>
                    <View style={styles.content}>
                        {/*!//跳轉到訊息頁面*/}
                        <Text style={styles.text}>我的,,點選可以跳轉</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}