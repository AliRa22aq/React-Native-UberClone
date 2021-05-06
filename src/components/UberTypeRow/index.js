import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const UberTypeRow = ({data, setSelectedType}) => {
  // const [type, price] = props.type
  // console.log(data)
  const {type, price, duration} = data;

  const getImage = () => {
    if (type === 'UberX') {
      return require('../../assests/images/UberX.jpeg');
    }
    if (type === 'Comfort') {
      return require('../../assests/images/Comfort.jpeg');
    }
    if (type === 'UberXL') {
    return require('../../assests/images/UberXL.jpeg');
    }
  };


  return (
    <Pressable style={styles.container} onPress={()=> {setSelectedType(type)}} >
      {/* Image */}
      <Image style={styles.image} source={getImage()} />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type} <Ionicons name="person" size={16} />3
        </Text>
        <Text style={styles.time}>{duration}PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="green" />
        <Text style={styles.price}>est. ${price}</Text>
      </View>
    </Pressable>
  );
};

export default UberTypeRow;
