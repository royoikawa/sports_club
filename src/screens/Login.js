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
function Login({ navigation }) {

    
    const [acc, setAcc] = useState("");
    const [pass, setPass] = useState("");
    const axios_config = {
        headers: { 'Authorization': 'Bearer keyUwcLvTO51TNEHV' }
    };
    const url = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/User?api_key=keyUwcLvTO51TNEHV";

    function onPressToIndex(name,uid,id) {
        navigation.navigate("Index", { name,uid,id});
      }
    async function res() {
        const result = await axios.get(url, axios_config);
        //alert((result.data.records).length)
        var len = (result.data.records).length
        //alert(len)
        var flag = 0
        for(var i=0;i<len;i++){
            if (acc == result.data.records[i].fields.uid){
                flag = 1
                if(pass == result.data.records[i].fields.u_pass){
                    alert(acc)
                    alert(pass)
                    onPressToIndex(result.data.records[i].fields.u_name,result.data.records[i].fields.uid,result.data.records[i].id);

                    
                    //navigation.navigate('Index')
                }
                else{
                    flag = 2
                }
                
            }
        }
        if (flag==0){
            alert('無此帳號')
        }
        else if(flag==2){
            alert("密碼錯誤")
        }
       
    }
    function Login(){
        res()
        //navigation.navigate('Index')
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../Image/logo_w.png')}
            />
            <TextInput
                style={styles.textinput}
                onChangeText={text =>setAcc(text) }
                placeholder='acc'

            />
            <TextInput
                style={styles.textinput}
                onChangeText={text => setPass(text)}
                placeholder='password'

            />
            <TouchableOpacity onPress={Login} style={styles.button}>
                <Text style={{ color: 'white' }}>登入</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'gray' }}>尚未註冊?</Text>
                <Text style={{ color: '#2894FF' }} onPress={() => navigation.navigate('Reg')}>註冊</Text></View>
        </View>

    )


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
