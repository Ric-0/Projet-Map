import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function app() {
  return (
    <View style={styles.container}>
        <Text>scores</Text>
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
});
