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
function Index() {
    return (

        <View style={styles.container}>
            <View style={styles.indexTop}>
                <View style={{ flex: 1 }}>
                </View>
                <View style={{ flex: 14, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Text style={{ marginRight: 4, fontWeight: 'bold', color: '#0072E3', fontSize: 14 }}>編輯個人檔案</Text>
                    <Foundation name="clipboard-pencil" style={styles.topIcon} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Entypo name="log-out" style={styles.topIcon} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="notification" style={styles.topIcon} />
                </View>
                <View style={{ flex: 1 }}>
                </View>
            </View>
            <View style={styles.index}>
                <View style={styles.indexLogo}>


                    <Image
                        style={styles.tinyLogo}
                        source={require('../../Image/logo2.png')}
                    />

                </View>
                <View style={styles.indexCard}>
                    <View style={{ flex: 1 }}></View>
                    <View style={styles.card}>
                        <View style={styles.userDetail}>
                            <View style={styles.user}>
                                <View style={styles.headPic}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <AntDesign name="user" size="70%" color="black" onPress={() => alert('www')} />
                                    </View>
                                </View>
                                <View><Text>用戶名稱</Text></View>
                            </View>
                            <View style={styles.userData}>
                                <View style={{ flexDirection: 'row',marginLeft:15,marginBottom:30 }}>
                                    <Text style={{ marginRight:20,fontWeight: 'bold', fontSize: 16 }}>最擅長球類</Text>
                                    <Text style={{ color: '#F75000', fontWeight: 'bold', fontSize: 16, }}>桌球</Text>
                                </View>
                                <View style={{ flexDirection: 'row',marginLeft:15 }}>
                                    <Text style={{ marginRight:20,fontWeight: 'bold', fontSize: 16 }}>技術評等</Text>
                                    <Text style={{ color: '#F75000', fontWeight: 'bold', fontSize: 16, }}>98</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.starScore}>
                            <Text></Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={styles.indexButton}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}></View>
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
    indexTop: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    index: {
        flex: 17,
        flexDirection: 'column',
        backgroundColor: '#87CEFA'
    },
    topIcon: {
        fontSize: 20,
        color: 'gray'
    },
    indexLogo: {
        flex: 1,
        flexDirection: 'row',
    },
    indexCard: {
        flex: 1.5,
        flexDirection: 'row',
    },
    indexButton: {
        flex: 3,
        flexDirection: 'column'
    },
    tinyLogo: {
        width: '100%',
        height: '100%',

    },
    headPic: {
        width: '60%',
        height: '55%',
        borderWidth: 2,
        borderRadius: 70,
        marginBottom: 15
    },
    card: {
        flex: 15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    user: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userDetail: {
        flex: 5,
        flexDirection: 'row',
    },
    starScore:{
        flex:2,
        flexDirection: 'row',
    },
    userData: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }


})
export default Index
