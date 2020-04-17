import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View, 
  TouchableOpacity,
  Image
} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Cabecalho from '../components/header';


const livros = [{nome: 'Alice no país das maravilhas', autor:'Lewis Carol', url: 'www.google.com/books'}, {nome: 'Coraline e o mundo secreto', autor:'Neil Gaiman', url: 'www.google.com/books'}, {nome: 'Harry Potter', autor:'Neil Gaiman', url: 'www.google.com/books'}];

export default class Desejo extends Component<{}> {
   detalheLivro({navigation}){
  	this.props.navigation.navigate('Detalhes');
  }
  render() {
    return (
      <Cabecalho navigation={this.props.navigation} pagina="Livros para comprar" ativo="desejo">

            <View style={[styles.tituloCard, {marginTop: 20}]}>
                <Text style={{textAlign: 'center', color:'#DCDCDC', fontWeight: '400', fontSize: 16, textTransform: 'uppercase'}}>Adicionar novo livro</Text>
            </View>
             <View style={[styles.card]}>
                <Text>Título:</Text>
                <TextInput style={[styles.input]}  placeholder="insira o título do livro"/>
                
                <Text style={{marginTop:10}}>Autor:</Text>
                <TextInput style={[styles.input]}  placeholder="insira o autor do livro"/>

                <Text style={{marginTop:10}}>URL:</Text>
                <TextInput style={[styles.input]}  placeholder="URL da loja do livro"/>
                
                <View style={[styles.Centro]}>
                  <TouchableOpacity style={[styles.botao]}>
                    <Text style={[styles.textobotao]}>Adicionar</Text>
                  </TouchableOpacity>
                </View>  
              </View>
              {livros.map((row)=>
              <TouchableOpacity key={row.nome} onPress={() => this.detalheLivro(row.nome) }>
              <View style={{flexDirection: 'row', marginTop: 10, marginBottom:10, marginLeft: 10, marginRight:10, alignItems:'center'}}>  
                <View style={{width: '15%', zIndex: 10, elevation: 2}}>
                  <Image style={[styles.avatar]} source={require('../alice.jpeg')}/>
                </View>
                <View style={[styles.cardLivro, {width: '85%', minHeight: 120}]}>
                  <Text style={{fontWeight: 'bold', fontSize: 18, textTransform: 'uppercase'}}>{row.nome}</Text>
                  <Text style={{fontSize: 15}}>{row.autor}</Text>
                  <Text style={{fontSize: 15, color: '#c76728', textDecorationLine: 'underline'}}>{row.url}</Text>
                </View>
              </View>
              </TouchableOpacity>
              )}
           
      </Cabecalho>
    );
  }
}


const styles = StyleSheet.create({
  avatar:{
    width:100, 
    height:100,
    borderRadius: 50,
    borderColor: '#dcdcdc20',
    borderWidth: 1,
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
  tituloCard:{
    backgroundColor: '#13214d',
    marginLeft: 10,
    borderColor: '#13214d',
    borderWidth: 1,
    color: '#fff',
    borderBottomWidth: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card:{
    backgroundColor: '#fff',
    borderColor: '#13214d',
    borderWidth: 1,
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    
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
  input: {
    backgroundColor: '#f7f7f7',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    height: 40,
    paddingHorizontal: 15,
  },
});

