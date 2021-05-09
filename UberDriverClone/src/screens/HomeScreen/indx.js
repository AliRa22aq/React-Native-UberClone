import React, { useState } from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles';


const origin = {latitude: 31.427021782304326, longitude: 73.05815450219171};
const destination = {latitude: 31.41904192, longitude:73.079066};

const height = Dimensions.get('window').height

const HomeScreen = () => {


  const [isOnline, setIsOnline] = useState(false);
  const onGo = () => {
    setIsOnline(!isOnline)
  }

  return (
    <View>
      <MapView
        style={{height: height-100, width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        
        showsMyLocationButton={false}
        initialRegion={{
          latitude: 31.427021782304326,
          longitude: 73.05815450219171,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey='AIzaSyBBYMf3Xl3LZEFjWQf6LlwUq447oRp7W6E'
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>

      <Pressable 
        onPress={()=> console.warn("Pressed")} 
        style={styles.balanceButton}>
          <Text style={styles.balanceText}>
            <Text style={{color: 'green'}}>$</Text>
            {' '}
            0.00

          </Text>
      </Pressable>


      <Pressable 
        onPress={()=> console.warn("Pressed")} 
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name='menu' size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable 
        onPress={()=> console.warn("Pressed")} 
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name='menu' size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable 
        onPress={()=> console.warn("Pressed")} 
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name='menu' size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable 
        onPress={()=> console.warn("Pressed")} 
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name='menu' size={24} color="#4a4a4a" />
      </Pressable>



      <Pressable onPress={onGo} style={styles.goButton}>
      {
          isOnline?
          <Text style={[styles.goText, {fontSize: 24}]}>Start</Text> :
          <Text style={styles.goText}>Go</Text> 

        }
      </Pressable>


       
      <View style={styles.bottomContainer}>
        <Entypo name='menu' size={24} color="#4a4a4a" />
        {
          isOnline?
          <Text style={styles.bottomText}>You're are Ofline</Text>:
          <Text style={styles.bottomText}>You're are Online</Text>

        }
        <Entypo name='menu' size={24} color="#4a4a4a" />
      </View>


    </View>
  );
};

export default HomeScreen;
