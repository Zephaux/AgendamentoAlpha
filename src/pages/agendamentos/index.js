import React, { useState, useEffect} from "react"
import { SafeAreaView ,
    View,
    Text, 
    TouchableOpacity, 
    FlatList
} from "react-native"



export default function Agendamentos() {
    const [agendamentos, setAgendamentos] = useState([])

    useEffect(()=>{

    }, [])

    return(
        <View>
            <Text>Page Agendamentos</Text>
        </View>
    );
}

