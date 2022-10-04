import react, { useState } from "react";
import { View,Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";


  export default function Home(){

      let [ Valor, setValor  ] = useState();
      let [ msg, setMsg] = useState('');

      function Calcular(){
          let resto = Valor % 2;     

        if (resto == 0) {
         setMsg("Par");
        
        }
        else{
          setMsg("Impar ");
        };

      }


    return(
      <View style={styles.container}>

          <Text style={styles.Titulo}> Digite um  número </Text>
          
          <TextInput onChangeText={setValor} style={styles.campo} />

          <TouchableOpacity style={styles.Button} onPress={Calcular}>
            <Text>Calcular</Text>
          </TouchableOpacity>

          <Text style={styles.Resultado} >Resultado: {msg}</Text>

      </View>

    );
  }



const styles= StyleSheet.create({



    container:{

        flex:1, 
        backgroundColor:'#30478C', 
        paddingVertical: 70,
        paddingHorizontal: 20
    },

     Titulo:{
       fontSize:28,
       fontWeight: 'bold', 
       marginBottom:10, 
       color: '#FFD700'
     

     },     
  Resultado :{
      fontSize:28,
      fontWeight: 'bold', 
      marginBottom:10, 
      color: '#DC143C'
},
  campo:{
    backgroundColor: '#1F1E25', 
    color: '#fff',
    fontSize: 18, 
    marginTop: 30,
    borderWidth: 7, 
    padding: 15


  },
  Button:{
      backgroundColor: '#A370F7',
      padding: 15, 
      borderRadius: 7,
      alignItems: 'center', 
      marginTop:20
  },

     ButtonText:{
         color: '#fff', 
         fontSize:17, 
         fontWeight: 'bold'
            }
}); 

