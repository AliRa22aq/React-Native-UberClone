import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#e7e7e7",
        // margin: 10,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",       
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10

    },
    rightContainer: {
            width: 100,
            flexDirection: 'row',
            justifyContent: 'flex-end'

            // justifyContent: 'space-between'
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    type:{
        fontWeight: 'bold',
        fontSize: 18


    },
    time: {
        
    },
    price:{
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5

    }

   
})

export default styles;