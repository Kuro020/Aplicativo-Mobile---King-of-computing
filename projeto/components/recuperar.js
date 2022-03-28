import React from "react";
import {View, Text, StyleSheet, Image, ScrollView,TouchableOpacity} from "react-native";
import { useForm } from "react-hook-form";

export default function App(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <View style={estilo.container}>
        <Text>Digite o seu E-mail</Text>
      
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("example")} />
      </View>
      {/* include validation with required or other standard HTML validation rules */}

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
},
botao:{
  margin:10,
  padding:10,
  backgroundColor:'white',
  borderRadius:5,
},
cadastro:{
  margin:10,
  padding:10,
  backgroundColor:'white',
  borderRadius:5,
}

});