import React, {Component} from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  TextInput,
  View, 
  TouchableOpacity,
  Image
} from 'react-native';
import Cabecalho from '../components/header';

const livros = [{nome: 'Alice no país das maravilhas', autor:'Lewis Carol', url: 'www.google.com/books'}, {nome: 'Coraline e o mundo secreto', autor:'Neil Gaiman', url: 'www.google.com/books'}, {nome: 'Harry Potter', autor:'Neil Gaiman', url: 'www.google.com/books'}];

class Lidos extends Component{
	render(){
		return(
        <Cabecalho navigation={this.props.navigation} pagina="Livros lidos" ativo="lidos">
                
                <View style={styles.Centro}>
                {livros.map((row)=>
                    <TouchableOpacity key={row.nome} >
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

