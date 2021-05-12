import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DesitinationSearch';
import SearchResults from '../screens/SearchResults';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import OrderScreen from '../screens/OrderScreen';


const HomeNavigation = () => {
    
    const Stack = createStackNavigator();

  return (
      <Stack.Navigator 
            screenOptions= {{
                headerShown: false,
            }}
            > 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="OrderPage" component={OrderScreen} />
      </Stack.Navigator>
  );
};

export default HomeNavigation;
