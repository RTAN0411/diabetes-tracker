import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  Linking
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchableDropdown from 'react-native-searchable-dropdown';


const Stack = createStackNavigator();


function Active() {
  const [text, onChangeText] = React.useState('');
  const [item, setItem] = useState(['..in Articles', '..in Blogs', '..in Friends']);

  return(
    <View style={styles.container}>
      <Text style={styles.headerTitleStyle}>Events</Text>
          <ScrollView style = {{width: '90%' }} horizontal = {false}>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.myactivesg.com/about-activesg/activechallenge')}>
              <Image style = {styles.imageStyle} source = {require('../images/Active.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.medicalnewstoday.com/articles/318277')}>
              <Image style = {styles.imageStyle} source = {require('../images/Sugar.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.myactivesg.com/about-activesg/activechallenge')}>
              <Image style = {styles.imageStyle} source = {require('../images/Active.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.medicalnewstoday.com/articles/318277')}>
              <Image style = {styles.imageStyle} source = {require('../images/Sugar.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.myactivesg.com/about-activesg/activechallenge')}>
              <Image style = {styles.imageStyle} source = {require('../images/Active.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.medicalnewstoday.com/articles/318277')}>
              <Image style = {styles.imageStyle} source = {require('../images/Sugar.png')}></Image>
            </TouchableOpacity>
            </ScrollView>
            <Text>OK</Text>
    </View>
  );
  
}

function Challenges(){
  return (
    <View><Text>Challenges Page - Work In Progress</Text></View>
  );
}

export default function ActiveScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="activeScreen"
        component={Active}
        options={{
          headerShown: false
        }}
      />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
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
  innerBox: {
    height: '8%',
    width: '70%',
    backgroundColor: '#618df2',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  border: {
    height: '20%',
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    badgeStyle: {
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
});
