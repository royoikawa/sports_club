import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';

import { SearchBar } from 'react-native-elements';


import Constants from 'expo-constants';
import {
    Ionicons,
    Entypo,
    FontAwesome,
    FontAwesome5,
    Foundation,
    Feather,
    MaterialIcons,
    MaterialCommunityIcons,
    SimpleLineIcons,
} from '@expo/vector-icons';

import Footer from '../screens/Footer';
const { width, height } = Dimensions.get('window');

export default class signupfor_activity extends React.Component {
    state = {
        accountId: this.props.route.params.id,
    }
    /*
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };

    }

    updateSearch = (search) => {
        this.setState({ search });
    };*/


    render = () => {

        const id = this.state.accountId
        const { search } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.blueline}>
                    <Ionicons name="ios-arrow-back" size={30} color="white"
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}

                    />
                    <Text style={styles.toptext}>活動列表</Text>
                    <Entypo name="home" size={30} color="white"

                    />
                </View>
                <View style={styles.searchline}>

                    <Searchbar
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={search}
                        icon="search-web"
                        iconColor="#6A6AFF"
                    />
                </View>

                <View style={styles.middle}>

                    <View style={styles.cardsty}>
                        <View style={styles.cardtop}>
                            <Text>恩恩  </Text>
                            <Image
                                style={{ width: 19.5, height: 19.5 }}
                                source={require('../../Image/volleyball.png')}

                            />
                            <Text style={{ paddingLeft: width * 0.25 }}>  房號    0001</Text>
                            <Text style={{ paddingLeft: width * 0.1 }} onPress={() => alert(id)}>  加入</Text>
                        </View>
                    </View>

                    <View style={styles.cardsty1}>
                        <View style={styles.cardinsidetop}>
                            <Ionicons name="md-person" size={24} color="black" />
                            <Text style={styles.cardText}>5~7人   (目前3人)</Text>
                        </View>
                        <View style={styles.cardinside}>
                            <FontAwesome name="location-arrow" size={24} color="black" />
                            <Text style={styles.cardText}>台北  台科大     </Text>
                            <Text style={{ borderBottomWidth: 1, justifyContent: "center", color: '#5A5AAD', fontWeight: 'bold' }}
                                onPress={() =>
                                    this.props.navigation.navigate('Mapview')
                                }
                            >詳細地址</Text>

                        </View>
                        <View style={styles.cardinside}>
                            <MaterialCommunityIcons name="clock-alert" size={24} color="black" />
                            <Text style={{ color: '#9F5000', paddingLeft: width * 0.05, fontWeight: 'bold' }}>2020/09/30  13:00~15:00  </Text>
                        </View>

                    </View>

                </View>

                <Footer navigate={this.props.navigation.navigate} />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    blueline: {

        height: height * 0.055,
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#46A3FF',
        paddingLeft: width * 0.065,
    },
    toptext: {
        color: '#FCFCFC',
        fontSize: 22,
        textAlign: 'center',
    },
    searchline: {
        flexDirection: 'row',
        alignItems: "center",
    },
    middle: {
        height: height * 0.7,
        backgroundColor: "#C4E1E1",
        alignItems: 'center',
    },
    cardtop:
    {
        height: height * 0.06,
        flexDirection: "row",
        alignItems: 'center',
    },
    cardsty: {
        flexDirection: "row",
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        alignItems: 'center',
        width: width * 0.8,
        marginTop: height * 0.05,
        paddingLeft: width * 0.05,
        borderBottomWidth: 1,
    },
    cardsty1: {
        width: width * 0.8,
        height: height * 0.15,
        paddingLeft: width * 0.06,
        backgroundColor: 'white',
        borderLeftWidth: 1.5,
        borderBottomWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,

    },
    cardinside: {
        flexDirection: "row",
        alignItems: 'baseline',


    },
    cardinsidetop: {
        flexDirection: "row",
        alignItems: 'baseline',
        paddingTop: height * 0.007,

    },
    cardText: {
        paddingLeft: 20,
    }
});