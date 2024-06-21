import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Agendamentos from './src/pages/agendamentos/index';
import NovoAgendamento from './src/pages/novoagendamento';
import Detalhes from './src/pages/detalhes';

const Stack = createStackNavigator()

export default function App() {
  return(

<NavigationContainer> 
      <Stack.Navigator initialRouteName = "agendamentos"> 
        <Stack.Screen
        name = "Agendamentos" 
        component= {Agendamentos} 
        options={{
          headerTintColor:"#ff00ea",
        }}
        />
        <Stack.Screen 
        name = "Novo Agendamento"
        component={NovoAgendamento}
        options={{headerTintColor: "#ff00ea",}}
        />
        <Stack.Screen 
        name = "Detalhes"
        component={Detalhes}
        options={{headerTintColor: "#ff00ea"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})



