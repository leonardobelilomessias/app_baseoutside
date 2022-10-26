import { useState } from "react";
import { TextInput, StyleSheet,Text, View ,KeyboardAvoidingView, TextInputProps} from "react-native";
interface props extends TextInputProps {
  fildName:string,
  currentValue?:string
  
}
export function InputTextEditAgent({fildName, currentValue='', ...rest}:props){
  const [dataValue,setDataValue] = useState(currentValue)
  return(
    <KeyboardAvoidingView style={style.view}>
    <Text style={style.label}>{fildName}</Text>
    <TextInput  {...rest} style={style.container}/>
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