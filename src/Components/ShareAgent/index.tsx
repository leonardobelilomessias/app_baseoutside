import { View,StyleSheet } from "react-native";
import { CardShare } from "./CardShare";

export function ShareAgent(){
  return(
  <>
  <View style={style.container}>
    <CardShare/>
    <CardShare/>
    <CardShare/>
    <CardShare/>
    <CardShare/>
    <CardShare/>



  </View>
  </>
  )
}
const style =StyleSheet.create({
  container:{
  flex:1,
  flexDirection:"row",
  flexWrap:'wrap'

  }
})