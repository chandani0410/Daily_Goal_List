import React from "react";
import { StyleSheet, Text, TextInput, View , Button, ScrollView, SafeAreaView} from 'react-native';

const Section1 =()=>{
    return(
        <View>
            <View>
                <Text style={styles.input_tagline}>What are you goals for Today ?</Text>
            </View>
            <View>
                <View style={styles.input_container}>
                <TextInput placeholder="Add a Goal..!!!" style={styles.input_input}></TextInput>
                <Button title="Add Goal" onPress={()=> console.log('button clicked')}></Button>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    input_tagline:{
        color:"#80D5C8",
        fontSize:40,
        padding:10,
        fontFamily:'Times New Roman',
    },
    input_container :{
        marginTop:10,
        flexDirection : "row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:2,
        borderBottomColor:'white',
        padding:15,
        margin:15
    },
    input_input :{
        borderWidth : 2,
        borderColor:'#80D5C8',
        width:'80%',
        height:60,
        fontSize:20,
        padding:10,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
    }
})

export default Section1;