import { useState } from 'react'
import{View, Text, StyleSheet}from 'react-native'
import ButtonMenuAgentProfile from './ButtonMenuAgentProfile'
export default function InteractiveMenuAgentProfile(){
  const [selectMenu,SetSelectMenu] = useState('info')

  return(
    <View style={style.container}>
      <ButtonMenuAgentProfile  isActive={selectMenu} onPress={()=>{SetSelectMenu('info')}} title='info'/>
      <ButtonMenuAgentProfile isActive={selectMenu}  onPress={()=>{SetSelectMenu('Journey')}} title='Journey'/>
      <ButtonMenuAgentProfile isActive={selectMenu}  onPress={()=>{SetSelectMenu('Exclusive')}} title='Exclusive'/>

    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flexDirection:"row",
  }
})