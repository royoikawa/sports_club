import React, { useState } from 'react';
import { Alert, Button, View, Text, StyleSheet,Image } from 'react-native';
import logo from './assets/logo.PNG'; 
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

        <View style={styles.container}>
            <View style={styles.indexTop}>
                <View style={{flex:1}}>
                </View>
                <View style={{flex:14,flexDirection: 'row',justifyContent: 'flex-start',alignItems:'center',}}>
                    <Text style={{marginRight:4,fontWeight: 'bold', color: '#0072E3',fontSize:14}}>編輯個人檔案</Text>
                    <Foundation name="clipboard-pencil" style={styles.topIcon} />
                </View>
                <View style={{flex:1,flexDirection: 'row',justifyContent: 'center',alignItems:'center'}}>
                    <Entypo name="log-out" style={styles.topIcon} />
                </View>
                <View style={{flex:1,flexDirection: 'row',justifyContent: 'center',alignItems:'center'}}>
                    <AntDesign name="notification" style={styles.topIcon} />
                </View>
                <View style={{flex:1}}>
                </View>
            </View>
            <View style={styles.index}>
                <View style={styles.indexLogo}>
                    <Image source={'./assets/logo.PNG'} />
                </View>
                <View style={styles.indexLogo}>
                    
                </View>
                <View style={styles.indexLogo}>
                    
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    indexTop:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'white'
    },
    index: {
        flex: 17,
        flexDirection: 'column',
        backgroundColor:'#66B3FF'
    },
    topIcon:{
        fontSize:20,
        color:'gray'
    },
    indexLogo:{
        flex:1,
        flexDirection:'row'
    }
})
export default Index
