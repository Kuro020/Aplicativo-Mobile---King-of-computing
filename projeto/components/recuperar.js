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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';


export default function App(props) {
 

  return (
      <View>
      <View style={estilo.container}>
          <Text style={estilo.texto}>Digite o seu E-mail</Text>

          <TextInput style={estilo.barras} />
      </View>
      
      <View>
        <TouchableOpacity
            style={estilo.senha}
            onPress={() => {
              props.navigation.navigate('Recuperar');
            }}>
            <Text>Recuperar senha</Text>
        </TouchableOpacity>
     </View>
     </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    textAlign: 'left',
    paddingLeft: 15,
  },
  senha: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
    width: 150,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    padding: 10,
    fontSize: 15,
  },

  barras: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    width: 285,
    height: 50,
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  texto: {
    padding: 5,
    fontSize: 15,
  },
});
