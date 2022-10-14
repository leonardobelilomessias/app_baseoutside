import { RouteProp, useRoute } from "@react-navigation/native";
import { User } from "../../hooks/auth";
import { ContainerFormEditAgentProfile } from "./FormEditAgentProfile/ContainerFormEditAgentProfile";

interface props extends RouteProp<any>{
  agent:User
  }
export function EditAgentProfile(){
  const {params} = useRoute<props>()
  const agent  = params as User
  console.log(agent.user_name)
  return(

      <ContainerFormEditAgentProfile agent={agent} />
  )
}