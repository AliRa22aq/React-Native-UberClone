import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomContainer: {
        height: 100,
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15

    },
    bottomText: {
        fontSize: 22,
        color: 'grey'
    },
    roundButton:{
        position: 'absolute',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25
    },
    goButton: {
        position: 'absolute',
        backgroundColor: '#1495ff',
        padding: 10,
        height: 75,
        width: 75,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 110,
        left: Dimensions.get('window').width /2-37
    },
    goText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',

    },
    balanceButton: {
        position: 'absolute',
        backgroundColor: '#1c1c1c',
        padding: 10,
        height: 50,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        left: Dimensions.get('window').width /2-50

    },
    balanceText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default styles;