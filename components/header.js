import React, { Component } from 'react';
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
import {Drawer, Left, Container, Header, Content, Body, Title, Right, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { Card, ListItem } from 'react-native-elements'
//import Routes from './routes';


class SideBar extends Component {
  andamento(){
    this.props.navigation.navigate('Andamento');
  }  
  sair(){
    this.props.navigation.navigate('Login');
  }
  lidos(){
    this.props.navigation.navigate('Lidos');
  }
  perfil(){
    this.props.navigation.navigate('Perfil');
  }
  desejo(){
    this.props.navigation.navigate('Desejo');
  }  
    render(){
      const ativo = this.props.ativo;
        return (
          <View style={[ styles.container, { backgroundColor: '#3f3d56' } ]}>
            <View style={[styles.cabecalhoMenu]}>
              <Image style={[styles.avatar]} source={require('../img/avatar.png')}/>
              <View style={{flexDirection: 'column', paddingTop: 30, paddingLeft: 10}}>
                <Text style={{color: '#dcdcdc'}}>HELLO</Text>
                <Text style={{color: '#dcdcdc', fontWeight: 'bold', fontSize:17}}>UserName</Text>
              </View>
            </View>
            
            <TouchableOpacity onPress={()=> this.perfil()} style={{backgroundColor: ativo === "perfil" ? '#dcdcdc20' : 'none'}}>
              <View style={[styles.blocoMenu]}>
                <Icon name="user" size={30} color="#DCDCDC" />
                <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                  Perfil
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> this.desejo()} style={{backgroundColor: ativo === "desejo" ? '#dcdcdc20' : 'none'}}>
            <View style={[styles.blocoMenu]}>
              <Icon name="heart" size={30} color="#DCDCDC" />
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Lista de desejos
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=> this.andamento()} style={{backgroundColor: ativo === "andamento" ? '#dcdcdc20' : 'none'}}>
            <View style={[styles.blocoMenu]}>
              <Icon name="bookmark" size={30}  color="#DCDCDC"/>
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Livros em andamento
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.lidos()} style={{backgroundColor: ativo === "lidos" ? '#dcdcdc20' : 'none'}}>
            <View style={[styles.blocoMenu]}>
              <Icon name="book" size={30} color="#DCDCDC" />
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Livros lidos
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=> this.sair()}>
            <View style={[styles.blocoMenu]} >
              <Icon name="sign-out" size={30} color="#DCDCDC"/>
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Sair
              </Text>
            </View>
            </TouchableOpacity>

          </View>
        );
    } 
};

const livros = [{nome: 'Alice no país das maravilhas', autor:'Lewis Carol', url: 'www.google.com/books'}, {nome: 'Coraline e o mundo secreto', autor:'Neil Gaiman', url: 'www.google.com/books'}, {nome: 'Harry Potter', autor:'Neil Gaiman', url: 'www.google.com/books'}];
export default class Cabecalho extends Component<{}> {
  componentDidMount(){
    state={};
  }
  closeDrawer = () => {
      this.drawer._root.close()
  };
  openDrawer = () => {
      this.drawer._root.open()
  };    
  detalheLivro({navigation}){
    this.props.navigation.navigate('Detalhes');
  }
  render() {
    return (
      <>
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigation={this.props.navigation} navigator={this.navigator} ativo={this.props.ativo}/>}
        onClose={() => this.closeDrawer()}
        >
        
        <Container>
        <Header  androidStatusBarColor="#000" style={{backgroundColor: '#697e95'}}>
         
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',  width: '100%'}}>
            <Button transparent>
             <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#fff" />
            </Button>

            <Text style={[styles.titulo]}>{this.props.pagina}</Text>
              
           </View>
        </Header>
          
        <View style={[styles.container, {backgroundColor: this.props.fundo !== undefined ? this.props.fundo : '#697e95'}]}>
          <ScrollView>
            {this.props.children}
          </ScrollView>  
        </View>
         
        </Container>
      </Drawer>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#26397c',
  },
  cabecalhoMenu:{
    borderBottomWidth: 1,
    //flex: 1,
    flexDirection: 'row',
    borderColor: '#dcdcdc20',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 20,
    
  },
  cabecalho: {
    paddingTop: 0,
    backgroundColor: '#13214d',
    //width: '50%',
    //backgroundColor: 'red',
  },
  avatar:{
    width:100, 
    height:100,
    borderRadius: 50,
    borderColor: '#dcdcdc20',
    borderWidth: 1,
  },
  blocoMenu:{
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 5,
    alignItems:'center',
    flexDirection: 'row',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
  bolinha:{
    backgroundColor: '#13214d',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    //position:'absolute',
    bottom: 0,
    marginBottom: 10,
    right: 10,

  },
  ativo:{
    backgroundColor: '#DCDCDC20',
    
  },
 
});

