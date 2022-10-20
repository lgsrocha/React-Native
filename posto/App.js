import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal } from "react-native";
import Resultado from "./src/Resultado.js"

class App extends Component{

  // UseState sem hook
  constructor(props){
    super(props);
    this.state = {
      alcool: 0,
      gasolina: 0,
      modalVisible: false,
    }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.gas = this.gas.bind(this);

  }

  show(){
    this.setState({modalVisible:true})
  }

  hide(visible){
    this.setState({modalVisible: visible})
  }

  gas(){
    this.state.gasolina
  }



  render(){
    return (
      <View style={styles.container}>
        
        <View style={styles.logoArea}>
        <Image
        style={styles.logo}
        source={require("./src/img/logo.png")}
        />

        <Text style={styles.titulo}>Qual melhor opção?</Text>
        </View>

        <View style={styles.inputArea}>

        <Text style={styles.txtInput}>Álcool (preço por litro):</Text>

        <TextInput style={styles.input}
        keyboardType='numeric' 
        placeholder={"Valor do Álcool"}
        onChangeText={(valorAlcool) => this.setState({alcool: valorAlcool})}
        />

        <Text style={styles.txtInput}>Gasolina (preço por litro):</Text>

        <TextInput style={styles.input}
        keyboardType='numeric'
        placeholder={"Valor da Gasolina"}
        onChangeText={(gasolina) => this.setState({gasolina: gasolina})}
        />
        
        <TouchableOpacity style={styles.btn}
        onPress={()=> {this.state.alcool && this.state.gasolina !== 0 ? this.show() : alert("favor preencher os campos")}}
        >
          <Text style={styles.btnTxt}>Calcular</Text>
        </TouchableOpacity>
        </View>

          <Modal animationType="slide"
          visible={this.state.modalVisible}>
            <Resultado 
            fechar={() => this.hide(false)}
            gas={this.state.gasolina} 
            alc={this.state.alcool}/>
          </Modal>

      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#292929"
  },
  logoArea:{
    padding:40,
    flex:0.5,
    justifyContent:"center",
    alignItems:"center",
  },
  titulo:{
    fontWeight:'bold',
    color:"white",
    fontSize:30,
    marginTop:20,
  },
  inputArea:{
    flex:0.5,
    padding: 10,
    
  },
  txtInput:{
    fontWeight:"bold",
    color:"white",
    fontSize:18,
    paddingTop:10,
    paddingBottom:8
  },
  input:{
    backgroundColor:"white",
    borderRadius:5,
    
  },
  btn:{
    flex:0.5,
    marginTop:15,
    backgroundColor:"#ff4f00",
    borderRadius:5,
    
  },
  btnTxt:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:5,
    borderRadius:5,
    
  },
  
})