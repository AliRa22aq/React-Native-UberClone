import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import OrderMap from '../../components/OrderMap';
import {API, graphqlOperation} from 'aws-amplify';
import {getCar, getOrder} from '../../graphql/queries';
import {onOrderUpdated, onCarUpdated} from './subscriptions';

const OrderScreen = () => {
  const [car, setCar] = useState(null);
  // console.log('car');
  // console.log(car);

  const [order, setOrder] = useState(null);
  console.log('order');
  console.log(order);

  const route = useRoute();
  console.log('route?.params.id');
  console.log(route?.params.id);

  // Fetch order on initial render
  useEffect(() => {
    const fethcOrder = async () => {
      try {
        const orderData = await API.graphql(
          graphqlOperation(getOrder, {
            id: route?.params.id,
          }),
        );
        setOrder(orderData.data.getOrder);
      } catch (e) {
        console.log('Error: ', e);
      }
    };
    fethcOrder();
  }, []);

  //  Subscribe to order update
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onOrderUpdated, {id: route?.params.id}),
    ).subscribe({
      next: ({value}) => setOrder(value.data.onOrderUpdated),
      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch Car on initial render
  useEffect(() => {
    if (!order) {
      return;
    }
    const fetchCar = async () => {
      console.log('fetching car data');
      try {
        const carData = await API.graphql(
          graphqlOperation(getCar, {
            id: order.userId,
          }),
        );
        setCar(carData.data.getCar);
      } catch (e) {}
    };
    fetchCar();
  }, [order]);

  //  Subscribe to order update
  useEffect(() => {
    if (!order?.carId) {
      return;
    }

    const subscription = API.graphql(
      graphqlOperation(onCarUpdated, {id: order?.userId}),
    ).subscribe({
      next: ({value}) => setCar(value.data.onCarUpdated),
      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, [order]);

  return (
    <ScrollView style={styles.container}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <OrderMap car={car} />
      </View>
      <View>
        <Text>Order status: {order?.status} </Text>
      </View>
    </ScrollView>
  );
};

export default OrderScreen;
