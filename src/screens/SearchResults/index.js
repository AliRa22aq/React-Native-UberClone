import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
// import styles from './styles';
import {GOOGLE_MAP_KEY} from "@env"
import {useRoute} from'@react-navigation/native'


const SearchResults = () => {

  const route = useRoute();
  // console.log(route.params)
  //orignalPlace  destinationPlace

  const {originPlace, destinationPlace} = route.params
  // console.log(originPlace.date.geometry.location)

  return (
    <View style={{display: 'flex', justifyContent: "space-between"}}>

    <View style={{height: Dimensions.get('window').height - 400}}> 
    <RouteMap  origin={originPlace} destination={destinationPlace}/>
    </View>

    <View style={{height: 400}}> 
    <UberTypes />
    </View>
    

    </View>
  );
};

export default SearchResults;
