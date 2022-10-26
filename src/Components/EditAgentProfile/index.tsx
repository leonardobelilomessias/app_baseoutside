import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native";
import { User } from "../../hooks/auth";
import {useEffect, useState} from 'react'
import { ContainerFormEditAgentProfile } from "./FormEditAgentProfile/ContainerFormEditAgentProfile";
import { api } from "../../services/api";
import { ActivityIndicator } from "react-native";

interface props extends RouteProp<any>{
  agent:User
  }
export function EditAgentProfile(){
  const [load,setLoad] = useState(true)
  const [agent,setAgent] = useState({} as User)
  const {params} = useRoute()
  const agentByparams  = params as User
  const id_agent = agentByparams.id
  console.log(id_agent)
  async function getAgent(){
    const data = await api.post('agent/findAgentById',{id_agent})
    console.log(data.data)
    setAgent(data.data as User)
    setLoad(false)

  }
  useEffect(()=>{
    getAgent()
  },[])
  return(
    <>
     {load? <ActivityIndicator/>:
      <ContainerFormEditAgentProfile agent={agent} />}
    </>
  )
}