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
				<Container>
			    <View style={styles.container}>
            <ImageBackground style={[styles.avatar]} source={require('../paisagem.jpg')}>
             <View style={[styles.center]}>
                
               <View style={[styles.rodape, {backgroundColor:'#13214d', borderTopRightRadius: 5, borderTopLeftRadius: 5}]}>
                   <Text style={{fontSize:17, color:'#fff', textTransform:'uppercase', fontWeight:'bold'}}>Login</Text>     
               </View>
               
               <View style={[styles.login]}>
                  <TextInput style={[styles.input]}  placeholder="usuario ou email"/>
                  <TextInput style={[styles.input]}  placeholder="senha"/>

                  <TouchableOpacity style={[styles.btn]} onPress={()=>this.entrar()}>
                    <Text  style={{textTransform: 'uppercase'}}>Entrar</Text>     
                  </TouchableOpacity>
                </View>
                
               <View style={[styles.rodape, {borderBottomRightRadius: 5, borderBottomLeftRadius: 5}]}>
                   <Text>Ainda não tem uma conta? <Text style={{color: '#26397c', textDecorationLine:'underline'}} onPress={()=>this.cadastro()}>Cadastre-se</Text></Text>     
               </View>
              
             </View>  
           </ImageBackground>
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
    backgroundColor: '#fff',
    marginTop: 20,
    width: '85%',
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: '#26397c',
    borderBottomWidth: 1,
  },
  btn:{
    backgroundColor: '#eab60f',
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

