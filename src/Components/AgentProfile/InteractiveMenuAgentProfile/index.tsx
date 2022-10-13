import { useState } from 'react'
import{View, Text, StyleSheet}from 'react-native'
import { User } from '../../../hooks/auth'
import ButtonMenuAgentProfile from './ButtonMenuAgentProfile'
import ContentAgentProfile from './ContentAgentProfile'

interface props{
  agent:User
}

export default function InteractiveMenuAgentProfile({agent}:props){
  const [selectMenu,SetSelectMenu] = useState('info')
  return(
    <View style={style.container}>
    
    <View style={style.menuContainer}>
      <ButtonMenuAgentProfile  isActive={selectMenu} onPress={()=>{SetSelectMenu('info')}} title='info'/>
      <ButtonMenuAgentProfile isActive={selectMenu} onPress={()=>{SetSelectMenu('Journey')}} title='Journey'/>
      <ButtonMenuAgentProfile isActive={selectMenu} onPress={()=>{SetSelectMenu('Exclusive')}} title='Exclusive'/>
    </View>
    <ContentAgentProfile agent={agent} show={selectMenu}/>
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