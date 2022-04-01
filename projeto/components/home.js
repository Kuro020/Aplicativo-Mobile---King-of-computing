import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  TextInput,
  Appearance
} from 'react-native';
import { useForm } from 'react-hook-form';



export default function App(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <View>
        <Image style={estilo.imagem} source={require('../assets/pc.png')} />
      </View>
      <View style={estilo.container}>
        <View style={estilo.titulo}>
          <Text style={estilo.titulo}>Usuario</Text>
          <TextInput style={estilo.barras} />
          <Text style={estilo.titulo}>Senha</Text>
          <TextInput style={estilo.barras} />
        </View>

        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('');
          }}>
          <Text>Logar</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row' }}>
        
          <TouchableOpacity
            style={estilo.senha}
            onPress={() => {
              props.navigation.navigate('Recuperar');
            }}>
            <Text>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilo.cadastro}
            onPress={() => {
              props.navigation.navigate('Cadastro');
            }}>
            <Text>Cadastre-se</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </form>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
  },
  botao: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    textAlign: 'center',
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  cadastro: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    width: 140,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  senha: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    width: 150,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  titulo: {
    padding: 10,
    fontSize: 18,
  },
  imagem: {
    width: null,
    height: 300,
    resizeMode: 'cover',
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
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
});
