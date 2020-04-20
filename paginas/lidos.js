import React, {Component} from 'react';
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';
import {StyleSheet,  Text,  TextInput,  View,   TouchableOpacity,  Image} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Cabecalho from '../components/header';
import { Rating, AirbnbRating } from 'react-native-elements';

const livros = [{nome: 'Alice no país das maravilhas', autor:'Lewis Carol', url: 'www.google.com/books', pagina: 2}, {nome: 'Coraline e o mundo secreto', autor:'Neil Gaiman', url: 'www.google.com/books', pagina:50}, {nome: 'Harry Potter', autor:'Neil Gaiman', url: 'www.google.com/books', pagina: 112}];

class Lidos extends Component{
  detalhes = () => {
     this.props.navigation.navigate('AndamentoDetalhe'); 
  }
  ratingCompleted =() =>{
  }
  render(){
    return(
        <Cabecalho navigation={this.props.navigation} ativo="lidos">
               <View style={[styles.Centro, {flexDirection: 'column'}]}>  
                <View style={[styles.Centro, {flexDirection: 'column'}]}>
                  <Image style={[styles.imagem]} source={require('../img/finished.png')}/>  
                  <Text style={{marginTop: 20, marginBottom:5, fontWeight:'bold', fontSize: 19, color: '#f2f2f2', textTransform: 'uppercase'}}>
                  Livros concluídos
                  </Text>
                  <Text style={{marginTop: 5, marginBottom:20, fontSize: 15, textAlign: 'center', color: '#f2f2f2'}}>
                  Acompanhe a todos os livros que vocẽ já leu e a sua opnião.
                  </Text>
                </View>
                <View style={{backgroundColor: '#ffffff50', width:'100%', borderTopRightRadius:20, borderTopLeftRadius:20}}>
                {livros.map((row)=>
                    <TouchableOpacity onPress={()=>this.detalhes()} key={row.nome} >
                     <View style={[styles.Centro, {flexDirection: 'column'}]}>  
                      <View style={[styles.cardLivro, {width: 320, minHeight: 120, flexDirection: 'row'}]}>
                       <View style={{marginLeft: 5, width:'100%'}}> 
                           <Text style={{fontWeight: 'bold', fontSize: 12, color:'#9f9178'}}>18/04/2020 14:20</Text>
                           <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center',  textTransform: 'uppercase', color:'#978a6f', marginTop: 5}}>{row.nome}</Text>
                           <Text style={{fontSize: 15, color:'#978a6f', textAlign: 'center'}}>{row.autor}</Text>
                          <Rating style={{marginTop: 10, marginRight: 'auto'}} imageSize={20}  startingValue={5}  tintColor='#f2f2f2' />
                        </View>
                      </View>
                      </View>
                    </TouchableOpacity>
                    )}
                </View>
            </View>
        </Cabecalho>      
   
      )
  }
}

export default Lidos;

const styles = StyleSheet.create({
  avatar:{
    width:100, 
    height:100,
    borderRadius: 50,
    borderColor: '#f1c099',
    borderWidth: 1,
  },
  Centro: {
    justifyContent: 'center',
    alignItems:'center',
  },
  imagem:{
    width: 250,
    height: 200,
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
});

