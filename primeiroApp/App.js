import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from "react-native";
import {Picker} from "@react-native-community/picker"
import Slider from "@react-native-community/slider"

class App extends Component{

    // UseState sem hook
    constructor(props){
      super(props);
      this.state = {
        sexo: "Masculino",
        valor: 500,
        estudante: false,
        nome: "",
        idade: 0,

        
      }
    }

    limpaDados(){
      this.setState({sexo: "Masculino"})
      this.setState({valor: 500})
      this.setState({estudante: false})
      this.setState({nome: ""})
      this.setState({idade: 0})
      this.textNome.clear()
      this.textIdade.clear()
    }

    checkDados(){
      if(this.state.nome === ""){
        alert("Revise seu nome")}
          else if(this.state.idade < 18){
          alert("Você precisa ter mais de 18 Anos para abrir uma conta")
          } 
            else this.alertaOk()     
    }

    alertaOk(){
    alert("Sua conta foi Aberta!  \n" +
    "Nome: "+ this.state.nome +
    "\nIdade: "+ this.state.idade +
    "\nSexo: "+ this.state.sexo +
    "\nLimite: "+ this.state.valor.toFixed(2) +"R$"+
    (this.state.estudante ? "\nEstudante": "")
    )
    }


  render(){
    return(
    
      <View style={styles.container}>
        {/* Nome TextInput*/}
        <Text style={styles.titulo}>Banco React App</Text>
        

        <TextInput 
        style={styles.input} 
        ref={input => { this.textNome = input }}
        placeholder={"Digite seu nome aqui"}
        onChangeText={(nome)=> this.setState ({nome: nome})}
        ></TextInput>

        {/* Idade TextInput*/}
        <TextInput 
        style={styles.input} 
        keyboardType='numeric'
        ref={input => { this.textIdade = input }}
        placeholder={"Digite sua idade"}
        onChangeText={(idade) => this.setState ({idade: idade})}
        ></TextInput>

        {/* Sexo Picker */}
        <Picker
          style={styles.picker}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>

          <Picker.Item  key={1} value={"Masculino"} label="Masculino" />
          <Picker.Item  key={2} value={"Feminino"} label="Feminino" />
          <Picker.Item  key={3} value={"Prefiro não informar"} label="Prefiro não informar" />
        </Picker>

        {/* Estudante check Switch */}
        <View style={styles.switchArea}>

        <Text style={styles.switchText}> Estudante</Text>

        <Switch
        style={styles.switch}
        value={this.state.estudante}
        onValueChange={(estadoEstudante) => this.setState({estudante: estadoEstudante})}/>
        </View>

        {/* Limite Slider */}
        <Slider 
        style={styles.slider}
        minimumValue={500}
        maximumValue={10000}
        onValueChange={(valorSelecionado)=> this.setState({valor: valorSelecionado}) }
        value={this.state.valor}
        />
        <Text style={styles.sliderText}>Limite: {this.state.valor.toFixed(2)}R$</Text>


        {/* Botões Confirma e Cancela */}
        <View style={styles.rodape}>
        <TouchableOpacity
        style={styles.clear}
        onPress={() => this.limpaDados()}
        ><Text style={styles.rodapeTxt}>Limpar</Text></TouchableOpacity>

        <TouchableOpacity
        style={styles.ok}
        onPress={() => this.checkDados()}
        ><Text style={styles.rodapeTxt}>Abrir Conta</Text></TouchableOpacity>
        </View>

      </View>

    )
  }
}

export default App;

    // Estilos
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#82b74b",
  },

  titulo:{
    flex:1,
    fontWeight:"bold",
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: "center",
    color:"405d27",
    backgroundColor: "82b74b",
  },
  
  input:{
    flex:0.3,
    fontSize:15,
    color: "405d27",
    borderWidth:1,
    margin:5,
    padding:10,
  },

  picker:{
    flex:1,
    
  },

  slider:{
    flex:0.5,
  },

  sliderText:{
    flex:0.5,
    fontSize:17,
    fontWeight:"bold",
    textAlign:"center",
    color:"405d27"
  },

  switchArea:{
    flex:1,
    alignItems:"flex-start",
    flexDirection:"column",
  },

  switchText:{
    flex:1,
    fontSize: 17,
    fontWeight:"bold",
    justifyContent:"center",
    textAlign:"center",
    textAlignVertical:"center",
    color:"405d27",
  },

  switch:{
    flex:1,
  },

  rodape:{
    flexDirection:"row",
    flex:1,
  },

  clear:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  },

  ok:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  },

  rodapeTxt:{
    fontSize:17,
    fontWeight:"bold",
    borderWidth: 0.2,
    borderColor:"82b74b",
    borderRadius:5,
    padding:20,

  }

})

