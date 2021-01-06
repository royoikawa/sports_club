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
function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../Image/logo_w.png')}
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
                <Text style={{ color: 'white' }}>登入</Text>
            </TouchableOpacity>
            <Text>尚未註冊?</Text>
            <Text>去註冊</Text>
        </View>

    )


}
function onChangeText() {
    alert('aa')
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
export default Login
