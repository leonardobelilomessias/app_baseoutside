import { View, StyleSheet,Text, Button } from "react-native";

export default function InfoContainer(){
  return(
    <View style={style.container}>
      <Text style={style.textName}>  Leonardo Belilo</Text>
      <Text>Brefily description about my life, to share wit other 
        people that want to participe of my actions
      </Text>
      <View style={style.containerButons}>
        <Button  title="colab"/>
        <Button title= "sponsor"/>

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
    padding:10
  },
  textName:{
    fontSize:16,
    fontWeight:"500"
  },
  containerButons:{
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  styleCuton:{

  }
})