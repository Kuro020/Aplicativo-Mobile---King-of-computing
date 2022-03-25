import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Cadastro from './cadastro';


const Stack = createStackNavigator();

export default function rotasBotao(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}