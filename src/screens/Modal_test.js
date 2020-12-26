
import * as React from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Modal from 'react-native-modal';

export default class App extends React.Component {
 
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
    

   
    
    
return(

<View>
<View style={{marginTop:50}}>
<TouchableOpacity onPress={()=>this.openModal()}>

  <Text style={{textAlign:'center'}}>Click to open the modal</Text>
</TouchableOpacity>
<Modal animationIn="slideInUp" animationOut="slideOutDown"  swipeDirection="right" isVisible={this.state.isModalVisible} style={{backgroundColor:'white',maxHeight:Dimensions.get('window').height / 2}}>
<View style={{ flex: 1,justifyContent:'center'}}>
<Text style={{textAlign:'center'}}>This is the modal content for now!</Text>
</View>
<View style={{ flex: 1,justifyContent:'center',position:'absolute',bottom:0}}>
<View style={{flexDirection:'row',}}>
<TouchableOpacity style={{backgroundColor:'green',width:'50%'}}>
<Text style={{color:'white',textAlign:'center',padding:10}}>Ok</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'red',width:'50%'}} onPress={()=>this.closeModal()}>
<Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
</TouchableOpacity>
</View>
</View>
</Modal>
</View>
</View>
)
}

}