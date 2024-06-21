import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput} from "react-native";

import styles from './style'
import { database } from "../../config/firebaseconfig";


export default function Detalhes({ navigation, route}) {
    const [nomeEdit, setNomeEdit ] = useState(route.params.nome)
    const [servicoEdit, setServicoEdit ] = useState(route.params.servico)
    const [tellEdit, setTellEdit ] = useState(route.params.tell)
    const idtask = route.params.id
   
function EditAgendamento(nome, servico, tell, id){
    database.collection("agendamento").add(id).update({
        nome: nomeEdit,
        servico: servicoEdit,
        tell: tellEdit,
    })
    navigation.navigate("Agendamentos")
}

    return(
        <View   style={styles.container}>
            <Text> Nome</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Nome do cliente..."
            onChange={setNomeEdit}
            value={nomeEdit}/>

        <Text> Serviços</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Serviço ex: Pintar Unhas"
            onChange={setServicoEdit}
            value={servicoEdit}/>

        <Text> Telefone</Text>      
            <TextInput
            style={styles.inputText}
            placeholder="Telefone"
            onChange={setTellEdit}
            value={tellEdit}/>

            <TouchableOpacity    
            style={styles.buttonNewAgendamento}
            onPress={() => {
                EditAgendamento(nomeEdit, servicoEdit, tellEdit, idtask)
            }}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}