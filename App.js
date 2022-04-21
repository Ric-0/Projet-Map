import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from './components/Accueil.js';
import Map from './components/Map.js';
import LeaderBoard from './components/LeaderBoard.js';

function HomeScreen({ navigation }) {
  return (
    <Accueil />
  );
}

function MapScreen({ navigation }) {
  return (
    <Map />
  );
}

function LeaderBoardScreen({ navigation }) {
  return (
    <LeaderBoard />
  );
}

class App extends Component {
  state = {
  };


  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Scores') {
              iconName = focused ? 'ios-trophy' : 'ios-trophy-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFE95C',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Scores" component={LeaderBoardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
