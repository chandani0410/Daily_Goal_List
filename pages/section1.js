import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    FlatList
} from 'react-native';
import GoalsList from "./goalsList";
import GoalsInput from "./goaslInput";

const Section1 =()=>{

//==========    GOALLIST STATE AND FUNCTION
    const[goalsList,setGoalsList] = React.useState([]);


    function handleSubmit(goal){
        setGoalsList(prevGoalsList=>[
            ...prevGoalsList,{
            text:goal,
            key:Math.random()
        }
        ]);
        modalVisibleOff();
    }

//==========    DELETE GOAL FUNCTION
    function deleteGoal(key){
        // console.log("Deleted");
        setGoalsList(prevGoalsList=>{
            return goalsList.filter((goals)=>goals.key !==key)
        });
    }

//==========    MODAL STATE AND FUNCTION
    const [modalVisibility,setModalVisibility] = React.useState(false);

    function modalVisibleOn(){
        setModalVisibility(true);
    }

    function modalVisibleOff(){
        setModalVisibility(false);
    }
//========== Return 
    return(
        <View style={{flex:1}}>
            <View>
                <Text style={styles.input_tagline}>Click below to add your GOALS LIST!!!</Text>
            </View>
            <View style={{width:'100%',alignItems:'center'}}>
            <Button 
            title='Add New Goal' 
            onPress={modalVisibleOn}
            />
            </View>
           {
           modalVisibility && <GoalsInput 
           onSubmit={handleSubmit} 
           visible={modalVisibility}
           turnOffModal={modalVisibleOff}/>
           }
           <FlatList 
                style={styles.display_list_section}
                data={goalsList}
                // style={{flex: 1}}
                renderItem={(ItemData) =>{
                    return(
                        <GoalsList 
                        text={ItemData.item.text} 
                        id={ItemData.item.key}
                        onDelete={deleteGoal}/>
                    );
                }}
            />
        </View>
    );
}
const styles=StyleSheet.create({
    input_tagline:{
        color:"#80D5C8",
        fontSize:30,
        padding:15,
        fontFamily:'Times New Roman',
        width:'100%'
    },
    display_list_section:{
        margin:10
    }
})

export default Section1;