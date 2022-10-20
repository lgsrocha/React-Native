import React, {Component} from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList, Text} from "react-native";

import api from "./src/services/api.js"
import Filmes from "./src/Filmes"

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      filmes: [],
      loading: true
    };
  }

  async componentDidMount(){
    const response = await api.get("r-api/?api=filmes");
    this.setState({
      filmes: response.data,
      loading: false
    })
  }

  render(){

    if(this.state.loading){
      return(
      <View style= {styles.loading}>
        <ActivityIndicator color="#09A6FF" size={40}/>
        <Text>Carregando ...</Text>
      </View>
      )

    }else{
      return(

        <View style= {styles.container}>
          <FlatList 
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
    )
    }

   
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  loading: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },

})