import React, { Component } from 'react';

import Desejo from './paginas/desejo';
import Andamento from './paginas/andamento';
import Routes from './routes';
//import { createAppContainer, createStackNavigator } from 'react-navigation';

export default class App extends Component<{}> {
  render() {
    return (      
      <Routes/> 
    );
  }
}