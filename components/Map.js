import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

export default function app() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      
      initialRegion={{
        latitude: 47.6667,
        longitude: -2.75,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
