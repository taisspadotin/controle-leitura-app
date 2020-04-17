import React, {Component} from 'react';
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';
import {StyleSheet,  Text,  TextInput,  View,   TouchableOpacity,  Image} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Cabecalho from '../components/header';


const livros = [{nome: 'Alice no país das maravilhas', autor:'Lewis Carol', url: 'www.google.com/books', pagina: 2}, {nome: 'Coraline e o mundo secreto', autor:'Neil Gaiman', url: 'www.google.com/books', pagina:50}, {nome: 'Harry Potter', autor:'Neil Gaiman', url: 'www.google.com/books', pagina: 112}];

class Andamento extends Component{
  detalhes = () => {
     this.props.navigation.navigate('AndamentoDetalhe'); 
  }
	render(){
		return(
				<Cabecalho navigation={this.props.navigation} pagina="Livros em Andamento" ativo="andamento">
				        <View style={styles.Centro}>
					      {livros.map((row)=>
			              <TouchableOpacity onPress={()=>this.detalhes()} key={row.nome} >
			              <View style={{flexDirection: 'row', marginTop: 10, marginBottom:10, marginLeft: 10, marginRight:10, alignItems:'center'}}>  
			                <View style={{width: '15%', zIndex: 10, elevation: 2}}>
			                  <Image style={[styles.avatar]} source={require('../alice.jpeg')}/>
			                </View>
			                <View style={[styles.cardLivro, {width: '85%', minHeight: 120}]}>
			                  <Text style={{fontWeight: 'bold', fontSize: 18, textTransform: 'uppercase'}}>{row.nome}</Text>
			                  <Text style={{fontSize: 15}}>{row.autor}</Text>
			                  <Text style={{fontSize: 15}}>Página: <Text style={{fontWeight: 'bold', color:'#c76728'}}>{row.pagina}</Text></Text>
			                </View>
			              </View>
			              </TouchableOpacity>
			              )}
					    </View>
        </Cabecalho>      
   
			)
	}
}

export default Andamento;

const styles = StyleSheet.create({
  avatar:{
    width:100, 
    height:100,
    borderRadius: 50,
    borderColor: '#dcdcdc20',
    borderWidth: 1,
  },
  Centro: {
    justifyContent: 'center',
    alignItems:'center',
  },
  cardLivro:{
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingLeft: 55,
    elevation: 2,
  },
});

