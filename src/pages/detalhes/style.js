import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20, 
  },
  Agendamentos:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
    margintop: 5,

  },
  deleteAgendamento:{
    justifyContent:'Center',
    paddinleft: 150,
  },
  descriptionAgendamento:{
    width: '75%',
    alignContent: 'flex-start',
    backgroundColor: 'white',
    padding:12,
    paddingHorizontal:20,
    borderRadius:50,
    marginBottom:5,
    marginRight:15,
    color: '#0c0c0cdc'
  },
  ButtonNewAgendamento:{
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor:'#F92e6a',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton:{
    color: 'White',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput:{
  justifyContent:'Center',
    paddinleft: 150,},
});

export default styles