import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Linking, Image, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function DietScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.secondSub}>Weekly Review</Text>
        <View style={styles.border3} elevation={5}>
        <ImageBackground style = {{resizeMode: 'cover',width: "100%", height: "100%"}}  source = {require('../images/percent.png')}>
        </ImageBackground>
        </View>
        <Text style={styles.secondSub}>Nearby Food Options</Text>
        <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://maps.google.com/')}>
          <Image style = {styles.imageStyle} source = {require('../images/Hawker.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.secondSub}>Recommended Food</Text>
        <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.hpb.gov.sg/docs/default-source/default-document-library/list-of-healthier-dining-programme-partners-(apr-2019)f829a5f6468366dea7adff00000d8c5a.pdf?sfvrsn=4aaac372_0')}>
          <Image style = {styles.imageStyle} source = {require('../images/RecFood.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DietSecondScreen() {
  return <Text> Don't get scammed</Text>;
}
const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      {/*This first component will be the default (first thing shown on the screen)*/}
      <Stack.Screen
        name="Events"
        component={DietScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Don't Get Scammed!"
        component={DietSecondScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    alignItems: 'center',
  },
  border3: {
    width: "90%",
    alignItems: 'center',
    flex: 2,
    borderRadius: 20,
    backgroundColor: '#f9f9f9'
  },
  border2: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    flex: 1,
    width: "100%",
    height: "15%"
  },
  imageStyle: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondSub: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
