import React, { useState, useEffect} from "react"
import { SafeAreaView ,
    View,
    Text, 
    TouchableOpacity, 
    FlatList
} from "react-native"


import { database } from "../../config/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons"
import { query } from "firebase/firestore"


export default function Agendamentos({ navigation }) {
    const [agendamentos, setAgendamentos] = useState([])

    function deleteAgendamento(id){
        database.collection("agendamento").doc(id).delete()
    }
    useEffect(()=>{
        database.collection("agendamento").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])

    return(
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={agendamentos}
            renderItem={( item ) =>{
                return(
                <View style={styles.Agendamentos}>
                    <TouchableOpacity 
                        style={styles.deleteAgendamento}
                        onPress={() => {
                            deleteTask(item.id)
                        }}>    
               
                        <FontAwesome
                        name="star"
                        size= {23}
                        color="red">
                            
                        </FontAwesome> 

                    </TouchableOpacity>
                    <Text
                        style={styles.descriptionAgendamento}
                        onPress={()=>{
                            navigation.navigate("Detalhes",{
                            id: item.id,
                            description: item.description,
                        })}}
                    >
                        {id.description}
                    </Text>
                </View>
                )
            }}/>
            <TouchableOpacity 
            style={styles.ButtonNewAgendamento}
            onPress={() => navigation.navigate(" Novo Agendamento ")}>    
               
                <Text style={styles.iconButton}>+</Text> 

            </TouchableOpacity>
        </View>
    );
}

