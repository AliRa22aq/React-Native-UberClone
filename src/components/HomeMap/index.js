import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
// import cars from '../../assests/data/cars';


import {API, graphqlOperation} from 'aws-amplify' 
import {listCars} from '../../graphql/queries'

const getImage = (type) => {
  if (type === 'UberX') {
    return require('../../assests/images/top-UberX.png');
  }
  if (type === 'Comfort') {
    return require('../../assests/images/top-Comfort.png');
  }
    return require('../../assests/images/top-UberXL.png');

};

const HomeMap = () => {

  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      try{
        const response = await API.graphql(
          graphqlOperation(
            listCars
          )
        )

        // console.log(response)
        setCars(response.data.listCars.items)

      } catch(e){
        console.log("Error: ", e)
      }

    }

    fetchCars()

  }, [])


  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        userLocationCalloutEnabled ={true }
        style={{width: '100%', height: '100%'}}
        showsUserLocation={true}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}>
        
        {cars.map(car => {
          return (
            <Marker
              key={car.id}
              coordinate={{latitude: car.latitude, longitude: car.longitude}}>
              <Image
                style={{
                    width: 70, 
                    height: 70, 
                    resizeMode: "contain",
                    transform: [{
                        rotate: `${car.heading}deg`
                    }]
                
                }}
                source={getImage(car.type)}
              />
            </Marker>
          );
        })}

      </MapView>
    </View>
  );
};

export default HomeMap;
