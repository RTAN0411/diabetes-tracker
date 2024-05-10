import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchableDropdown from 'react-native-searchable-dropdown';


const Stack = createStackNavigator();

function Challenges(){
  return (
    <View><Text>Challenges Page - Work In Progress</Text></View>
  );
}

export default function ChallengesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="challenges"
        component={Challenges}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
