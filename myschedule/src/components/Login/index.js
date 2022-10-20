import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

import { auth } from '../../services/firebaseConnection';

export default function Login ({ changeStatus }){
    const [type, setType] = useState("login")
    const[email, setEmail] = useState("")
    const[pass, setPass] = useState("")


// Login with simple email and password Auth
    function handleLogin (){
        if(type ==="login"){
            
            signInWithEmailAndPassword(auth,email,pass)
            .then((user) => {
                changeStatus(user.user.uid)
            })
            .catch((err)=>{
                console.log(err);
                alert("Ops parece que deu algum erro.");
            })
            return;
            
        }else{
            
            createUserWithEmailAndPassword(auth, email,pass)
            .then((user)=> {
                changeStatus(user.user.uid)
            })
            .catch((err)=>{
                console.log(err);
                alert("Ops parece que deu algum erro.");
            })
            return;
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        
      <TextInput
        placeholder='Digite seu E-mail'
        style={styles.input}
        value={email}
        onChangeText={(texto)=> setEmail(texto) }
      />

      <TextInput
        placeholder='Digite sua senha'
        style={styles.input}
        value={pass}
        onChangeText={(texto)=> setPass(texto) }
      />

      <TouchableOpacity 
        style={styles.handleLogin}
        onPress={handleLogin}
        >
        <Text style={styles.loginTxt}>{type === "login" ? "Acessar" : "Cadastrar"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setType(type => type === "login" ? "cadastrar" : "login" )}>
        <Text style={{textAlign:"center", fontSize:17}}>{type === "login" ? "Criar conta" : "Já Possuo uma conta"}</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:40,
    paddingHorizontal: 10,
    backgroundColor:"#f2f6fc",
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#141414",
    borderWidth:1,
    height:45,
    padding:10
  },
  container: {
    flex:1,
    paddingTop:40,
    paddingHorizontal: 10,
    backgroundColor:"#f2f6fc",
  },
  handleLogin:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#141414",
    height:45,
    marginBottom:10,
  },
  loginTxt:{
    color:"white",
    fontSize:17
  }

});