import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function OverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.secondSub}>Today's List</Text>
        <View style={styles.border3}>
          <ImageBackground
            style={styles.imageStyle}
            source={require('../images/food.png')}
          >
          <Text style = {{fontSize: 14, color: 'white', paddingTop: 50, fontWeight: 'bold'}}>Upcoming Meal</Text>
          <Text style = {{fontSize: 30, color: 'white', fontWeight: 'bold', paddingBottom: 5}}>Lunch (500 cal)</Text>
          <TouchableOpacity style = {styles.button} onPress={() => Linking.openURL('https://maps.google.com/')}>
            <Text style = {{fontWeight: 'bold'}}>Explore nearby food options</Text>
            </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity style = {styles.button} onPress={() => Linking.openURL('https://www.hpb.gov.sg/docs/default-source/default-document-library/list-of-healthier-dining-programme-partners-(apr-2019)f829a5f6468366dea7adff00000d8c5a.pdf?sfvrsn=4aaac372_0')}>
            <Text style = {{fontWeight: 'bold'}}>Explore list of approved food</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
        <Text></Text>
        <View style={styles.border3}>
          <ImageBackground
            style={styles.imageStyle}
            source={require('../images/exercise.png')}
          >
          <Text style = {{fontSize: 14, color: 'white', paddingTop: 54, fontWeight: 'bold'}}>Suggested Exercise</Text>
          <Text style = {{fontSize: 30, color: 'white', fontWeight: 'bold', paddingBottom: 5}}>Cycling (-600 cals)</Text>
          <TouchableOpacity  style = {styles.button} onPress={() => Linking.openURL('https://www.healthhub.sg/programmes/71/healthy-ageing-exercise')}>
            <Text style = {{fontWeight: 'bold'}}>Full list of exercise</Text>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity style = {styles.button} onPress={() => Linking.openURL('https://www.sportsingapore.gov.sg/about-us/facilities')}>
            <Text style = {{fontWeight: 'bold'}}>Explore nearby exercise facilities</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      {/*This first component will be the default (first thing shown on the screen)*/}
      <Stack.Screen
        name="Events"
        component={OverviewScreen}
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
    width: '98%',
    height: "100%",
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 2,
    resizeMode: 'contain'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondSub: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
  },
  button: {
    backgroundColor: 'white', 
    padding: 5, 
    borderRadius: 30
  }
});
