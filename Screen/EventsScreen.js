import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveScreen from '../Screen/Active';
import ChallengesScreen from '../Screen/Challenges';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();
function EventsScreen( {navigation}) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({})}
        tabBarOptions={{
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: '#D3D3D3',
        }}
      >
        <Tab.Screen style = {{fontSize: 10}} name="Active" component={ActiveScreen} />
        <Tab.Screen name="Challenges" component={ChallengesScreen} />
        
      </Tab.Navigator>
    );
  }

const Stack = createStackNavigator();

export default function EventsStack() {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          headerTitle: 'Events',
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
    </Stack.Navigator>
      );
  }


const styles = StyleSheet.create({
  headerTitleStyle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerStyle: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
})
