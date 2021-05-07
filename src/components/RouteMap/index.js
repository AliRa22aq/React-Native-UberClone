import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '@env';

const RouteMap = ({origin, destination}) => {
  // console.log('origin, destination')
  // console.log(origin, destination)

  const originLoc = {
    latitude: origin.date.geometry.location.lat,
    longitude: origin.date.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.date.geometry.location.lat,
    longitude: destination.date.geometry.location.lng,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        showsUserLocation={true}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

        <MapViewDirections
          origin={originLoc}
          destination={destinationLoc}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
        <Marker 
          coordinate={origin}
          title='Origon'
        />
        <Marker 
          coordinate={destination}
          title='Destination'
        />
      </MapView>
    </View>
  );
};

export default RouteMap;
