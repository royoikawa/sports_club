import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
export default class Mapview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ height: height * 0.8, width: width * 0.7 }}
          showsMyLocationButton
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
