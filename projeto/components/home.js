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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function App(props) {
  return (
    <ScrollView>
      <View>
        <View>
          <Image style={estilo.imagem} source={require('../assets/pc.png')} />
        </View>

        <View style={estilo.container}>
          <View style={estilo.usuario}>
            <Text style={estilo.titulo}>Usuario</Text>
            <TextInput style={estilo.barras} />
          </View>
          <View>
            <Text style={estilo.titulo}>Senha</Text>
            <TextInput style={estilo.barras} />
          </View>

          <TouchableOpacity
            style={estilo.botao}
            onPress={() => {
              props.navigation.navigate('Principal');
            }}>
            <Text style={estilo.logar}>Logar</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={estilo.esqueceu}
              onPress={() => {
                props.navigation.navigate('Recuperar');
              }}>
              <Text style={estilo.senha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilo.cadastro}
              onPress={() => {
                props.navigation.navigate('Cadastro');
              }}>
              <Text style={estilo.logar}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    height: responsiveHeight(50), // 50% of window height
    width: responsiveWidth(50), // 50% of window width
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
    height: responsiveHeight(6),
    width: responsiveWidth(90),
  },
  cadastro: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
   height: responsiveHeight(8),
    width: responsiveWidth(42),
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
    height: responsiveHeight(8),
    width: responsiveWidth(42),
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
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    resizeMode: 'cover',
  },
  barras: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  logar:{
    textAlign: 'center',
  }
});
