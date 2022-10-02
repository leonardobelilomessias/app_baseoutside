import { View, StyleSheet } from "react-native";
import { CardPublication } from "./CardPublication";

export function ContainerJorney(){
  return(
    <>
    <View style={style.container}>
      <CardPublication/>
    </View>
    </>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:'white'
  }
})

