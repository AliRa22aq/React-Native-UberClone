import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20,
        height: 250
    },
    popupContainer: {
        backgroundColor: 'black',
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    minutes: {
        color: 'lightgrey',
        fontSize: 30

    },
    distance: {
        color: 'lightgrey',
        fontSize: 26

    },
    uberType: {
        color: 'lightgrey',
        fontSize: 20,
        marginHorizontal: 10
    },
    userBackground: {
        backgroundColor: '#008bff',
        width: 75,
        height: 75,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles;