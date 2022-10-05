import { useState } from 'react'
import{View, Text, StyleSheet}from 'react-native'
import ButtonMenuAgentProfile from './ButtonMenuAgentProfile'
import ContentAgentProfile from './ContentAgentProfile'
export default function InteractiveMenuAgentProfile(){
  const [selectMenu,SetSelectMenu] = useState('info')

  return(
    <View style={style.container}>
    
    <View style={style.menuContainer}>
      <ButtonMenuAgentProfile  isActive={selectMenu} onPress={()=>{SetSelectMenu('info')}} title='info'/>
      <ButtonMenuAgentProfile isActive={selectMenu} onPress={()=>{SetSelectMenu('Journey')}} title='Journey'/>
      <ButtonMenuAgentProfile isActive={selectMenu} onPress={()=>{SetSelectMenu('Exclusive')}} title='Exclusive'/>
    </View>
    <ContentAgentProfile show={selectMenu}/>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
    menuContainer:{
    flex:1,
    flexDirection:"row",
  },
})