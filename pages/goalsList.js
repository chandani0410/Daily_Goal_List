import React from "react";
import { View,Text,StyleSheet, Pressable } from "react-native";

function GoalsList(props){

    return(
        
        <View style={styles.display_list}>
            <Pressable 
            onPress={props.onDelete.bind(this,props.id)}
            style={(pressData)=>pressData.pressed && styles.pressed_goal_style}
            >
            <Text style={styles.display_list_text}>
                {props.text} 
            </Text>
            </Pressable>
        </View>
        
    );
}

export default GoalsList;

const styles = StyleSheet.create({
    display_list:{
        margin:12,
        borderWidth:2,
        borderRadius:15,
        backgroundColor :'#80D5C8',
        borderColor:'white'
    },
    display_list_text:{
        color:'white',
        fontSize:20,
        padding:15,
        fontWeight:'bold'
    },
    pressed_goal_style:{
        backgroundColor:'#121212',
        borderColor:'#80D5C8',
        borderRadius:15,
        borderWidth:2,
        opacity:40,

    }
})