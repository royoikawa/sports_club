import * as React from 'react';
import { Dimensions,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Overlay } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import UserDetail from './UserDetail';

const {width,height} = Dimensions.get("window");


global.Modal = ({
  visible,
  showCrossBtn,
  setModalVisible,
  backgroundColor,
  children,
}) => {
  return (
    <Overlay
      isVisible={visible}
      fullScreen={false}
      overlayBackgroundColor={"#ff136f"}
      overlayStyle={styles.overlay}
      onBackdropPress={() =>setModalVisible(false)}
    
      >
      
      {children}
    </Overlay>
  );
};

 
export default class Overlay_test extends React.Component {
  state = {
    isVisible: false,
  };

  setModalVisible = visible => {
    this.setState({
      isVisible: visible,
    });
  };


  
  

  render() {

    

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.isVisible}
          setModalVisible={this.setModalVisible}
          showCrossBtn ={false}
          

          >
          
         <UserDetail/>
          
       

           
         
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay:{
    width : width * 0.95,
    height :height * 0.85,
    
  },
});
