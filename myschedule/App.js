import { remove, set, ref, push, onValue, child, update} from 'firebase/database';
import React, {useState , useEffect, useRef} from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity, FlatList, Keyboard} from 'react-native';
import Feather from "react-native-vector-icons/Feather"

import Login from "./src/components/Login";
import TaskList from './src/components/TaskList';
import {database} from './src/services/firebaseConnection';


export default function App (){
  
  const [key, setKey] = useState("")
  const inputRef = useRef(null);
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  let tarefas = ref(database, "tarefas/"+ user)


//UseEffect como "ComponentdidMount" para manter a lista de tarefas atualizada e ler os Elementos da Lista
  useEffect(()=>{

    function getUser(){

      if(!user){
        return;
      }
      //Read
      onValue(tarefas, (snapshot) => {
        setTasks([]);
        snapshot?.forEach((childItem)=>{
          let data = {
            key: childItem.key,
            tarefa: childItem.val().tarefa
          }
          setTasks(oldTasks => [...oldTasks, data])
        })

      })

    }
    getUser()

  }
 ,[user])

//Delete
  function handleDelete(key){
    remove(child(tarefas, key))
    .then(() => {
      const findTasks = tasks.filter(item=> item.key !== key)
      setTasks(findTasks)
  })
 }

 //Update muda o UseState da Key mudando a função do botão +
  function handleEdit(data){
    setKey(data.key);
    setNewTask(data.tarefa);
    inputRef.current.focus();

  }

  function cancelEdit(){
    Keyboard.dismiss();
    setKey("")
    setNewTask("")
  }

  function handleAdd(){
    if(newTask === ""){
      return;
    }

// ----> com a Key alterada o código abaixo roda Editando a tarefa

    if(key !== ""){
      update(child(tarefas,`/${key}`),{tarefa: newTask})
      .then(()=>{
        console.log("atualizei")
      })
      Keyboard.dismiss()
      setNewTask("");
      setKey("");
      return;
    }
   
   //Create 
   let chave = push(tarefas)
  
   console.log(tarefas + "/n"+ chave)
   set(chave, {tarefa:newTask})
   .then(()=> {
    const data= {
      key: chave,
      tarefa: newTask
    };

   })

   Keyboard.dismiss();
   setNewTask("");

  }

  if(!user){
    return <Login changeStatus = {(user) => setUser(user)}/>
  }
    return (
      <SafeAreaView style={styles.container}>

        {key.length > 0 && (
          <View style={{flexDirection:"row", marginBottom:8}}>
          <TouchableOpacity onPress={cancelEdit}>
            <Feather name="x-circle" size={20} color="#FF0000"/>
          </TouchableOpacity>
          <Text style={{marginLeft:5, color:"#FF0000"}}>
            Você está editando!
          </Text>
        </View>
        )}

        <View style={styles.containerTask}>
          <TextInput
          style={styles.input}
          placeholder='Sua próxima tarefa'
          value={newTask}
          onChangeText={(text)=> setNewTask(text)}
          ref={inputRef}
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
            <Text style={styles.buttonTxt}>+</Text>
          </TouchableOpacity>
        
        </View>

        <FlatList
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (

          <TaskList data={item} itemDelete={handleDelete} itemEdit={handleEdit}/>

        )}
        />

        </SafeAreaView>
     
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:25,
    paddingHorizontal: 10,
    backgroundColor:"#f2f6fc",
  },
  containerTask:{
    flexDirection:"row"
  },
  input:{
    flex:1,
    marginBottom:10,
    padding:10,
    backgroundColor:"#fff",
    borderRadius:4,
    borderWidth:1,
    borderColor:"#141414",
    height:45
  },
  buttonAdd:{
    backgroundColor: "#141414",
    height: 45,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:5,
    paddingHorizontal:14,
    borderRadius:4
  },
  buttonTxt:{
    color:"white",
    fontSize:30
  }
});