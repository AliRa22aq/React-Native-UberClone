import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from '@env';

import styles from './styles';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/core';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);


  const navigation = useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace
      });
    }
  }, [originPlace, destinationPlace]);

  // console.log(fromText, destinationText);
  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where from"
        suppressDefaultStyles
        enablePoweredByContainer={false}
        fetchDetails
        currentLocation={true}
        currentLocationLabel="Current location"
        styles={{
          textInput: styles.textinput,
          container: [styles.autoCompleteContainer, {top: 0}],
          listView: styles.listView,
          separator: styles.separator,
        }}
        renderRow={data => <PlaceRow data={data} />}
        renderDescription={data => data.description || data.vicinity}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setOriginPlace({date: details});
        }}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        predefinedPlaces={[homePlace, workPlace]}
      />

      <GooglePlacesAutocomplete
        placeholder="Where to"
        suppressDefaultStyles
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          textInput: styles.textinput,
          container: [styles.autoCompleteContainer, {top: 55}],
          separator: styles.separator,
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setDestinationPlace({date: details});
        }}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        renderRow={data => <PlaceRow data={data} />}
      />

      <View style={styles.crcle} />
      <View style={styles.line} />
      <View style={styles.square} />
    </View>
  );
};

export default DestinationSearch;
