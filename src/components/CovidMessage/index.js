import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if neccassary</Text>
            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            <Text style={styles.learnMore}>Learn more</Text>

        </View>
    )
}

export default CovidMessage
