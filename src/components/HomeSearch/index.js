import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useNavigation} from '@react-navigation/native'

const HomeSearch = () => {

    const navigation = useNavigation()
    const goToSearch = async() => {

        navigation.navigate('DestinationSearch')
    }

    return (
        <View >
            {/* input box */}
            <Pressable onPress={goToSearch} style={styles.inputBox}>

            <Text style={styles.inputText}>Where to?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name='clockcircle' size={16} color="#535353" />
                    <Text>Now</Text>
                    <MaterialIcons name='keyboard-arrow-down' size={16}  color="#535353"/>
                </View>

              </Pressable>


            {/* prevous desitionation */}
            <View style={styles.row}> 
            <View style={[styles.iconContainer]}>
            <AntDesign name='clockcircle' size={20} color="#fff" />
            </View>
            <Text style={styles.destinationText} >Clock Tower </Text>

            </View>
            
            
            {/* Home  desitionation */}
            <View style={styles.row}> 
            <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
            <Entypo name='home' size={20} color="#fff" />
            </View>
            <Text style={styles.destinationText} >Home </Text>

            </View>



        </View>
    )
}

export default HomeSearch
