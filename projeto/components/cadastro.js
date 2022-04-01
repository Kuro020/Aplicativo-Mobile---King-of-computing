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

  return (
    <View>
      <View>
        <View style={estilo.container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }} styles={estilo.j1}>
              <Text>Usuario</Text>
              <TextInput style={estilo.input} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <Text>Endereço</Text>
              <TextInput style={estilo.input} />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }} styles={estilo.jj}>
              <Text>Telefone</Text>
              <TextInput style={estilo.input} />
            </View>

            <View style={{ flexDirection: 'column' }} styles={estilo.jj}>
              <Text>CPF</Text>
              <TextInput style={estilo.input} />
            </View>
          </View>

          <View>
            <Text>E-mail</Text>
            <TextInput style={estilo.input1} />
            <Text>Senha</Text>
            <TextInput style={estilo.input1} />
          </View>
        </View>
      </View>

      <TouchableOpacity style={estilo.cadastro} onPress={'submit'}>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
      </View>
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
    borderRadius: 10,
    textAlign: 'left',
    width: 150,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  input: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    width: 150,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  input1: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    width: 320,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  jj: {
    paddingRight: 5,
    paddingLeft: 1,
  },
  j1: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
