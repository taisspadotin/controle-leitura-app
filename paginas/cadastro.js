import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Cadastro extends Component{
	render(){
		return(
				<Container>
        <View style={styles.container}>
        <ScrollView>
              <View style={[styles.Centro]}>
                <Image style={[styles.imagem]} source={require('../img/register.png')}/>
  			    		<Text style={{color: '#fff', fontWeight: 'bold', marginTop:20, fontSize:18}}>REGISTRE-SE</Text>
                <Text style={{color: '#fff', marginTop:10}}>Se cadastre para ter o melhor controle da sua leitura</Text>
              </View>
              <View style={[styles.card, {marginTop:30}]}>
			    			<Text style={[styles.label]}>Usuário:</Text>
			    			<TextInput style={[styles.input]} placeholder="usename"/>

			    			<Text style={[styles.label]}>Email:</Text>
			    			<TextInput style={[styles.input]} placeholder="mail@mail.com"/>

			    			<Text style={[styles.label]}>Senha:</Text>
			    			<TextInput style={[styles.input]} placeholder="********"/>

			    			<TouchableOpacity style={[styles.botao]}>
			    				<Text style={[styles.textobotao], {color:'#fff', fontWeight: 'bold'}}>CADASTRAR</Text>
			    			</TouchableOpacity>

			    		</View>
              </ScrollView>
			    	</View>
			    </Container>
			)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#8cac9a',
  },
  imagem:{
    marginTop: 20,
    width:130, 
    height:140,
  },
  label:{
    color: '#4e6e5b', 
    fontSize: 16, 
    fontWeight: 'bold',
    marginTop: 30,
  },
  botao: {
    backgroundColor: '#efbe74',
    width: 150,
    textAlign: 'center',
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
    height: 50,
    width: '100%',
    textAlign:'center',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:20,
    borderRadius: 50,
  },
  textobotao:{
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
    backgroundColor: '#f2f2f210',
    borderColor: '#3f3d56',
    borderBottomWidth: 1,
    color: '#fff',
    marginTop: 10,
    height: 40,
    paddingHorizontal: 15,
  },
  card: {
  	backgroundColor: '#f2f2f2', 
    paddingHorizontal: 20, 
    borderTopRightRadius: 50, 
    borderBottomRightRadius: 50,
    marginRight:15,
    paddingBottom:20,
  },
 
});

