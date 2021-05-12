import React, {useState} from 'react';
import {View, Dimensions, Alert} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import {useNavigation, useRoute} from'@react-navigation/native'

import {API, Auth, graphqlOperation} from 'aws-amplify'
import {createOrder} from '../../graphql/mutations'

const SearchResults = () => {

  const route = useRoute();
  const navigation = useNavigation();

  
  const {originPlace, destinationPlace} = route.params
  // console.log(originPlace.date.geometry.location)
  
  const typeState = useState(null);

  const onSubmit = async () => {

    console.warn("sumitted")

    const [type] = typeState;
    if(!type) {
      return;
    }
    console.log("type")
    console.log(type)


    const userInfo = await Auth.currentAuthenticatedUser();


    const date = new Date();
    const input = {
      createdAt: date.toISOString(),
      type: type,
      originLatitude : originPlace.date.geometry.location.lat,
      oreiginLongitude: originPlace.date.geometry.location.lng,
      destLatitude: destinationPlace.date.geometry.location.lat,
      destLongitude: destinationPlace.date.geometry.location.lng,
      userId: userInfo.attributes.sub,
      carId: "1",
      status: 'NEW'
    }  

    // submit to server
    try{
      const response = await API.graphql(
        graphqlOperation(
          createOrder, {
            input : input
          }
        )
      )
      // console.log('response')
      // console.log(response)


      navigation.navigate("OrderPage", {id: response.data.createOrder.id })


    } catch(e) {
      console.log("Error: ", e)
    }


  }

  return (
    <View style={{display: 'flex', justifyContent: "space-between"}}>

    <View style={{height: Dimensions.get('window').height - 400}}> 
    <RouteMap  origin={originPlace} destination={destinationPlace}/>
    </View>

    <View style={{height: 400}}> 
    <UberTypes typeState={typeState} onSubmit={onSubmit}/>
    </View>
    

    </View>
  );
};

export default SearchResults;
