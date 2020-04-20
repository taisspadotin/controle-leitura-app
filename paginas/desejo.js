import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View, 
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Cabecalho from '../components/header';
import {Tabs, Tab} from 'native-base';

const livros = [{nome: 'Alice no país das maravilhas', autor:'Lewis Carol', url: 'www.google.com/books'}, {nome: 'Coraline e o mundo secreto', autor:'Neil Gaiman', url: 'www.google.com/books'}, {nome: 'Harry Potter', autor:'Neil Gaiman', url: 'www.google.com/books'}];

class Tab1 extends Component{
render(){
  return(
    <View style={{marginTop:40}}>
                {/*<View style={[styles.Centro]}>
                  <Image style={[styles.imagem]} source={require('../img/desire.png')}/>
                  <Text style={{textAlign: 'center', color:'#fff', fontWeight: 'bold', fontSize: 18, textTransform: 'uppercase', marginBottom:10}}>Adicionar novo livro</Text>
                  <Text style={{marginTop: 5, marginBottom:20, fontSize: 15, textAlign: 'center', color: '#f2f2f2'}}>
                  Acompanhe a todos os livros que vocẽ já leu e a sua opnião.
                  </Text>
                </View>*/}
              
                <View style={[styles.card]}>
                <Text style={[styles.label, {marginTop:20}]}>Título:</Text>
                <TextInput style={[styles.input]}  placeholder="insira o título do livro"/>
                
                <Text style={[styles.label]}>Autor:</Text>
                <TextInput style={[styles.input]}  placeholder="insira o autor do livro"/>

                <Text style={[styles.label]}>URL:</Text>
                <TextInput style={[styles.input]}  placeholder="URL da loja do livro"/>
                
                <View style={[styles.Centro]}>
                  <TouchableOpacity style={[styles.botao, {marginTop:50, flexDirection:'row'}]}>
                    <Text style={[styles.textobotao]}>Adicionar </Text>
                    <Icon name="heart" style={{marginLeft: 10}} size={15} color="#fff" />
                  </TouchableOpacity>
              </View>
             
              </View> 
    </View>
    )
}
}
class Tab2 extends Component{
detalheLivro(){
    this.props.navigation.navigate('Detalhes');
  }
render(){
  return(
    <View>
    
              {livros.map((row)=>
             
             <TouchableOpacity onPress={()=>this.detalheLivro()} key={row.nome} >
                     <View style={[styles.Centro, {flexDirection: 'column'}]}>  
                      <View style={[styles.cardLivro, {width: 320, minHeight: 120, flexDirection: 'row'}]}>
                       <View style={{marginLeft: 5, width:'100%'}}> 
                           <Text style={{fontWeight: 'bold', fontSize: 12, color:'#9f9178'}}>18/04/2020 14:20</Text>
                           <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center',  textTransform: 'uppercase', color:'#978a6f', marginTop: 5}}>{row.nome}</Text>
                           <Text style={{fontSize: 15, color:'#978a6f', textAlign: 'center'}}>{row.autor}</Text>
                            
                        </View>
                      </View>
                      </View>
                    </TouchableOpacity>
              )}
           
            </View>
    )
}
}
export default class Desejo extends Component<{}> {
   
  render() {
    return (
      <Cabecalho navigation={this.props.navigation} ativo="desejo" fundo='#8ca3b2'>
            <Tabs >
                <Tab style={{backgroundColor: '#8ca3b2'}} tabStyle={{backgroundColor: '#697e95'}} activeTabStyle={{backgroundColor: '#3f3d56'}} heading="NOVO" activeTextStyle={{color: '#fff', fontWeight:'bold'}} textStyle={{color:'#dcdcdc', fontWeight:'bold'}}>
                  <Tab1 navigation={this.props.navigation} /> 
                </Tab>
                <Tab style={{backgroundColor:'#8ca3b2'}} tabStyle={{backgroundColor: '#697e95'}} activeTabStyle={{backgroundColor: '#3f3d56'}} heading="LISTA" activeTextStyle={{color: '#fff', fontWeight:'bold'}} textStyle={{color:'#dcdcdc', fontWeight:'bold'}}>
                  <Tab2 navigation={this.props.navigation} />
                </Tab>
            </Tabs>
            
           
      </Cabecalho>
    );
  }
}


const styles = StyleSheet.create({
  avatar:{
    width:100, 
    height:100,
    borderRadius: 50,
    borderColor: '#8b6f57',
    borderWidth: 1,
  },
    imagem:{
    width: 150,
    height: 100,
  },
  botao: {
    backgroundColor: '#ff6584',
    width: 150,
    textAlign: 'center',
    color: '#fff',
    //borderRadius: 5,
    marginTop: 15,
    marginBottom: 5,
    height: 50,
    width: '100%',
    textAlign:'center',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 50,

  },
  label:{
    color: '#697e95', 
    fontSize: 16, 
    fontWeight: 'bold',
    marginTop: 30,
  },
  Centro: {
    justifyContent: 'center',
    alignItems:'center',
  },
  textobotao:{
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
cardLivro:{
    backgroundColor: '#f2f2f2',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    //paddingLeft: 55,
    //elevation: 2,
  },
  input: {
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
  card:{
    backgroundColor: '#f2f2f2', 
    paddingHorizontal: 20, 
    borderTopRightRadius: 50, 
    borderBottomRightRadius: 50,
    marginRight:15,
    paddingBottom:20,
  },
});

