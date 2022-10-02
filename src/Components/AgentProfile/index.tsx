import { View,Modal,StyleSheet,Text, ScrollView } from "react-native";
import{useState} from 'react'
import HeaderPofileAgent from "./HeaderAgentProfile";
import InteractiveArea from "./InteractiveArea";
import ModalAgentProfile from "./ModalCardAgentProfile";
import InteractiveMenuAgentProfile from "./InteractiveMenuAgentProfile";
import ContentAgentProfile from "./InteractiveMenuAgentProfile/ContentAgentProfile";

export default function AgentProfile(){
  const [isVisibleModa,setIsVisibleModal] = useState(false)
  return(
    <ScrollView style={style.container} >

      <HeaderPofileAgent/>
      <InteractiveArea openModal={setIsVisibleModal}/>
      <ModalAgentProfile visibleModal={isVisibleModa} setStateModal={setIsVisibleModal}/>
      <InteractiveMenuAgentProfile/>

      

    </ScrollView>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  container2:{
    backgroundColor:'green'
  }

})