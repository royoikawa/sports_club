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

        <View style={styles.container}>
            <View style={styles.indexTop}>
                <View style={{flex:1,flexDirection: 'row',justifyContent: 'center',alignItems:'center',}}>
                    <Text style={{ fontWeight: 'bold', color: '#0072E3',fontSize:14}}>編輯個人檔案</Text>
                    <Entypo name="pencil" style={styles.topIcon} />
                </View>
                <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-end',alignItems:'center'}}>
                    <Entypo name="log-out" style={styles.topIcon} />
                    <AntDesign name="notification" style={styles.topIcon} />
                </View>
            </View>
            <View style={styles.row}>
                <Text>Row-2</Text>
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
    row: {
        flex: 17,
        flexDirection: 'row'
    },
    topIcon:{
        fontSize:16,
        color:'gray'

    },
})
export default Index
