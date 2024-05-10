import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InfoScreen from './Screen/InfoScreen';
import HomeScreen from './Screen/HomeScreens';
import EventsScreen from './Screen/EventsScreen';
import TrackerScreen from './Screen/TrackerScreen';
import ProfileScreen from './Screen/ProfileScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome";



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Tracker") {
              iconName = 'pie-chart';
            } else if (route.name === 'Events') {
              iconName = 'calendar';
            }
            else if (route.name === 'Information'){
              iconName = 'info';
            }
            else if(route.name === 'Home'){
              iconName = 'home';
            }
            else if(route.name === "Profile"){
              iconName = 'user-circle';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#618df2',
          inactiveTintColor: 'lightgrey',
        }}
      >
        <Tab.Screen name="Tracker" component = {TrackerScreen} />
        <Tab.Screen name="Information" component = {InfoScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}