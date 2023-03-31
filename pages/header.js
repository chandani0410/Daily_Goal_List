import React from "react";
import { StyleSheet, Text, TextInput, View , Button, ScrollView, SafeAreaView,Image} from 'react-native';
import appLogo from 'C:\Users\chand\Desktop\training\Practice\RNcourse\assets\appLogo.png'

const Header=()=>{
    return (
    <View style={styles.header}>
        <View style={styles.header_section}>
            <Text style={styles.header_items}> Buddy APP!!!</Text>
            {/* <Image source={appLogo}/> */}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    header_section:{
        alignSelf:'center',
    },
    header_items :{
        fontSize:35,
        fontWeight:'bold',
        color:'#80D5C8',
        padding:10,
        height:60,
        fontFamily:'Times New Roman',
        // backgroundColor:'#121212'
    }
})

export default Header;