import React, {Component} from 'react';
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';
import {  StyleSheet,  Text,  TextInput,  View,  TouchableOpacity,  Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Cabecalho from '../components/header';


class Perfil extends Component{
  render(){
    return(
        <Cabecalho navigation={this.props.navigation} pagina="Perfil" ativo="perfil" fundo="#fff">
          <View style={[styles.Centro, {height: 120, zIndex: 99,backgroundColor: '#26397c', position:'relative'}]}>
                    <View style={{position: 'absolute', height:0}}>
                    <Image style={[styles.avatar]} source={require('../avatar.png')}/>
                    </View>
          </View>  
          <View style={[styles.informacoes]}>
            <Text>Usuário:</Text>
            <TextInput style={[styles.input]} placeholder="userName"></TextInput>

            <Text style={{marginTop: 20}}>Email:</Text>
            <TextInput style={[styles.input]} placeholder="email"></TextInput>

            <View style={[styles.Centro], {marginTop: 40}}>
              <TouchableOpacity style={[styles.botao]}>
                  <Text style={{color: '#fff', textAlign:'center'}}>ALTERAR</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.Centro]}>
              <TouchableOpacity style={[styles.botao]}>
                  <Text style={{color: '#fff', textAlign:'center'}}>DELETAR CONTA</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Cabecalho>
   
      )
  }
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar:{
    width:100, 
    height:100,
    borderRadius: 50,
    borderColor: '#26397c',
    borderWidth: 1,
  },
  Centro: {
    justifyContent: 'center',
    alignItems:'center',
  },
  informacoes:{
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input:{
    backgroundColor: '#26397c20',
    height: 40,
    borderColor: '#26397c60',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5, 
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#13214d',
  },
  botao:{
    backgroundColor: '#13214d',
    marginTop:10,
    height: 40,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

