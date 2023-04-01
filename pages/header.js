import React from "react";
import { StyleSheet, Text, TextInput, View , Button, ScrollView, SafeAreaView,Image} from 'react-native';
// https://github.com/chandani0410/Daily_Goal_List
const Header=()=>{
    return (
        
    <View style={styles.header}>
        
        <View style={styles.header_section}>
      
            <Image source={require('../assets/Buddy.png')} style={styles.image}></Image>
            <Text style={styles.header_items}> Buddy APP!!!</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#80D5C8',
    },
    header_section:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    header_items :{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        justifyContent:'space-between',
        fontFamily:'Times New Roman',
        marginHorizontal:10,

    },
    image:{
        height:80,
        width:80,
        marginHorizontal:10,
    }
})

export default Header;