import React from "react";
import {View, Text, StyleSheet, Image, ScrollView,TouchableOpacity,TextInput} from "react-native";
import { useForm } from "react-hook-form";

export default function App(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <View style={estilo.container}>
        <Text>Digite o seu E-mail</Text>
      
       <TextInput style={estilo.barras} />
      </View>

    <TouchableOpacity style={estilo.cadastro} onPress={()=>{props.navigation.navigate('Recuperar')}}>
      <Text >Recuperar senha</Text>
    </TouchableOpacity>
     </form>

  );
}

const estilo = StyleSheet.create({
container:{
  flex:1,
  justifyContent: 'left',
  textAlign: 'left',
    paddingLeft: 15,
},
cadastro:{
  margin:10,
  padding:10,
  backgroundColor:'white',
  borderRadius:5,
    textAlign: 'left',
    width: 150,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    
},

barras: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    width: 300,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
});