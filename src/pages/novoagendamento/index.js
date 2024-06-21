import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import database from '../../config/firebaseconfig'
import styles from './style'

export default function NovoAgendamento({ navigation }) {

    const [nome, setNome] = useState(null)
    const [servico, setServico] = useState(null)
    const [tell, setTell] = useState(null)

    function AddAgendamento(){
        database.collection("agendamento").add({
            nome: nome,
            servico: servico,
            tell: tell
        })
        navigation.navigate("Agendamentos")
    }


    return(
        <View   style={styles.container}>
            <Text> Nome</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Nome do cliente..."
            onChange={setNome}
            value={nome}/>

        <Text> Serviços</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Serviço ex: Pintar Unhas"
            onChange={setServico}
            value={servico}/>

        <Text> Telefone</Text>      
            <TextInput
            style={styles.inputText}
            placeholder="Telefone"
            onChange={setTell}
            value={tell}/>

            <TouchableOpacity    style={styles.buttonNewAgendamento}
            onPress={() => {AddAgendamento()
            }}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}