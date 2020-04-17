import React, { Component } from 'react';

import Desejo from './paginas/desejo';
import Routes from './routes';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
//import { createAppContainer, createStackNavigator } from 'react-navigation';



export default class App extends Component<{}> {
	constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
   async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
  	if (!this.state.isReady) {
      return <AppLoading />;
    }
	return (
	  <Routes/>
    );
  }
}