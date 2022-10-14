import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native"
import {useEffect} from 'react'
import { EditAgentProfile } from "../../../Components/EditAgentProfile"
export function EditProfile(){
  const {setOptions} = useNavigation()
  useEffect(()=>{

    setOptions({title:'Edit Profile'})
  },[])
  return(<>
    <EditAgentProfile/>
  </>)
}