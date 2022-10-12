import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, StyleSheet,Text, Button, Pressable } from "react-native";
import { useAuth } from "../../../hooks/auth";
import { Feather } from '@expo/vector-icons'; 

interface navigatiorPros{
  navigate:(string:string,screen:{screen:string}) => (string);
  setOptions?:({})=>void
}
interface PropsInfoUser{
  user:any
}

export default function InfoContainer({user}:PropsInfoUser){

  const navigation :navigatiorPros= useNavigation()
  function handleGetSponsor(){
    
    navigation.navigate("Sponsor",{screen:"Sponsor"})
  }
  return(
    <View style={style.container}>
      <View style={style.styleTextContainer}>
        <Text style={style.textName}>{user.name} </Text>
          <Text>
            {user.description}
        </Text>
      </View>

      <View style={style.containerButons}>
        <Pressable style={style.buttonColab} >
           <Text style={style.textButton}>colab</Text>
        </Pressable>
        <Pressable onPress={handleGetSponsor} style={style.styleButtonSponsor}>
          <Text style={style.textButtonSelected}>Sponsor</Text>
        </Pressable>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor:"#F6F6F6",
    borderLeftColor:"#CBCBCA",
    borderLeftWidth:1,
    padding:10,
  },
  textName:{
    fontSize:16,
    fontWeight:"500",
    alignContent:"space-between",
    justifyContent:'space-between',
    alignItems:'stretch'
  },
  containerButons:{
    marginTop:10,
    flexDirection:"row",
  },
  styleButton:{
    borderBottomColor:"#CBCBCA",
    borderWidth:1,
    padding:5,
    marginRight:15
  },
  styleButtonSponsor:{
    borderColor:'#3B8C6E',
    padding:5,
    paddingHorizontal:15,
    marginRight:15,
    borderRadius:4,
    borderWidth:1
  },
  styleTextContainer:{
    flex:1
  },
  buttonColab:{
    backgroundColor:'#3B8C6E',
    padding:5,
    paddingHorizontal:15,
    marginRight:15,
    borderRadius:4
  },
  textButton:{
    color:'white'
  },
  textButtonSelected:{
    color:'#3B8C6E'
  }
})