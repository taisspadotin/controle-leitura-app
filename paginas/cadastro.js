import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Cadastro extends Component{
	render(){
		return(
				<Container>
			        <Header  androidStatusBarColor="#000" style={{backgroundColor: '#13214d', alignItems: 'center'}}>
			      	  <Body>
			              <Text style={[styles.titulo]}>Cadastro</Text>
			            </Body>
			        </Header>
			          
			        <View style={styles.container}>
			    		<View style={[styles.card]}>
			    			<Text>Usuário:</Text>
			    			<TextInput style={[styles.input]} placeholder="usename"/>

			    			<Text style={{marginTop: 20}}>Email:</Text>
			    			<TextInput style={[styles.input]} placeholder="mail@mail.com"/>

			    			<Text style={{marginTop: 20}}>Senha:</Text>
			    			<TextInput style={[styles.input]} placeholder="********"/>

			    			<TouchableOpacity style={[styles.botao]}>
			    				<Text>CADASTRAR</Text>
			    			</TouchableOpacity>

			    		</View>
			    	</View>
			    </Container>
			)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26397c',
  },
  cabecalho: {
    paddingTop: 0,
    backgroundColor: '#13214d',
  },
  avatar:{
    width:100, 
    height:100,
    borderRadius: 50,
    borderColor: '#dcdcdc20',
    borderWidth: 1,
  },
  titulo: {
     textAlign: 'center',
     fontSize: 15,
     color: '#fff', 
     paddingTop: 12,
     width: '100%',
     textTransform: 'uppercase',
     marginEnd: 5,
     paddingBottom: 10,
    
  },
  botao: {
    backgroundColor: '#c76728',
    width: 150,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5,
    height: 40,
    width: '100%',
    textAlign:'center',
    justifyContent: 'center',
    alignItems:'center',

  },
  Centro: {
    justifyContent: 'center',
    alignItems:'center',
  },
  textobotao:{
    color: '#DCDCDC',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#f7f7f7',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    height: 40,
    paddingHorizontal: 15,
  },
  card: {
  	backgroundColor: '#fff',
  	width: '90%',
  	marginTop: 20,
  	marginBottom: 10,
  	borderRadius: 5,
  	minHeight: 150,
  	paddingHorizontal: 10,
  	paddingVertical: 20,
  },
 
});

