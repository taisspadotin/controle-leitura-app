import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Drawer, Left, Container, Header, Content, Body, Title, SwipeRow, Button} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View, 
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Detalhes extends Component{
	render(){
		return(
				<Container>
			    <Header  androidStatusBarColor="#000" style={{backgroundColor: '#13214d', alignItems: 'center'}}>
			      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',  width: '100%'}}>
              <Button transparent>
                <Icon name="arrow-left" onPress={()=>this.props.navigation.navigate('Desejo')} size={30} color="#fff" />
              </Button>
			          
              <Text style={[styles.titulo]}>Detalhes</Text>
			      </View>
			    </Header>
			          
			    <View style={styles.container}>
			      <View style={styles.Centro}>
					      <View style={styles.card}>
					        <Icon name="ellipsis-v" style={{alignSelf: 'flex-end'}} size={20} color="#000" />
					        <Text>Título:</Text>
					        <TextInput style={[styles.input]}  placeholder="insira o título do livro"/>
				                
				          <Text style={{marginTop:10}}>Autor:</Text>
				          <TextInput style={[styles.input]}  placeholder="insira o autor do livro"/>

	                <Text style={{marginTop:10}}>URL:</Text>
	                <TextInput style={[styles.input]}  placeholder="URL da loja do livro"/>
	                
	                <View style={[styles.Centro]}>
	                  <TouchableOpacity style={[styles.botao]}>
	                    <Text style={[styles.textobotao]}>Alterar</Text>
	                  </TouchableOpacity>
	                </View>  
				              
					      </View>
					    </View>

			  </View>
      
      </Container>
   
			)
	}
}

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
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
     fontSize: 15,
     color: '#fff', 
     textTransform: 'uppercase',
     marginLeft: 'auto',
     marginRight: 'auto',
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
  	marginTop: 10,
  	marginBottom: 10,
  	borderRadius: 5,
  	minHeight: 150,
  	paddingHorizontal: 10,
  	paddingVertical: 10,
  },
 
});

