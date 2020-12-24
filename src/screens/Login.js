import React, { useState } from 'react';
import { Alert, Button, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
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
function Login({navigation}) {
    return (
        <View>
            <Text>lll</Text>
            <Button 
            title="go to index"
            onPress={() => navigation.navigate('Index')}
            />
        </View>
        
    )


}
const styles = StyleSheet.create({
    

})
export default Login
