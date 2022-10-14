import { Button,Pressable,StyleSheet,Text } from "react-native";
interface props{
  titleButton:string
  onPress:()=> void
}
export  function ButtonHandleEditAgent({titleButton,onPress}:props){
  return(
    <Pressable onPress={onPress} style={style.button} >
      <Text style={style.textButton}>{titleButton}</Text>
    </Pressable>
  )
}
const style = StyleSheet.create({
  button:{
    flex:1,
    borderColor:'green',
    borderWidth:1,
    padding:5,
    marginHorizontal:8
    
  },
  textButton:{
    color:'green',
    textAlign:'center'
  }
})