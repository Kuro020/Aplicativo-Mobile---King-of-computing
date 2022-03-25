import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <View>
        <View style={estilo.container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }} style={estilo.jj}>
              <Text>Usuario</Text>
              <TextInput style={estilo.input} />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text>Endereço</Text>
              <TextInput style={estilo.input} />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text>Telefone</Text>
              <TextInput style={estilo.input} />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text>CPF</Text>
              <TextInput style={estilo.input} />
            </View>
          </View>
          <View>
            <Text>E-mail</Text>
            <TextInput style={estilo.input} />
            <Text>Senha</Text>
            <TextInput style={estilo.input} />
          </View>
          {errors.exampleRequired && <span>Esse campo é obrigatório</span>}
        </View>
      </View>

      <TouchableOpacity style={estilo.cadastro} onPress={'submit'}>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
    </form>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  cadastro: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    height: 5,
    borderWidth: 1,
    padding: 15,
  },
  jj:{
    paddingRight: 15,
    paddingLeft: 10,
  },
});