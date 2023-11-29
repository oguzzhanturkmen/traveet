import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddPost from '../screens/AddPost';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          else if (route.name === 'AddPost') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
        }
          // Add more icons for other tabs if needed

          return <Ionicons name={iconName} size={20} color={color} />;
        },
        
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: { 
         
          height: 70
        },
        tabBarIconStyle: {
          marginTop: 20,
          
        },
      }
      )}
      
    >
      <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false  }} />
      <Tab.Screen name="AddPost" component={AddPost} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      {/* Add more Tab.Screen for other tabs if needed */}
    </Tab.Navigator>
  );
}

// Main Navigation Component
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="FeedScreen" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="ProfileScreen" 
          component={Profile} 
          options={{ headerShown: false }} 
        />
       
        {/* Add more Stack.Screen for other stack navigators if needed */}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
