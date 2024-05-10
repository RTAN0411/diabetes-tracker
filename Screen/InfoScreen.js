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


function InformationScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [item, setItem] = useState(['..in Articles', '..in Blogs', '..in Friends']);

  return(
    <View style={styles.container}>
      <Text style={styles.headerTitleStyle}>Information</Text>

      <TouchableOpacity style={styles.border} onPress = {() => navigation.navigate("chatBot")}>
        <Image
          style={{
            flex: 1,
            height: '97%',
            width: '40%',
            resizeMode: 'contain',
          }}
          source={require('../images/chatBot.png')}
        />
      </TouchableOpacity>

      <View style={styles.innerBox}>
        <FontAwesome
          style={{ paddingLeft: 10 }}
          name={'search'}
          size={20}
          color={'white'}
        />
        <TextInput
          style={{ color: 'white', padding: 5, fontWeight: 'bold' }}
          placeholder = "Search"
          placeholderTextColor = 'white'
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <Text></Text>
      <View style = {styles.lastBorder}>
        <Text style = {{fontSize: 18, fontWeight: 'bold', paddingLeft: 10, paddingBottom: 5 }}>Discover</Text>
        </View>
          <ScrollView style = {{width: '90%' }} horizontal = {false}>
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
            <Text>OK</Text>
    </View>
  );
  
}

function ChatBot(){
  return (
    <View><Text>Chat Bot Page - Work In Progress</Text></View>
  );
}

export default function InfoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="infoScreen"
        component={InformationScreen}
        options={{
          headerTitle: '  ',
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
      <Stack.Screen
        name="chatBot"
        component={ChatBot}
        options={{
          headerTitle: 'ChatBot',
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
