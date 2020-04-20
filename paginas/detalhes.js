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
			    <Header  androidStatusBarColor="#000" style={[ styles.cabecalho, {alignItems: 'center'}]}>
			      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',  width: '100%'}}>
              <Button transparent>
                <Icon name="arrow-left" onPress={()=>this.props.navigation.navigate('Desejo')} size={30} color="#fff" />
              </Button>
			      </View>
			    </Header>
			          
			    <View style={styles.container}>
			      <View style={[styles.card, {marginTop:50}]}>
					        {/*<Icon name="ellipsis-v" style={{alignSelf: 'flex-end'}} size={20} color="#000" />*/}
					        
                  <Text style={[styles.label]}>Título:</Text>
					        <TextInput style={[styles.input]}  placeholder="insira o título do livro"/>
				                
				          <Text style={[styles.label]}>Autor:</Text>
				          <TextInput style={[styles.input]}  placeholder="insira o autor do livro"/>

	                <Text style={[styles.label]}>URL:</Text>
	                <TextInput style={[styles.input]}  placeholder="URL da loja do livro"/>
	                
	                <View style={[styles.Centro]}>
	                  <TouchableOpacity style={[styles.botao, {marginTop:40}]}>
	                    <Text style={[styles.textobotao]}>Alterar</Text>
	                  </TouchableOpacity>
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
    backgroundColor: '#697e95',
  },
  cabecalho: {
    paddingTop: 0,
    backgroundColor: '#697e95',
  },
  label:{
    color: '#697e95', 
    fontSize: 16, 
    fontWeight: 'bold',
    marginTop: 30,
  },
  botao: {
    backgroundColor: '#ff6584',
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
    borderRadius: 50,
  },
  Centro: {
    justifyContent: 'center',
    alignItems:'center',
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
  textobotao:{
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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

