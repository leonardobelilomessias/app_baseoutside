import { useState } from 'react'
import {View,ScrollView,StyleSheet, TextInput} from 'react-native'
import ButtonMenuAgentProfile from '../AgentProfile/InteractiveMenuAgentProfile/ButtonMenuAgentProfile'
export function SearchAgent(){
  const [selectMenu,SetSelectMenu] = useState('Agent')
  return(
    <ScrollView>

    <View style={style.container}>
      <TextInput style={style.input}  placeholder='Search'/>
    <View style={style.menuContainer}>
      <ButtonMenuAgentProfile isActive={selectMenu} onPress={()=>{SetSelectMenu('Agent')}} title='Agent'/>
      <ButtonMenuAgentProfile isActive={selectMenu}  onPress={()=>{SetSelectMenu('Mission')}} title='Mission'/>
      <ButtonMenuAgentProfile isActive={selectMenu}  onPress={()=>{SetSelectMenu('Action')}} title='Action'/>
    </View>
      
    </View>
    </ScrollView>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F3F3F3',
    alignItems:'center'
  },
    menuContainer:{
    flex:1,
    flexDirection:"row",
  },
  input:{
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'gray',
    width:"80%",
    borderRadius:2,
    marginVertical:10,
    fontSize:16,
    padding:6
  }
})