
import React, {Component} from 'react';
import { Alert, Button,Dimensions, View, Text, StyleSheet, Image,TouchableOpacity, TouchableHighlight } from 'react-native';
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

import Modal from 'react-native-modal';
import UserDetail from './UserDetail';

export default class Index  extends React.Component {

    state = {
    isModalVisible:false
    }

    openModal = () =>{
        this.setState({
        isModalVisible:true
        })
   }

    closeModal = () =>{
    this.setState({
    isModalVisible:false
    })
    }
    render(){

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
                                        <AntDesign name="user" size={42} color="black" onPress={() => this.openModal() } />
                                        <Modal animationIn="slideInUp" animationOut="slideOutDown"    onBackdropPress={()=>this.closeModal()} isVisible={this.state.isModalVisible} onRequestClose={() => console.log('onRequestClose...')}  style={{backgroundColor:'white',maxHeight:Dimensions.get('window').height / 2,marginTop: Dimensions.get('window').height / 4.5}}>
                                            
                                            
                                            <UserDetail />
                                        </Modal>
                                    </View>
                                </View>
                                <View><Text>用戶名稱</Text></View>
                            </View>
                            <View style={styles.userData}>
                                <View style={{ flexDirection: 'row', marginLeft: 15, marginBottom: 30 }}>
                                    <Text style={{ marginRight: 20, fontWeight: 'bold', fontSize: 16 }}>最擅長球類</Text>
                                    <Text style={{ color: '#F75000', fontWeight: 'bold', fontSize: 16, }}>桌球</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                    <Text style={{ marginRight: 20, fontWeight: 'bold', fontSize: 16 }}>技術評等</Text>
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
                        <View style={styles.iconButt1}>
                            <View style={styles.butt}>
                                <View style={styles.buttFrame1}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <SimpleLineIcons name="magnifier-add" size={30} color="white" 
                                            onPress={() => this.props.navigation.navigate('Index')}
                                        />
                                    </View>
                                </View>
                                <View><Text>尋找球友</Text></View>
                            </View>
                        </View>
                        <View style={styles.iconButt1}>
                            <View style={styles.butt}>
                                <View style={styles.buttFrame2}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <FontAwesome name="list-alt" size={30} color="white" />
                                    </View>
                                </View>
                                <View><Text>臨打列表</Text></View>
                            </View>
                        </View>
                        <View style={styles.iconButt1}>
                            <View style={styles.butt}>
                                <View style={styles.buttFrame3}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Feather name="map-pin" size={30} color="white" 
                                            onPress={() => this.props.navigation.navigate('Location_List')}
                                        />
                                    </View>
                                </View>
                                <View><Text>場館資訊</Text></View>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.iconButt}>
                            <View style={styles.butt}>
                                <View style={styles.buttFrame4}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <FontAwesome5 name="clipboard-list" size={30} color="white"
                                        onPress={() => this.props.navigation.navigate('signupfor_activity')}
                                         />
                                    </View>
                                </View>
                                <View><Text>已加活動</Text></View>
                            </View>
                        </View>
                        <View style={styles.iconButt}>
                            <View style={styles.butt}>
                                <View style={styles.buttFrame5}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Feather name="check-circle" size={30} color="white" />
                                    </View>
                                </View>
                                <View><Text>評分數值</Text></View>
                            </View>
                        </View>
                        <View style={styles.iconButt}>
                            <View style={styles.butt}>
                                <View style={styles.buttFrame6}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                                        <MaterialIcons name="people-outline" size={30}  color="white" />
                                    </View>
                                </View>
                                <View><Text>好友頁面</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

    }


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
    starScore: {
        flex: 2,
        flexDirection: 'row',
    },
    userData: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    iconButt1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButt: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    butt: {
        flexDirection: 'column',
        width: '80%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttFrame1: {
        width: '90%',
        height: '60%',
        borderRadius: 70,
        backgroundColor: '#02DF82',
        justifyContent: 'center',
    },
    buttFrame2: {
        width: '90%',
        height: '60%',
        borderRadius: 70,
        backgroundColor: '#2894FF',
        justifyContent: 'center',
    },
    buttFrame3: {
        width: '90%',
        height: '60%',
        borderRadius: 70,
        backgroundColor: '#FF9224',
        justifyContent: 'center',
    },
    buttFrame4: {
        width: '90%',
        height: '60%',
        borderRadius: 70,
        backgroundColor: '#ADADAD',
        justifyContent: 'center',
    },
    buttFrame5: {
        width: '90%',
        height: '60%',
        borderRadius: 70,
        backgroundColor: '#D3A4FF',
        justifyContent: 'center',
    },
    buttFrame6: {
        width: '90%',
        height: '60%',
        borderRadius: 70,
        backgroundColor: '#EAC100',
        justifyContent: 'center',
    }



})
