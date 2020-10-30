import React, { useState } from 'react';
import { Alert, Button, View, Text, StyleSheet } from 'react-native';
import {
    AntDesign,
    Ionicons,
    Entypo,
    EvilIcons,
    FontAwesome,
    FontAwesome5,
    Foundation,
    Feather,
    MaterialIcons,
    MaterialCommunityIcons,
    SimpleLineIcons,
} from '@expo/vector-icons';
function Index() {
    return (
        <View style={{ backgroundColor: '#46A3FF',height: '100%'  }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', height: '7%' }}>
                <Text style={{ fontWeight: 'bold', color: '#0072E3', fontSize: 16}}>編輯個人檔案</Text>
                <Entypo name="pencil" style={styles.topIcon}/>
                <Entypo name="log-out" style={styles.topIcon}/>
                <AntDesign name="notification" style={styles.topIcon}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    topIcon:{
        color:'gray',
        fontSize:24,
    }
  });
  
export default Index
