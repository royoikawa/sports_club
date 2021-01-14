import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Button, Dimensions, View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
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
function actList({ route, navigation }) {
    const id = route.params.id
    const [data, setData] = useState([<Text>a</Text>]);
    const [num, setNum] = useState();
    const [ball, setBall] = useState();
    const [note, setNote] = useState();
    const [place, setPlace] = useState();
    const [numup, setNumup] = useState();
    const [ballup, setBallup] = useState();
    const [noteup, setNoteup] = useState();
    const [placeup, setPlaceup] = useState();
    const [delN, setDelN] = useState();
    getData()
    function getData() {

        const axios_config = {
            headers: { 'Authorization': 'Bearer keyUwcLvTO51TNEHV' }
        };
        const url = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/active?api_key=keyUwcLvTO51TNEHV";
        res()

        async function res() {

            const result = await axios.get(url, axios_config);
            var len = (result.data.records).length
            //alert(result.data.records[1].fields.ball)
            let array = [];
            for (var i = 0; i < len; i++) {
                if (result.data.records[i].fields.uid == id) {
                    array.push(<Text>{result.data.records[i].fields.aid}</Text>)
                    array.push(<Text>{result.data.records[i].fields.ball}</Text>)
                    array.push(<Text>{result.data.records[i].fields.Notes}</Text>)
                    array.push(<Text>{result.data.records[i].fields.place}</Text>)
                    array.push(<Text>=============</Text>)

                }
            }
            setData(array)

        }


    }
    function del() {
        const axios_config = {
            headers: {
                'Authorization': 'Bearer keyUwcLvTO51TNEHV',
                'Content-Type': 'application/json'
            }
        };
        const url = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/active/?api_key=keyUwcLvTO51TNEHV";
        res()
        async function res() {

            const result = await axios.get(url, axios_config);
            var len = (result.data.records).length
            for (var i = 0; i < len; i++) {
                if (result.data.records[i].fields.aid == delN) {
                    var rid = result.data.records[i].id
                    const url2 = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/active/" + rid + "?api_key=keyUwcLvTO51TNEHV"
                    const result2 = await axios.delete(url2, axios_config);
                }

            }
        }
    }
    function upd() {
        const axios_config = {
            headers: {
                'Authorization': 'Bearer keyUwcLvTO51TNEHV',
                'Content-Type': 'application/json'
            }
        };
        const url = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/active/?api_key=keyUwcLvTO51TNEHV";
        res()
        async function res() {
            const result = await axios.get(url, axios_config);
            var len = (result.data.records).length
            for (var i = 0; i < len; i++) {
                if (result.data.records[i].fields.aid == numup) {
                    var rid = result.data.records[i].id
                    const upurl = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/active/" + rid + "?api_key=keyUwcLvTO51TNEHV"
                    const updata =

                    {
                        "fields": {
                            "Notes": noteup,
                            "ball": ballup,
                            "place": placeup,
                        }
                    }
                    const result2 = await axios.patch(upurl, updata, axios_config);

                }

            }
        }


    }
    function add() {
        const axios_config = {
            headers: {
                'Authorization': 'Bearer keyUwcLvTO51TNEHV',
                'Content-Type': 'application/json'
            }
        };
        const url = "https://api.airtable.com/v0/appJtWi1JYXIRK8zi/active?api_key=keyUwcLvTO51TNEHV";
        sendData()
        async function sendData() {

            const newAct =

            {
                "fields": {
                    "aid": parseInt(num),
                    "Notes": note,
                    "ball": ball,
                    "place": place,
                    "uid": id
                }
            }


            const result = await axios.post(url, newAct, axios_config);
        }
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            <View flex='1'>
                {data}
            </View>
            <View flex='1' style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setNum(text)}
                    placeholder='num'

                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setBall(text)}
                    placeholder='ball'

                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setNote(text)}
                    placeholder='note'

                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setPlace(text)}
                    placeholder='place'

                />
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center', backgroundColor: '#46A3FF', width: '30%', height: '10%'
                }} onPress={add}><Text style={{ color: 'white' }}>新增</Text></TouchableOpacity>
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setNumup(text)}
                    placeholder='num'

                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setBallup(text)}
                    placeholder='ball'

                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setNoteup(text)}
                    placeholder='note'

                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setPlaceup(text)}
                    placeholder='place'

                />
                <TouchableOpacity onPress={upd} style={{
                    alignItems: 'center',
                    justifyContent: 'center', backgroundColor: 'green', width: '30%', height: '10%'
                }}><Text style={{ color: 'white' }}>修改</Text></TouchableOpacity>
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setDelN(text)}
                    placeholder='num'

                />
                <TouchableOpacity onPress={del} style={{
                    alignItems: 'center',
                    justifyContent: 'center', backgroundColor: 'red', width: '30%', height: '10%'
                }}><Text style={{ color: 'white' }}>刪除</Text></TouchableOpacity>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    list: {

    }

})





export default actList