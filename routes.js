import React, { Component } from 'react';

import Desejo from './paginas/desejo';
//import App from './App';
import Andamento from './paginas/andamento';
import Detalhes from './paginas/detalhes';
import Login from './paginas/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header';
import Lidos from './paginas/lidos';
import Perfil from './paginas/perfil';
import Cadastro from './paginas/cadastro';
import AndamentoDetalhe from './paginas/andamentoDetalhe';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Desejo" component={Desejo}/>
        <Stack.Screen name="Detalhes" component={Detalhes}/>
        <Stack.Screen name="Andamento" component={Andamento}/>
        <Stack.Screen name="Lidos" component={Lidos}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="AndamentoDetalhe" component={AndamentoDetalhe}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;