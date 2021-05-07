import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: "100%",
        
        
    },
    textinputcontainer1: {
        position: 'absolute'

    },
    textinputcontainer2: {
        height: "100%",
        position: 'absolute',
        top: 20

    },
    textinput:{
        padding: 10,
        backgroundColor: "#eee",
        marginVertical: 5,
        marginLeft: 20
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
        
    },
    iconContainer: {
        padding: 5,
        borderRadius: 50,
        marginRight: 15
    },
    locationText: {

    },
    separator:{
        backgroundColor: '#efefef',
        height: 1
    },
    listView: {
        position: 'absolute',
        top: 110
    },
    autoCompleteContainer: {
        position: 'absolute',
        left: 10,
        right: 10
    },
    crcle:{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 25,
        left: 15,
        borderRadius: 5
        
    },
    line:{
        width: 1,
        height: 50,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 30,
        left: 17,
    },
    square:{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15,
    }
})

export default styles;