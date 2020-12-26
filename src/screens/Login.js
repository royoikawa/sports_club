import React, { useState } from 'react';
import { Alert, Button, View, Text, StyleSheet, Image, TouchableHighlight, TextInput } from 'react-native';
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
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText()}
                value="acc"

            />
            <Button
                title="go to index"
                onPress={() => navigation.navigate('Index')}
            />
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
    }

})
export default Login
