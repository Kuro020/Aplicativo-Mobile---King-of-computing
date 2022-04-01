import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Cadastro from './cadastro';
import Recuperar from './recuperar';
import Principal from './principal';
import Perfil from './perfil';



const Stack = createStackNavigator();

export default function rotasBotao(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Recuperar' component={Recuperar}/>
           <Stack.Screen name='Perfil' component={Perfil}/>
        <Stack.Screen name='Principal' component={Principal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}