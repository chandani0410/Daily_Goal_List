import React from "react";
import { StyleSheet, Text, TextInput, View , Button, ScrollView, SafeAreaView, FlatList, Alert,Modal,Image} from 'react-native';
import GoalsList from "./goalsList";
import Header from "./header";
function GoalsInput(props){

//============= Handle Change For Getting Goal 
    const[goal,setGoal] = React.useState('');

    function handleChange(event){
        setGoal(event)
    }

//============= Handle Submit to pass parameter to prop
    function handleSubmit(){
        if(goal.length>0)
        {
            props.onSubmit(goal);
            setGoal('');
        }else{

        }
    }
    
    return( 
        <Modal visible={props.visible} animationType="slide">
           <View style={styles.trial}>
                <SafeAreaView>
                    <Header/>
                </SafeAreaView>
            </View>
            
        <View style={styles.input_container}>
        <Image source={require('../assets/appLogo.png')} style={styles.image}></Image>
            <TextInput 
            placeholder="Add a Goal..!!!" 
            style={styles.input_input} 
            onChangeText={handleChange}
            value={goal}>
            </TextInput>
            <View style={styles.button_container}>
                <View style={styles.add_goal_button}>
                    <Button title="Add Goal" onPress={handleSubmit}></Button>
                </View>
                <View style={styles.add_goal_button}>
                    <Button title="Cancel" onPress={props.turnOffModal}></Button>
                </View>
            </View>
            
        </View>
        </Modal>
    );
}

export default GoalsInput;

const styles = StyleSheet.create({
    input_container :{
        flex:1,
        justifyContent:'flex-start',
        alignItems:"center",
        padding:16,
        width:'100%',
        backgroundColor:'#121212'
    },
    input_input :{
        borderWidth : 2,
        borderColor:'#80D5C8',
        width:'100%',
        height:60,
        fontSize:20,
        padding:10,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginTop:15
    },
    button_container:{
        marginTop:13,
        flexDirection:'row',
    },
    add_goal_button:{
        alignItems:'center',
        marginHorizontal:8,
        width:'40%'
    },
    trial:{
        backgroundColor:'#121212'
    },
    image:{
        height:100,
        width:100,
        margin:20,
        borderRadius:10
    }
})