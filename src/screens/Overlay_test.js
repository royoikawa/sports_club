import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Overlay } from 'react-native-elements';
import { WebView } from 'react-native-webview';

const Modal = ({
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
      overlayBackgroundColor={backgroundColor}
      overlayStyle={styles.overlay}
      onBackdropPress={() => setModalVisible(false)}>
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
          showCrossBtn ={false}>
           <WebView
            style={[styles.webView]}
            source={{ uri: 'https://www.google.com/' }}
          />
         
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
    width : width * 0.9,
    height :height * 0.85,
  },
});
