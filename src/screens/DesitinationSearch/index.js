import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const DestinationSearch = () => {

  const [destinationPlace, setDestinationPlace] = useState(null)

  console.log(fromText, destinationText);

  return (
    <View style={styles.container}>
      <View style={styles.textinputcontainer1}> 
      <GooglePlacesAutocomplete
        placeholder="Where to"
        fetchDetails
        styles={{
          textInput: styles.textinput
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setDestinationPlace({date: details})
        }}
        query={{
          key: 'AIzaSyBBYMf3Xl3LZEFjWQf6LlwUq447oRp7W6E',
          language: 'en',
        }}
      />
      </View>

      <View style={styles.textinputcontainer2}> 
      <GooglePlacesAutocomplete
        placeholder="Where to"
        fetchDetails
        styles={{
          textInput: styles.textinput
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setDestinationPlace({date: details})
        }}
        query={{
          key: 'AIzaSyBBYMf3Xl3LZEFjWQf6LlwUq447oRp7W6E',
          language: 'en',
        }}
      />
    </View>
    </View>
  );
};

export default DestinationSearch;
