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
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';


class SideBar extends Component {
    
    
    render(){
        return (
          <View style={[ styles.container, { backgroundColor: '#1a2f58' } ]}>
            <View style={[styles.cabecalhoMenu]}>
              <Image style={[styles.avatar]} source={require('../avatar.png')}/>
              <View style={{flexDirection: 'column', paddingTop: 30, paddingLeft: 10}}>
                <Text style={{color: '#dcdcdc'}}>HELLO</Text>
                <Text style={{color: '#dcdcdc', fontWeight: 'bold', fontSize:17}}>UserName</Text>
              </View>
            </View>
            
            <TouchableOpacity>
              <View style={[styles.blocoMenu]}>
                <Icon name="user" size={30} color="#DCDCDC" />
                <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                  Perfil
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={[styles.blocoMenu]}>
              <Icon name="heart" size={30} color="#DCDCDC" />
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Lista de desejos
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity >
            <View style={[styles.blocoMenu]}>
              <Icon name="bookmark" size={30} color="#DCDCDC" />
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Livros em andamento
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={[styles.blocoMenu]}>
              <Icon name="book" size={30} color="#DCDCDC" />
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Livros lidos
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={[styles.blocoMenu]}>
              <Icon name="sign-out" size={30} color="#DCDCDC" />
              <Text style={{color: '#dcdcdc', textTransform: 'uppercase', textAlign: 'center', paddingLeft: 20}}>
                Sair
              </Text>
            </View>
            </TouchableOpacity>

          </View>
        );
    } 
};

export default class Desejo extends Component<{}> {
  componentDidMount(){
    state={};
  }
  closeDrawer = () => {
      this.drawer._root.close()
  };
  openDrawer = () => {
      this.drawer._root.open()
  };    
  render() {
    return (
      <>
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
        >
        
        <Container>
        <Header  androidStatusBarColor="#000" style={{backgroundColor: '#13214d'}}>
      
          <Left style={[styles.cabecalho]}>
             <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#fff" />
          </Left>
          <Body>
              <Text style={[styles.titulo]}>Livros para comprar</Text>
          </Body>
        </Header>
          
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
     textAlign: 'center',
     fontSize: 15,
     color: '#fff', 
     paddingTop: 12,
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
 
});
