import React,{useState, useEffect} from 'react';
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
  FlatList
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const request = async (callback) => {
  const response = await fetch(
    'https://kingofcomputing.azurewebsites.net/v1/api.php?apicall=getCli'
  );
  const parsed = await response.json();
  callback(parsed.dadosLista);
};

export default function App(props) {
   const[registros, setRegistros] = useState([]);

  useEffect(()=>{
    request(setRegistros);
  }, []);
  return (
    
    <View style={estilo.container}>
      <View style={estilo.top}>
        <Text style={estilo.titulo}></Text>
        <Text style={estilo.titulo2}>King of Computing</Text>
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

      <View>
       <FlatList
        data={registros}
        keyExtractor={(item) => item.codCli.toString()}
        renderItem={({item})=> 
          <Text style={estilo.itens}>
            Nome: {item.nomeCli} {'\n'} CPF: {item.cpfCli} Telefone: {item.foneCli} Data de Nascimento: {item.dataCli} Endereço: {item.endCli}
          </Text>
        }
      />
      </View>

      <View style={estilo.sair}>
        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Principal');
          }}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
  },
  botao: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(42),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    bottom:120,
  },
  titulo: {
    margin: 1,
    padding: 1,
    backgroundColor: 'white',
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    fontSize: 25,
    textAlign: 'left',
  },
  titulo2: {
    margin: 1,
    padding: 1,
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    fontSize: 25,
    textAlign: 'left',
    bottom: 50,
  },
  perfil: {
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    left: 290,
    bottom: 100,
  },
  itens:{
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
    paddlingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5
  }
});
