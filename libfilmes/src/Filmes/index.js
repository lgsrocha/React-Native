import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

class Filmes extends Component{
    render(){
        const {nome, foto, sinopse} = this.props.data;
        return(
            <View>

                <View style={styles.card}>     
                    <Text style={styles.titulo}>{nome}</Text>
                    <Image style={styles.capa}
                    source={{uri: foto}}
                    />

                    <View style={styles.btnArea}>
                        <TouchableOpacity style={styles.btn} onPress={()=> alert(nome + "\n" + sinopse)}>
                            <Text style={styles.btnTxt}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    card: {
        shadowColor:"#000",
        backgroundColor:"#fff",
        shadowOffset:{width:0, heitgh:1},
        shadowOpacity:0.8,
        margin: 15,
        shadowRadius:5,
        borderRadius:5,
        elevation:3
    },
    titulo: {
        fontSize: 18,
        padding: 15,
     },
    capa: {
        height:250,
        
     },

     btnArea:{ 
        alignItems:"flex-end",
        marginTop: -40,
        zInderx: 9
     },
     btn:{
        width:100,
        backgroundColor:"#09A6FF",
        opacity: 1,
        padding: 8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5

     },
     btnTxt:{
        textAlign:"center",
        color:"#fff"

     }
  
  })

export default Filmes;