import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const NewOrderPopup = () => {
    return (
        <View style={styles.root}>
            <View style={styles.popupContainer}>
            
            <View style={styles.row}>
                <Text style={styles.uberType}>UberX</Text>
                <View style={styles.userBackground}>
                    <FontAwesome name='user' color='white' size={35} />
                </View>
                <Text style={styles.uberType}>
                    <AntDesign name="star" size={18}/>
                    5</Text>

            </View>

        <Text style={styles.minutes}>2 min</Text>
        <Text style={styles.distance}>0.2 mi</Text>


            </View>
        </View>
    )
}

export default NewOrderPopup
