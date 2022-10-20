import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard} from 'react-native';
import api from "./src/services/api";


export default function App(){

  const [cep, setCep] = useState ("");
  const [cepBusca, setCepBusca] = useState(null);
  const inputref = useRef(null);

  async function buscar () {
    if(cep == ""){
      alert("Digite um CEP válido");
      setCep("");
      return;
    }

    try{
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      setCepBusca(response.data)
      Keyboard.dismiss();
    }catch(error){
      console.log("Error: " + error )
    }

  }

  function limpar () {
    setCep("");
    setCepBusca(null);
    inputref.current.focus()
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style ={{alignItems: "center"}}>
        <Text style={styles.titulo}>Digite o CEP desejado</Text>
        <TextInput 
        style={styles.txtInput} 
        placeholder="Ex:11436160"
        value={cep}
        onChangeText={(texto)=> setCep(texto)}
        keyboardType="numeric"
        ref={inputref}
        />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity 
        style={[styles.btnArea, {backgroundColor:"blue"}]}
        onPress={buscar}
        ><Text style={styles.btnText}>Buscar</Text></TouchableOpacity> 
        
        <TouchableOpacity 
        style={[styles.btnArea, {backgroundColor:"orange"}]}
        onPress={limpar}
        ><Text style={styles.btnText}>Limpar</Text></TouchableOpacity> 
      </View>

      {cepBusca && 
        <View style={styles.cepArea}>
          <Text style={styles.cepTxt}>CEP: {cepBusca.cep}</Text>
          <Text style={styles.cepTxt}>Logradouro: {cepBusca.logradouro}</Text>
          <Text style={styles.cepTxt}>Bairro: {cepBusca.bairro}</Text>
          <Text style={styles.cepTxt}>Cidade: {cepBusca.localidade}</Text>
          <Text style={styles.cepTxt}>Estado: {cepBusca.uf}</Text>        
        </View>
      }
      
      
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  titulo: {
    color:"black",
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:20
  },
  txtInput: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
    width:"90%",
    padding:5,
    backgroundColor:"#FFF",
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:5
  },
  btns: {
    flexDirection:"row",
    marginTop:15,
    width:400,
    justifyContent:"space-around"
    
  },
  btnArea: {
    padding: 12,
    borderRadius:5,
  },
  btnText: {
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    color:"white"
  },
  cepArea: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  cepTxt: {
    fontSize:25,
    fontWeight:"bold"
  },

});
