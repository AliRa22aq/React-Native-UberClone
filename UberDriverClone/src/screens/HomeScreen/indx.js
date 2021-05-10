import React, {useState} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewOrderPopup from '../../components/NewOrderPopup';
import styles from './styles';

const origin = {latitude: 31.427021782304326, longitude: 73.05815450219171};

const destination = {latitude: 31.41904192, longitude: 73.079066};

const height = Dimensions.get('window').height;

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);

  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'UberX',
    originLatitude: 31.42702,
    oreiginLongitude: 73.058154,
    destLatitude: 31.52702,
    destLongitude: 73.15815,
    user: {
      rating: 5,
    },
  });

  const onAccept = newOrder => {
    console.warn('Order Accepted');
    setNewOrder(newOrder);
    setNewOrder(null);
  };

  const onDecline = () => {
    console.warn('Order Declined');
    setNewOrder(null);
  };

  const onGo = () => {
    setIsOnline(!isOnline);
  };

  return (
    <View>
      <MapView
        style={{height: height - 100, width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={false}
        initialRegion={{
          latitude: 31.427021782304326,
          longitude: 73.05815450219171,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="AIzaSyBBYMf3Xl3LZEFjWQf6LlwUq447oRp7W6E"
          strokeWidth={3}
          strokeColor="hotpink"
        />
        <Marker coordinate={origin} title="Origon" />
        <Marker coordinate={destination} title="Destination" />
      </MapView>

      <Pressable
        onPress={() => console.warn('Pressed')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{color: 'green'}}>$</Text> 0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Pressed')}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn('Pressed')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn('Pressed')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn('Pressed')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable onPress={onGo} style={styles.goButton}>
        {isOnline ? (
          <Text style={[styles.goText, {fontSize: 24}]}>Start</Text>
        ) : (
          <Text style={styles.goText}>Go</Text>
        )}
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name="options" size={30} color="#4a4a4a" />
        {isOnline ? (
          <Text style={styles.bottomText}>You're are Ofline</Text>
        ) : (
          <Text style={styles.bottomText}>You're are Online</Text>
        )}
        <Entypo name="menu" size={30} color="#4a4a4a" />
      </View>

      {newOrder && (
        <NewOrderPopup
          newOrder={newOrder}
          onAccept={() => onAccept(newOrder)}
          onDecline={onDecline}
          duration={2}
          distance={0.3}
        />
      )}
    </View>
  );
};

export default HomeScreen;
