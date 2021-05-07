import React from 'react'
import { View, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import styles from './styles'

const PlaceRow = ({data}) => {
    // console.log(data)
    return (
        <View style={styles.row}>
                {
                    data.description === 'Home'?
            <View style={[styles.iconContainer, {backgroundColor: '#12a8ff',}]}>
                    <Entypo name="location-pin" size={20} color="black" />
            </View> :
            <View style={[styles.iconContainer, {backgroundColor: '#a2a2a2',}]}>
                    <Entypo name="location-pin" size={20} color="black" />
            </View> 

                }
            <Text style={styles.locationText}>{data.description || data.vicinity} </Text>
        </View>
    )
}

export default PlaceRow
