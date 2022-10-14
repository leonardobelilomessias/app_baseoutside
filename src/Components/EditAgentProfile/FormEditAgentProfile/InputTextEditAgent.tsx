import { useState } from "react";
import { TextInput, StyleSheet,Text, View ,KeyboardAvoidingView} from "react-native";
interface props{
  fildName:string,
  currentValue:string
}
export function InputTextEditAgent({fildName, currentValue=''}:props){
  const [dataValue,setDataValue] = useState(currentValue)
  return(
    <KeyboardAvoidingView style={style.view}>
    <Text style={style.label}>{fildName}</Text>
    <TextInput value={dataValue}  numberOfLines={fildName==='Description'?5:1}  onChangeText={ 
      setDataValue} style={style.container}/>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    fontSize:18,
    paddingLeft:5,
    paddingBottom:5,
    borderBottomWidth:1,
    borderColor:'#3B8C6E',
    borderRadius:5,
    marginBottom:10
  },
  view:{
    width:"90%"
  },
  label:{
    fontSize:12,
    flexWrap:'wrap'
  }
})