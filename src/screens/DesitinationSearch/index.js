import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from "@env"


import styles from './styles';

const DestinationSearch = () => {

  const [orignalPlace, setOrignalPlace] = useState(null)
  const [destinationPlace, setDestinationPlace] = useState(null)

  useEffect(() => {

    if(orignalPlace && destinationPlace){
      console.warn('Redirct to ')
    }


  }, [orignalPlace, destinationPlace ])

  // console.log(fromText, destinationText);

  return (
    <View style={styles.container}>

      <GooglePlacesAutocomplete
        placeholder="Where to"
        fetchDetails
        styles={{
          textInput: styles.textinput
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setOrignalPlace({date: details})
        }}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
      />


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
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
      />
    </View>
  );
};

export default DestinationSearch;
