import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

this.state = {
    data: [
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
    ]
}
export default function app() {
  return (
    <View style={styles.container}>
        <Text>scores</Text>
        <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
