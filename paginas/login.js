import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View, 
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


//const image = { uri: "../paisagem.jpg" };

class Login extends Component{
  entrar(){
    this.props.navigation.navigate('Desejo');
  }
  cadastro =() =>{
   this.props.navigation.navigate('Cadastro'); 
  }
	render(){
		return(
				<Container style={{backgroundColor: '#697e95'}}>
			    <View style={styles.container}>
            {/*<ImageBackground style={[styles.avatar]} source={require('../paisagem.jpg')}>*/}
             <View style={[styles.center]}>
                
              <Image style={[styles.imagem]} source={require('../img/login.png')}/>   
              <Text style={{color: '#efbe74', fontWeight: 'bold', fontSize: 28, marginTop: 20, marginBottom:20}}>Log In</Text>
              <TextInput style={[styles.input]}  placeholder="usuario ou email"/>
                  <TextInput style={[styles.input]}  placeholder="senha"/>

                  <TouchableOpacity style={[styles.btn]} onPress={()=>this.entrar()}>
                    <Text  style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#3f3d56'}}>Entrar</Text>     
                  </TouchableOpacity>
                
                   <Text style={{color: '#dcdcdc', marginTop: 15}}>Ainda não tem uma conta? <Text style={{color: '#efbe74', textDecorationLine:'underline'}} onPress={()=>this.cadastro()}>Cadastre-se</Text></Text>     
               
             </View>  
           {/*</ImageBackground>*/}
          </View>
        </Container>
   
			)
	}
}

export default Login;

const styles = StyleSheet.create({
  container: {
    //paisagem.jpg
    flex: 1,
    //backgroundColor: '#26397c',
    //alignItems: 'center',
    //justifyContent: 'center',

    flexDirection: "column"
  },
  imagem:{
    marginTop: 50,
    width: 260,
    height: 200,
  },
  login: {
    backgroundColor: '#fff',
    width: '92%',
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCabecalhoTexto:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    paddingTop: 5,
    //textTransform: 'uppercase',
    //fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 55,

  },
  input:{
    //backgroundColor: '#ffffff20',
    marginTop: 20,
    width: '85%',
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: '#3f3d56',
    borderBottomWidth: 1,
    color: '#fff',
  },
  btn:{
    backgroundColor: '#ff6584',
    marginTop: 60,
    width: '85%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  rodape:{
    backgroundColor: '#fade98',
    width: '92%',
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar:{
  flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

