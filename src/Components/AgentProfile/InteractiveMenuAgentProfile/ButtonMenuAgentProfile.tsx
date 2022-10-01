import { Pressable, View,Text ,StyleSheet,PressableProps} from "react-native";
import {ReactNode} from 'react'

interface Props extends PressableProps {
  isActive?:boolean|string
  title:string;
  onPress:()=>void
}
export default function ButtonMenuAgentProfile({title,isActive,onPress,...rest}:Props){
  const isActives = isActive === title ? true : false
  function press(){
    console.log('press2')
  }
  return(
    <Pressable    style={style.styleButton}>
      <Pressable  onPress={()=>{onPress()}}   style={[style.stylePressableButton,isActives && style.isSelected]}>
        <Text style={isActives && style.isSelected}> {title} </Text>
      </Pressable>
    </Pressable>
  )
}
const style = StyleSheet.create({
  styleButton:{
    flex:1,
  },
  stylePressableButton:{
    alignItems:"center",
    backgroundColor:"#D9D9D9",
    padding:10,
    marginHorizontal:1
  },
  isSelected:{
    backgroundColor:'green',
    color:'white'
  },
  textSelected:{
    color:"white"
  }
})