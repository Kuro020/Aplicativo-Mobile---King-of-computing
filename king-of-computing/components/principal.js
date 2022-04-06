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
import { AntDesign, FontAwesome } from '@expo/vector-icons';
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
        <View style={{ flexDirection: 'row' }}>
          <Text style={estilo.titulo}>King of Computing</Text>
          <FontAwesome
            style={estilo.perfil}
            name="user-circle-o"
            size={24}
            color="black"
            onPress={() => {
              props.navigation.navigate('Perfil');
            }}
          />
          </View>
        </View>

        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Principal');
          }}>
          <View style={{ flexDirection: 'column' }}>
            <Text>Faça seu agendamento</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Principal');
          }}>
          <Text>Consulte seu agendamento</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'column' }}></View>
      </View>
      <Image style={estilo.imagem} source={require('../assets/pc.png')} />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    borderRadius: 10,
    top: 280,
  },
  titulo: {
     margin: 1,
    padding: 1,
    backgroundColor: 'white',
    borderRadius: 100000,
    textAlign: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    shadowOffset: { width: 3, height: 3 },
    fontSize: 20,
  },
  botao: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(80),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    alignItems: 'center',
    left: 30,
    top: 70,
  },
  perfil: {
    margin: 1,
    padding: 1,
    backgroundColor: 'white',
    borderRadius: 100000,
    textAlign: 'center',
    height: responsiveHeight(3),
    width: responsiveWidth(7),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    left: 10,
    top: 10,
  },
});
