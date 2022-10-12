import { View,Modal,StyleSheet,Text, ScrollView, ActivityIndicator } from "react-native";
import{useState, useEffect, useCallback, useLayoutEffect} from 'react'
import HeaderPofileAgent from "./HeaderAgentProfile";
import InteractiveArea from "./InteractiveArea";
import ModalAgentProfile from "./ModalCardAgentProfile";
import InteractiveMenuAgentProfile from "./InteractiveMenuAgentProfile";
import ContentAgentProfile from "./InteractiveMenuAgentProfile/ContentAgentProfile";
import { RouteProp, useRoute,useFocusEffect, useNavigation,  } from "@react-navigation/native";
import {LabelMenuBotton } from '../MenuBotton/LabelMenuBotton'
import { api } from "../../services/api";
import { User } from "../../hooks/auth";

interface iProps extends RouteProp<any> {
id_agent:string
navigation?:{}
}

export default function AgentProfile(){
  const navigation = useNavigation()

  const [isVisibleModa,setIsVisibleModal] = useState(false)
  const [loading,setLoading] = useState(true)
  const {params}  =  useRoute<iProps>()
  const {id_agent} = params as iProps
  const [agent,setAgent] = useState({} as User)
  async function getAgent(){
    setLoading(true)
    const data = await  api.post('/agent/fetchAgentProfile',{id_agent:id_agent})
    setLoading(false)
    setAgent(data.data)
  }
  
  useFocusEffect(useCallback(()=>{
    getAgent()
  },[params]))

  return(
    <ScrollView style={style.container} >
      {loading?<ActivityIndicator  size={50}/>:
      <>
      <HeaderPofileAgent agent={agent }/>
      <InteractiveArea openModal={setIsVisibleModal}/>
      <ModalAgentProfile visibleModal={isVisibleModa} setStateModal={setIsVisibleModal}/>
      <InteractiveMenuAgentProfile/>
      </>}
     

      

    </ScrollView>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,


  },
  container2:{
    backgroundColor:'#3B8C6E'
  }

})