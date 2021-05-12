import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

const getImage = type => {
  if (type === 'UberX') {
    return require('../../assests/images/top-UberX.png');
  }
  if (type === 'Comfort') {
    return require('../../assests/images/top-Comfort.png');
  }
  return require('../../assests/images/top-UberXL.png');
};

const OrderMap = ({car}) => {
  console.log('car from OrderMap')
  console.log(car)

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        userLocationCalloutEnabled={true}
        style={{width: '100%', height: '100%'}}
        showsUserLocation={true}
        initialRegion={{
          latitude: 31.45036619999999,
          longitude: 73.13496049999999,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0221,
        }}>

          {car && (
                    <Marker
                      coordinate={{latitude: car.latitude, longitude: car.longitude}}>
                      <Image
                        style={{
                          width: 70,
                          height: 70,
                          resizeMode: 'contain',
                          transform: [
                            {
                              rotate: `${car.heading}deg`,
                            },
                          ],
                        }}
                        source={getImage(car.type)}
                      />
                    </Marker>
          )}

          
      </MapView>
    </View>
  );
};

export default OrderMap;
