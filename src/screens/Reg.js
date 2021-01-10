import React, { useState } from 'react';
import { Alert, Button, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
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
function Reg({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../Image/logo_w.png')}
            />
            <TextInput
                style={styles.textinput}
                onChangeText={text => testAPI()}
                placeholder='email or phone'

            />
            <TextInput
                style={styles.textinput}
                onChangeText={text => onChangeText()}
                placeholder='acc'

            />
            <TextInput
                style={styles.textinput}
                onChangeText={text => onChangeText()}
                placeholder='password'

            />
            <TouchableOpacity onPress={() => navigation.navigate('Index')} style={styles.button}>
                <Text style={{ color: 'white' }}>註冊</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'gray' }}>已有帳號?</Text>
                <Text style={{ color: '#2894FF' }} onPress={() => navigation.navigate('Login')}>登入</Text></View>
        </View>

    )


}
function onChangeText() {
    alert('aa')
}
function testAPI(){
    const axios_config = {
        headers: {'Authorization': 'Bearer keyUwcLvTO51TNEHV'}
    };
    const url="https://api.airtable.com/v0/appJtWi1JYXIRK8zi/User?api_key=keyUwcLvTO51TNEHV";
    const result = await axios.get(url,axios_config);
    console.log(result)

}
const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: '30%'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    textinput: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        width: '75%',
        borderRadius: 10,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#46A3FF',
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        marginBottom: 20

    }

})
export default Reg
