import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

class Resultado extends Component {


    result = this.props.alc / this.props.gas;
   

    render() {
        return (
            <View style={styles.container}>
            
            <View style={styles.logoArea}>
            <Image
            style={styles.logo}
            source={require("../src/img/gas.png")}
            />

            <Text style={styles.titulo}>A melhor opção é: {this.result < 0.7 ? "Álcool" : "Gasolina"}</Text>
            </View>

            <View style={styles.infoArea}>
            <Text style={styles.infoTitle}>Com os preços:</Text>
            <Text style={styles.info}>Álcool: R$ {this.props.alc}</Text>
            <Text style={styles.info}>Gasolina: R$ {this.props.gas}</Text>

            <TouchableOpacity style={styles.btnArea} onPress={this.props.fechar}>
              <Text style={styles.btnTxt}>
                Calcular novamente
              </Text>
            </TouchableOpacity>

            </View>

            

            </View>
        );
    }
}

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
        color:"#ffff00",
        fontSize:30,
        marginTop:20,
      },
      infoArea:{
        justifyContent:"center",
        alignItems: "center",
        marginTop: -15
      },
      infoTitle:{
        fontWeight:'bold',
        color:"white",
        fontSize:20,
      },
      info:{
        color:"white",
        fontSize:15,
        marginTop:5
      },
      btnArea:{
        paddingHorizontal:30,
        paddingVertical:5,
        margin:25,
        borderWidth:2,
        borderRadius:5,
        borderColor:"#ff4f00"
      },
      btnTxt:{
        color:"#ff4f00",
        fontWeight:"bold",
        
    },
})

export default Resultado;