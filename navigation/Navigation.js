import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
     
   
      <NavigationContainer>
       
      <Stack.Navigator>
      <Stack.Screen name="Feed" options={{headerShown: false}} component={Feed} />
      <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
      

      </Stack.Navigator>

    </NavigationContainer>
   
    )
  }
  