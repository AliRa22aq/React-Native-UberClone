import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewOrderPopup from '../../components/NewOrderPopup';
import styles from './styles';
import {API, Auth, graphqlOperation} from 'aws-amplify'
import { getCar } from '../../graphql/queries';
import { updateCar } from '../../graphql/mutations';
import { listOrders } from '../../graphql/queries';

const HomeScreen = () => {

  const [order, setOrder] = useState(null);
  // const [myPositoin, serMyPosition] = useState(null);
  const [car, setCar] = useState(null)
  console.log('car')
  console.log(car)


  const [newOrders, setNewOrders] = useState([]);

  const onAccept = (newOrder) => {
    console.warn('Order Accepted');
    setOrder(newOrder);
    setNewOrders(newOrders.slice(1));
  };

  const onDecline = () => {
    console.warn('Order Declined');
    setNewOrders(newOrders.slice(1));
  };

  const onGo = async () => {
    // update the car and set it to active

    try{
      const userData = await Auth.currentAuthenticatedUser();

      const input = {
        id: userData.attributes.sub,
        isActive: !car.isActive,
      }

      const updatedCar = await API.graphql(
        graphqlOperation(
          updateCar, {
            input: input
          }
        )
      )

      setCar(updatedCar.data.updateCar)

    } catch(e){
      console.log(e)
    }
  };


  const OnlineStatus = () => {
    if (order && order.isFinished) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
              width: '100%',
              padding: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {' '}
              Complete {order?.type}
            </Text>
          </View>
          <Text style={styles.bottomText}>{order.user?.username} </Text>
        </View>
      );
    }

    if (order && order.pickedUp) {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              padding: 5,
            }}>
            <Text>{order?.duration?.toFixed(1) || 0} min</Text>
            <View
              style={{
                backgroundColor: 'green',
                marginHorizontal: 10,
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome name="user" size={25} color="#4a4a4a" />
            </View>
            <Text>{order?.distance?.toFixed(1) || 0} mi</Text>
          </View>
          <Text style={styles.bottomText}>Droping off {order.user?.username} </Text>
        </View>
      );
    }

    if (order) {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              padding: 5,
            }}>
            <Text>{order?.duration?.toFixed(1) || 0} min</Text>
            <View
              style={{
                backgroundColor: 'red',
                marginHorizontal: 10,
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome name="user" size={25} color="#4a4a4a" />
            </View>
            <Text>{order?.distance?.toFixed(1) || 0} mi</Text>
          </View>
          <Text style={styles.bottomText}>Pickinig up {order.user?.username} </Text>
        </View>
      );
    }

    if (!car?.isActive)
      return <Text style={styles.bottomText}>You're are Offline </Text>;
    return <Text style={styles.bottomText}>You're are Online</Text>;
  };

  const onUserLocationChange = async (e) => {
    // console.log('e.nativeEvent.coordinate')
    const { latitude, longitude, heading } = e.nativeEvent.coordinate

    
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        latitude,
        longitude,
        heading,
      }
      const updatedCarData = await API.graphql(
        graphqlOperation(updateCar, { input })
      )
      console.log("car Updated from onUserLocationChange")
      setCar(updatedCarData.data.updateCar);
    } catch (e) {
      console.error(e);
    }
  };

  const onDirectionFound = event => {
    // console.log("Direction found", event)
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
      });
    }
  };

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      };
    }

    return {
      latitude: order.originLatitude,
      longitude: order.oreiginLongitude,
    };
  };

  const fetchCar = async () => {
    try{
      const userData = await Auth.currentAuthenticatedUser();
      const carData = await API.graphql(
        graphqlOperation(
          getCar, {
            id: userData.attributes.sub
          }         
        )
      )
      // console.log('carData')
      // console.log(carData)
      setCar(carData.data.getCar)

    } catch(e) {
      console.log(e)
    }
  }


  const fetchOrders = async () => {
    try{
      const ordersData = await API.graphql(
        graphqlOperation(
          listOrders
        )
      )
      console.log('ordersData')
      console.log(ordersData)
      setNewOrders(ordersData.data.listOrders.items)

    } catch(e){
      console.log("'Error1: " + e)
    }
  }


  useEffect(()=> {
    console.log("Fetching Data ")
    fetchCar()
    fetchOrders()
  }, [])

  return (
    <View>
      <MapView
        style={{height: Dimensions.get('window').height - 100, width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 31.427021782304326,
          longitude: 73.05815450219171,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {order && (
            <MapViewDirections
              origin={{
                latitude: car?.latitude,
                longitude: car?.longitude,
              }}
              onReady={onDirectionFound}
              destination={getDestination()}
              apikey="AIzaSyBBYMf3Xl3LZEFjWQf6LlwUq447oRp7W6E"
              strokeWidth={5}
              strokeColor="hotpink"
            />
        )}
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

      {/* <Pressable
        onPress={() => console.warn('Pressed')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable> */}

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
        {car?.isActive ? (
          <Text style={[styles.goText, {fontSize: 24}]}>Start</Text>
        ) : (
          <Text style={styles.goText}>Go</Text>
        )}
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name="options" size={30} color="#4a4a4a" />

        {OnlineStatus()}

        <Entypo name="menu" size={30} color="#4a4a4a" />
      </View>

      {newOrders?.length > 0  && !order && (
        <NewOrderPopup
          newOrder={newOrders[0]}
          onAccept={() => onAccept(newOrders[0])}
          onDecline={onDecline}
          duration={2}
          distance={0.3}
        />
      )}
    </View>
  );
};

export default HomeScreen;
