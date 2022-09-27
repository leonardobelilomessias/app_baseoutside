import { Pressable, View,Text ,StyleSheet} from "react-native";
import {ReactNode} from 'react'

interface Props {

  title:string
}
export default function ButtonMenuAgentProfile({title}:Props){
  return(
    <View style={style.styleButton}>
      <Pressable style={style.stylePressableButton}>
        <Text> {title} </Text>
      </Pressable>
    </View>
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
  }
})