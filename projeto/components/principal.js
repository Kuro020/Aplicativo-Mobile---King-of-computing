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
  Appearance,
} from 'react-native';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function App(props) {

  return (
    <View>
      <View style={estilo.container}>
        <View style={estilo.top}>
          <Text>King of Computation</Text>
          <FontAwesome name="user-circle-o" size={24} color="black" onPress={() => {
            props.navigation.navigate('Perfil');
          }} />
        </View>
        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Principal');
          }}>
          <Text>Faça seu agendamento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Principal');
          }}>
          <Text>Consulte seu agendamento</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}></View>
      </View>
        <Image style={estilo.imagem} source={require('../assets/pc.png')} />
      </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
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
  imagem: {
    width: null,
    height: 300,
    resizeMode: 'center',
    borderRadius: 10,
  },
});
