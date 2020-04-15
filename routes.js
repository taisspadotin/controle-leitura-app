import React, { Component } from 'react';

import Desejo from './paginas/desejo';
//import App from './App';
import Andamento from './paginas/andamento';
import Detalhes from './paginas/detalhes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={Andamento}       
          options={{
          title: '',
          headerStyle: {
            backgroundColor: 'none',
            height: 0,
          },
        }}
        />
        <Stack.Screen name="Desejo" component={Desejo} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'none',
            height: 0,
          },
        }}/>
        <Stack.Screen name="Detalhes" component={Detalhes} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'none',
            height: 0,
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;