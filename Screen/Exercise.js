import * as React from "react";
import { Text, View, Button, Image, ImageBackground, TouchableOpacity, Linking, StyleSheet } from "react-native";
import {createStackNavigator} from "@react-navigation/stack";


function ExerciseScreen( {navigation}) {
    return (
     <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.secondSub}>Weekly Review</Text>
        <View style={styles.border3} elevation={5}>
        <ImageBackground style = {{resizeMode: 'contain',width: "100%", height: "100%"}}  source = {require('../images/Time.png')}>
        </ImageBackground>
        </View>
        <Text style={styles.secondSub}>Nearby Facilities</Text>
        <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.sportsingapore.gov.sg/about-us/facilities')}>
          <Image style = {styles.imageStyle} source = {require('../images/Facil.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.secondSub}>Recommended Exercises</Text>
        <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.healthhub.sg/programmes/71/healthy-ageing-exercise')}>
          <Image style = {styles.imageStyle} source = {require('../images/Recomm.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
    );
  }

function ExerciseSecondScreen() {
    return <Text> Don't get scammed</Text>;
}
  const Stack = createStackNavigator();

  export default function EventsStack() {
      return (<Stack.Navigator>
          {/*This first component will be the default (first thing shown on the screen)*/}
          <Stack.Screen name ="Events" component={ExerciseScreen} options = {{headerShown: false}}/>    
          <Stack.Screen name="Don't Get Scammed!" component={ExerciseSecondScreen} options = {{headerShown: false}}/>
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
    width: "95%",
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