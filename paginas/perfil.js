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
        <Cabecalho navigation={this.props.navigation} ativo="perfil" fundo="#fff">
          <View style={[styles.Centro, {height: 120, zIndex: 99,backgroundColor: '#697e95', position:'relative', borderBottomRightRadius: 50}]}>
                    <View style={{position: 'absolute', height:0}}>
                    <Image style={[styles.avatar]} source={require('../img/avatar.png')}/>
                    </View>
          </View>  
          <View style={[styles.informacoes]}>
            <Text style={{marginTop:10, color: '#697e95', fontSize: 16, fontWeight: 'bold'}}>Usuário:</Text>
            <TextInput style={[styles.input]} placeholder="userName"></TextInput>

            <Text style={{marginTop:20, color: '#697e95', fontSize: 16, fontWeight: 'bold'}}>Email:</Text>
            <TextInput style={[styles.input]} placeholder="email"></TextInput>

            <View style={[styles.Centro], {marginTop: 40}}>
              <TouchableOpacity style={[styles.botao]}>
                  <Text style={{color: '#fff', textAlign:'center', fontWeight: 'bold'}}>ALTERAR</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.Centro]}>
              <TouchableOpacity style={[styles.botao]}>
                  <Text style={{color: '#fff', textAlign:'center', fontWeight: 'bold'}}>DELETAR CONTA</Text>
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
    borderColor: '#697e95',
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
    backgroundColor: '#f2f2f210',
    borderColor: '#3f3d56',
    borderBottomWidth: 1,
    //borderRadius: 5,
    color: '#fff',
    marginTop: 10,
    //width: '85%',
    height: 40,
    paddingHorizontal: 15,
  },
  botao:{
    backgroundColor: '#ff6584',
    marginTop:10,
    height: 50,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

