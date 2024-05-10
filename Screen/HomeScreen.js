import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Colors,
  Linking,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

function randomiser() {
  var num = Math.random();
  return num;
}

function Home() {
  const [user, setUser] = useState('Siew Eng');
  const [num, setNum] = useState(randomiser());

  return (
     <View style={styles.container}>
        <Text style = {styles.headerTitleStyle1}>Welcome Back, {user}</Text>
        <View style={styles.borderTop} elevation = {5}>
          <Text style = {{fontSize: 18, fontWeight: 'bold', paddingLeft: 10, paddingTop: 20 }}>Your Progression</Text>
            <Image
              style={{ width: "100%", height: '100%', resizeMode: 'contain' }}
              source={require('../images/progBar.png')}
            />
        </View>
        <Text></Text>
          <Image
            style={styles.borderM}
            source={require('../images/Quote.png')}
          />
        <Text></Text>
        <View style = {styles.borderL} elevation = {5}>
        <Text style = {{fontSize: 18, fontWeight: 'bold', paddingLeft: 10, paddingBottom: 5 }}>Friend's Activities</Text>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <ScrollView horizontal = {true}>
            <View style = {{flex: 1, alignItems: 'center', paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/p1.png')}/>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/p2.png')}/>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/p3.png')}/>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/p4.png')}/>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/p4.png')}/>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/p4.png')}/>
            </View>
            </ScrollView>
          </View>
        </View>
       
        <View style = {styles.lastBorder}>
        <Text style = {{fontSize: 18, fontWeight: 'bold', paddingLeft: 10, paddingBottom: 5 }}>Discover</Text>
        </View>
          <ScrollView style = {{width: '90%' }}>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nlJhelO6t9M')}>
              <Image style = {styles.imageStyle} source = {require('../images/HealthyLiving.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nlJhelO6t9M')}>
              <Image style = {styles.imageStyle} source = {require('../images/HealthyLiving.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nlJhelO6t9M')}>
              <Image style = {styles.imageStyle} source = {require('../images/HealthyLiving.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nlJhelO6t9M')}>
              <Image style = {styles.imageStyle} source = {require('../images/HealthyLiving.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nlJhelO6t9M')}>
              <Image style = {styles.imageStyle} source = {require('../images/HealthyLiving.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border2} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nlJhelO6t9M')}>
              <Image style = {styles.imageStyle} source = {require('../images/HealthyLiving.png')}></Image>
            </TouchableOpacity>
            </ScrollView>
     </View>

    
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
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
  borderTop: {
    width: '90%',
    height: '15%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  borderM: {
    height: "20%",
    width: "90%",
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderL:  {
    width: '90%',
    height: '20%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 5,
  },
  lastBorder: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 5,
  },
  badgeStyle: {
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  headerTitleStyle1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 5
  },
});
