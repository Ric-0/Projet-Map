import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function app() {
  return (
    <View style={styles.container}>
        <Text>NIKTA RACES</Text>
        <Text>Parcourez  votre ville d'une nouvelle façon, pour les plus et moins sportifs d'entre nous</Text>
        <Text>Allez sur la carte et trouvez des points de départs pour vous divertir</Text>
        <Text>Profitez de la course, et pour les plus joueurs d'entre vous vous pouvez consulter un classement de la course !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff'
  },
});
