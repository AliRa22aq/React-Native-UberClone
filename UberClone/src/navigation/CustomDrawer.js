import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { Auth } from 'aws-amplify';

const logout = async() => {

    console.warn("Log out")
    await Auth.signOut({ global: true });

}

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>

                {/* User Row */}
                <View style={styles.imageConatienr}>
                <View style={styles.image}>
                    <Entypo name='user' size={35}  color='grey'/>
                </View>
                <View>
                    <Text style={styles.name}>Ali Razzaq</Text> 
                    <Text style={styles.stars}>5.0</Text> 
                </View>
                </View>

                {/* Messae Row */}
                <Pressable style={styles.messageConatiner}>
                <View >
                    <Text style={styles.message}>Messages</Text>
                </View>
                </Pressable>
                

                {/* Do more */}
                <Pressable onPress={()=> {console.warn("Make money driving")}}>
                    <Text style={[styles.text, {color: "#dddddd"}]}>
                        Do more with your account</Text>
                </Pressable>

                {/* Make Money */}
                <Pressable onPress={()=> {console.warn("Make money driving")}}>
                    <Text style={styles.text}>Make money driving</Text>
                </Pressable>


            </View>

            <DrawerItemList {...props} />

                <Pressable onPress={logout} style={styles.logout}>
                    <Text style={styles.logoutText}>logout</Text>
                </Pressable>
                
        </DrawerContentScrollView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 15,
        top: -5
    },
    imageConatienr: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },
    image: {
        backgroundColor: '#cacaca',
        width: 60,
        height: 60,
        borderRadius: 35,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'


    },
    name: {
        color: 'white',
        fontSize: 20

    },
    stars: {
        color: 'lightgrey',
        fontSize: 16


    },
    messageConatiner: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    message: {
        fontSize: 18,
        color: 'white',
        paddingVertical: 10
    },
    text: {
        color: 'white',
        paddingVertical: 5
    },
    logout: {
        width: '100%', 
        height: 50, 
        backgroundColor: 'black',
        justifyContent: 'center', 
        alignItems: 'center',

    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        // justifyContent: 'center', 
        // alignItems: 'center'
    }
})