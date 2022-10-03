import { useState } from 'react';
import {View,StyleSheet, ScrollView} from 'react-native'
import ListHighlightAgentProfile from "../AgentProfile/InteractiveArea/ListHilightsAgentProfile";
import ButtonMenuAgentProfile from '../AgentProfile/InteractiveMenuAgentProfile/ButtonMenuAgentProfile';
import ContainerFeedAgent from './ContainerFeedAgent';

export function FeedAgent(){
  const [selectMenu,SetSelectMenu] = useState('Agent')
  return(
    <ScrollView>
    <ListHighlightAgentProfile/>
    <View style={style.container}>
    <View style={style.menuContainer}>
      <ButtonMenuAgentProfile  isActive={selectMenu} onPress={()=>{SetSelectMenu('Agent')}} title='Agent'/>
      <ButtonMenuAgentProfile isActive={selectMenu}  onPress={()=>{SetSelectMenu('Mission')}} title='Mission'/>
      <ButtonMenuAgentProfile isActive={selectMenu}  onPress={()=>{SetSelectMenu('Action')}} title='Action'/>
    </View>
      <ContainerFeedAgent/>
    </View>
    </ScrollView>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F3F3F3'
  },
    menuContainer:{
    flex:1,
    flexDirection:"row",
  },
})