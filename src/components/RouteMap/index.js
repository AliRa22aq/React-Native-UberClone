import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '@env';

const RouteMap = () => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.470627,
    longitude: -16.283045,
  };
  // const GOOGLE_MAPS_APIKEY = GOOGLE_MAP_KEY;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

        <MapViewDirections
          origin={origin}
          destination={destination}
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
