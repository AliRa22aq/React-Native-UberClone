import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "#e7e7e7",
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",       
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#6e6e6e'
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#dbdbdb"

    },
    iconContainer: {
        backgroundColor: "#e3e3e3",
        padding: 10,
        borderRadius: 25
        
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 16
    },
   
})

export default styles;