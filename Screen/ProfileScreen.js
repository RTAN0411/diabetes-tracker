import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const badgesWord = ['Active Warrior', 'Run Like the Wind', 'Cycling Champion'];
const badgesImage = ['../images/themePark.png', '../images/running.png', '../images/cycling.png'];

function ProfPage({ navigation }) {
  const [name, setName] = useState("Tan Siew Eng");
  const [percent, setPercent] = useState(20);

  return(
    <View style = {styles.container}>
        <View style = {styles.iconContainer}>
        <View style = {styles.border1} elevation = {5}>
          <View style = {{flexDirection: 'row'}}>
            <FontAwesome name={'user-circle'} size={50} color={'black'} />
            <Text style = {styles.nameHeader}>{name}</Text>
            <TouchableOpacity 
            style = {styles.button}
            onPress = {() => navigation.navigate("secondScreen")}>
              <Text style = {styles.hyperlinkText}> More Info </Text>
            </TouchableOpacity>
          </View>
          <View style ={{ alignItems: 'center', paddingTop: 20,}}>
            <ImageBackground style = {styles.imageStyle} imageStyle = {{borderRadius: 20}} source={require('../images/chartImage.jpg')}>
            <Text style = {styles.percentText}>{percent}%</Text>
            </ImageBackground>
          </View>
        </View>
        <Text style = {styles.subTitleStyle}>Badges</Text>
        <View style = {styles.borders} elevation = {5}>
        
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <ScrollView horizontal = {true}>
            <View style = {{flex: 1, alignItems: 'center', paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/themePark.png')}/>
            <Text style = {styles.badgeText}>Active Warrior</Text>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/running.png')}/>
            <Text style = {styles.badgeText}>Run Like the Wind</Text>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/cycling.png')}/>
            <Text style = {styles.badgeText}>Cycling Champion</Text>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/cycling.png')}/>
            <Text style = {styles.badgeText}>Cycling Champion</Text>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/cycling.png')}/>
            <Text style = {styles.badgeText}>Cycling Champion</Text>
            </View>
            <View style = {{flex: 1, alignItems: 'center' , paddingHorizontal: 20}}>
            <Image style = {styles.badgeStyle} source = {require('../images/cycling.png')}/>
            <Text style = {styles.badgeText}>Cycling Champion</Text>
            </View>
            </ScrollView>
          </View>
          
        </View>
        <Text style = {styles.subTitleStyle}>Social</Text>
        <View style = {styles.borders} elevation = {5}>
        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style = {{flex: 1, alignItems: 'center'}} onPress = {() => navigation.navigate("friends")}>
            <Image style = {styles.badgeStyle} source = {require('../images/Buds.png')}/>
            <Text style = {styles.badgeText}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex: 1, alignItems: 'center'}} onPress = {() => navigation.navigate("searchfriends")}>
            <Image style = {styles.badgeStyle} source = {require('../images/magnifying.png')}/>
            <Text style = {styles.badgeText}>Search for Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex: 1, alignItems: 'center'}} onPress = {() => navigation.navigate("club")}>
            <Image style = {styles.badgeStyle} source = {require('../images/convo.png')}/>
            <Text style = {styles.badgeText}>Clubs</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text></Text>
        </View>
    </View>
  );
}

function SecondProfPage({ navigation }) {
  const [name, setName] = useState("Tan Siew Eng");
  const[apptDate, setApptDate] = useState("25 July 2021 10.45am \n ABC Hospital \n Diabetes Clinic");
  const appptTitle = "Upcoming \n Appointment";
  const [percent, setPercent] = useState(20);

  return(
    <View style = {styles.container}>
    <View style = {styles.iconContainer}>
    <View style = {styles.border2} elevation = {5}>
          <View style = {{flexDirection: 'row'}}>
            <FontAwesome name={'user-circle'} size={50} color={'black'} />
            <Text style = {styles.nameHeader}>{name}</Text>
          </View>
      <View style = {{alignItems: 'center'}}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <Text style = {styles.appointment}>{appptTitle}</Text>
          <Text style = {styles.apptDetails}>{apptDate}</Text>
          </View>
      </View>
    </View>
        <Text style = {styles.secondSub}>Blood Sugar Level</Text>
        <View style = {styles.border3} elevation = {5}>
          <Image style = {styles.bstImage} source = {require('../images/BloodSugarLevel.png')} />
        </View>
        <View style = {{flexDirection: 'row-reverse', paddingHorizontal: 5}}>
        <TouchableOpacity
        onPress = {() => navigation.navigate("thirdScreen")}>
          <Text style = {styles.hyperlinkText}>Details</Text>
        </TouchableOpacity>
        </View>
        <Text style = {styles.secondSub}>Risk of Diabetes</Text>
        <View style = {styles.borders} elevation = {5}>
          <View style ={{ alignItems: 'center'}} elevation = {5}>
            <ImageBackground style = {styles.imageStyle1} imageStyle = {{borderRadius: 20}} source={require('../images/chartImage.jpg')}>
            <Text style = {styles.percentText}>{percent}%</Text>
            </ImageBackground>
          </View>
        </View>
        <View style = {{flexDirection: 'row-reverse', paddingHorizontal: 5, paddingBottom: 6}}>
        <TouchableOpacity
        onPress = {() => navigation.navigate("fourthScreen")}>
          <Text style = {styles.hyperlinkText}>Details</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

function DetailsPage() {
  return(
    <View><Text> Details Page - Work In Progress </Text>
    </View>
  );
}

function BSTDetails() {
  return(
    <View><Text> Risk of Diabetes Page - Work In Progress </Text></View>
  );
}

function FriendsPage() {
  return(
    <View><Text>Friends Page - Work In Progress </Text></View>
  );
}

function SearchFriend() {
  return(
    <View><Text>Search Friends Page - Work In Progress </Text></View>
  );
}

function ClubPage() {
  return(
    <View><Text> Search Friends Page - Work In Progress </Text></View>
  );
}

const Stack = createStackNavigator();

export default function ProfileScreen(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfPage} options = {{
          headerTitle: "Profile",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}/>
        <Stack.Screen name="secondScreen" component={SecondProfPage} options = {{
          headerTitle: "Profile",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}/>
        <Stack.Screen name="thirdScreen" component={DetailsPage} options = {{
          headerTitle: "Blood Sugar Level",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}/>
        <Stack.Screen name="fourthScreen" component={BSTDetails} options = {{
          headerTitle: "Risk of Diabetes",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}/>
        <Stack.Screen name="friends" component={FriendsPage} options = {{
          headerTitle: "Friends",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}/>
        <Stack.Screen name="searchfriends" component={SearchFriend} options = {{
          headerTitle: "Friend Search",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}/>
        <Stack.Screen name="club" component={ClubPage} options = {{
          headerTitle: "Club",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}/>
      </Stack.Navigator>
    )
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerTitleStyle: {
    color: "black",
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerStyle: {
    height: 80,
    backgroundColor: "white",
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  subTitleStyle: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  secondSub: {
    color: "black",
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    alignItems: 'center'
  },
  border1: {
    width: '85%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: 'white',
    flex: 2,
    padding: 10,
  },
  borders: {
    width: '85%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: 'white',
    flex: 1,
    padding: 5,
  },
  border2: {
    width: '85%',
    height: '25%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 5,
  },
  border3: {
    width: '85%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    flex: 1
  },
  nameHeader: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  percentText: {
    color: "black",
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 50,
    flex: 2
  },
  button: {
    alignItems: "center",
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row-reverse'
  },
  hyperlinkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  imageStyle: {
    width: '99%',
    height: '90%',
    alignItems: 'center'
  },
  imageStyle1: {
    width: "99%",
    height: "100%",
    alignItems: 'center'
  },
  bstImage: {
    width: "90%",
    height: "99%",
    borderRadius: 20,
  },
  badgeStyle: {
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  badgeText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 70
  },

  appointment: {
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 40,
    width: "50%",
    paddingTop: 20
  },
  apptDetails: {
    color: "black",
    fontSize: 14,
    width: "60%",
    paddingLeft: 15,
    paddingTop: 20
  }

});
