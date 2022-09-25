import { StyleSheet, View,Text,Image } from "react-native";


export default function ImageContainer(){
  return(
    <View style={style.container}>
      <Image style={style.img} source={require("../../../assets/images/imgProfile.jpg")}/>


      <Text style={style.textVocation}>Sociology</Text>
      <Text style={style.textState}>constant</Text>
      
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    padding:2,
    backgroundColor:"#F6F6F6",
    alignItems:"center"

  },
  img:{
    width:100,
    height:100,
    borderRadius:50
  },
  textVocation:{
    fontSize:16,
    fontWeight:"500"
  },
  textState:{
    fontSize:12,
    fontWeight:"400"
  }
})