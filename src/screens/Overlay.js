import React, { useState } from 'react';
import Modal from 'modal-react-native-web';
import { View,Button,Text, Overlay } from 'react-native-elements';

export default class Index extends React.Component{

    constructor(props) {
    super(props);
    
    const [visible, setVisible] = useState(false);
    
    

    const toggleOverlay = () => {
        setVisible(!visible);
    };
  }

    render(){
        
      

      
  

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay ModalComponent={Modal} isVisible={!visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );

  }

}