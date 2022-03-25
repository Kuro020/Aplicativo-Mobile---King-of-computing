import React from "react";
import {View, Text, StyleSheet, Image, ScrollView,TouchableOpacity} from "react-native";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <View>
      <View  style={estilo.container}>
        <View style={{ flexDirection:"row" }}>
          <Text>Usuario</Text>
            <input {...register("example")} />
          <Text>Endereço</Text>
            <input {...register("example")} />
        </View>
        <View style={{ flexDirection:"row" }}>
          <Text>Telefone</Text>
            <input {...register("example")} />
          <Text>Documento</Text>
            <input {...register("example")} />
        </View>
        <View>
          <Text>E-mail</Text>
            <input {...register("example")} />
          <Text>Senha</Text>
            <input {...register("exampleRequired", { required: true })} />
        </View>
      {errors.exampleRequired && <span>Esse campo é obrigatório</span>}
      </View>
    </View>
      

    <TouchableOpacity style={estilo.cadastro} onPress={"submit"}>
      <Text >Cadastre-se</Text>
    </TouchableOpacity>
     </form>

  );
}

const estilo = StyleSheet.create({
container:{
  flex:1,
},
cadastro:{
  margin:10,
  padding:10,
  backgroundColor:'white',
  borderRadius:5,
}

});