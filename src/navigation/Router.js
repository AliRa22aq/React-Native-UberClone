import React from 'react';
import {View, Text, Pressable} from 'react-native';
import HomeNavigation from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => {
  return  (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name} </Text>
  </View>
  )
};


const Router = () => {
  return (
    <View style={{height: '100%'}}>
      <NavigationContainer>

        <Drawer.Navigator
            drawerContent={(props)=> (<CustomDrawer {...props} /> )} 
                >
          <Drawer.Screen name="Home" component={HomeNavigation} />

          <Drawer.Screen name="Your Trips">
              {() => <DummyScreen name="Your Trips" />}
          </Drawer.Screen>

          <Drawer.Screen name="Help">
              {() => <DummyScreen name="Help" />}

          </Drawer.Screen>

          <Drawer.Screen name="Setting">
              {() => <DummyScreen name="Setting" />}

          </Drawer.Screen>

          <Drawer.Screen name="Wallet">
              {() => <DummyScreen name="Wallet" />}

          </Drawer.Screen>

        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;
