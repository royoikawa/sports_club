import React, { useState } from 'react';
import axios from 'axios';
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
    const [email, setEmail] = useState("");
    const [acc, setAcc] = useState("");
    const [pass, setPass] = useState("");
    const axios_config = {
        headers: {
            'Authorization': 'Bearer keyUwcLvTO51TNEHV',
            'Content-Type': 'application/json'
        }
    };
    const url = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/User?api_key=keyUwcLvTO51TNEHV";
    async function sendData() {

        const newPerson =

        {
            "fields": {
                "uid": parseInt(acc),
                "u_mail": email,
                "u_pass": pass
            }
        }




        //alert(newPerson.fields.uid);


       
        const result = await axios.post(url, newPerson, axios_config);
        
        alert(result.data.fields.uid)
        //console.log(result);

        //setPersons(result.data.records);

        //props.update();





    }
    function update() {

        sendData();
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../Image/logo_w.png')}
            />
            <TextInput
                style={styles.textinput}
                onChangeText={text => setEmail(text)}
                placeholder='email or phone'

            />
            <TextInput
                style={styles.textinput}
                onChangeText={text => setAcc(text)}
                placeholder='acc'

            />
            <TextInput
                style={styles.textinput}
                onChangeText={text => setPass(text)}
                placeholder='password'

            />
            <TouchableOpacity onPress={update} style={styles.button}>
                <Text style={{ color: 'white' }}>註冊</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'gray' }}>已有帳號?</Text>
                <Text style={{ color: '#2894FF' }} onPress={() => navigation.navigate('Login')}>登入</Text></View>
        </View>

    )


}
/*
function testAPI() {
    const axios_config = {
        headers: { 'Authorization': 'Bearer keyUwcLvTO51TNEHV' }
    };
    const url = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/User?api_key=keyUwcLvTO51TNEHV";
    res()
    async function res() {
        const result = await axios.get(url, axios_config);
        alert(result.data.records[0].id)
    }


}*/

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
