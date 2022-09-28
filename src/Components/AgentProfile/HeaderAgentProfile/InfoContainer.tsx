import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet,Text, Button, Pressable } from "react-native";
import { useAuth } from "../../../hooks/auth";
interface navigatiorPros{
  navigate:(string:string) => (string);
}
export default function InfoContainer(){
  const {user} = useAuth()
  const navigation :navigatiorPros= useNavigation()
  function handleGetSponsor(){
    navigation.navigate("Sponsor")
  }
  return(
    <View style={style.container}>
      <View style={style.styleTextContainer}>
        <Text style={style.textName}>{user.name}</Text>
          <Text>
            {user.description}
        </Text>
      </View>

      <View style={style.containerButons}>
        <Pressable style={style.styleButton} >
           <Text>colab</Text>
        </Pressable>
        <Pressable onPress={handleGetSponsor} style={[style.styleButton,style.styleButtonSponsor]}>
          <Text>Sponsor</Text>
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
    fontWeight:"500"
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
    paddingHorizontal:15
  },
  styleTextContainer:{
    flex:1
  }
})