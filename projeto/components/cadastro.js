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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function App() {

  return (
    <View>
      <View>
        <View style={estilo.container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }} styles={estilo.usuario}>
              <Text style={estilo.titulo}>Usuario</Text>
              <TextInput style={estilo.input} />
            </View>
</View>
</View>
</View>
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
     height: responsiveHeight(8),
    width: responsiveWidth(40),
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
    height: responsiveHeight(8),
    width: responsiveWidth(40),
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
    height: responsiveHeight(8),
    width: responsiveWidth(40),
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  jj: {
    paddingRight: 5,
    paddingLeft: 1,
  },
   titulo: {
    padding: 10,
    fontSize: 18,
  },
});