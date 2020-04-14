import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View, 
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Left, Container, Header, Content, Body, Title} from 'native-base';
import { Card, ListItem } from 'react-native-elements'

class SideBar extends Component {
    
    
    render(){
        return (
          <View style={[ styles.container, { backgroundColor: '#fff' } ]}>
            <Text>
              <Icon name="rocket" size={30} color="#900" />
              Conteúdo side bar
            </Text>
          </View>
        );
    } 
};
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component<{}> {
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
          <Left style={[styles.cabecalho,{width:'20%'}]}>
             <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#fff" />
          </Left>
          <Body>
              <Text style={[styles.titulo]}>Livros para comprar</Text>
          </Body>
        </Header>
          
          <View style={styles.container}>
            
            <View style={[styles.tituloCard, {marginTop: 20}]}>
                <Text style={{textAlign: 'center', color:'#DCDCDC', fontWeight: '400', fontSize: 16, textTransform: 'uppercase'}}>Adicionar novo livro</Text>
            </View>
             <View style={[styles.card]}>
                <Text>Título:</Text>
                <TextInput style={[styles.input]}  placeholder="insira o título do livro"/>
                
                <Text style={{marginTop:10}}>Autor:</Text>
                <TextInput style={[styles.input]}  placeholder="insira o autor do livro"/>
                
                <View style={[styles.Centro]}>
                  <TouchableOpacity style={[styles.botao]}>
                    <Text style={[styles.textobotao]}>Adicionar</Text>
                  </TouchableOpacity>
                </View>  
              </View>
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
  cabecalho: {
    paddingTop: 10,
    backgroundColor: '#13214d',
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
    backgroundColor: '#13214d',
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
  input: {
    backgroundColor: '#f7f7f7',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    height: 40,
    paddingHorizontal: 15,
  }
 
});

