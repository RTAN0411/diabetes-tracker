import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OverviewScreen from '../Screen/Overview';
import DietScreen from '../Screen/Diet';
import ExerciseScreen from '../Screen/Exercise';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Tab = createMaterialTopTabNavigator();

function trackScreen({ navigation }) {
  
  return(

     <Tab.Navigator
        screenOptions={({ route }) => ({})}
        tabBarOptions={{
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: '#D3D3D3',
        }}
      >
        <Tab.Screen style = {{fontSize: 10}} name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Diet" component={DietScreen} />
        <Tab.Screen name="Exercise" component={ExerciseScreen} />
        
      </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function TrackerScreen(){
    return (
     <Stack.Navigator>
      <Stack.Screen
        name="Tracker"
        component={trackScreen}
        options={{
          headerTitle: 'Tracker',
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




