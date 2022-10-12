import { useRoute,RouteProp } from '@react-navigation/native'
import {Button} from 'react-native'
import { useAuth } from '../../hooks/auth'
interface props extends RouteProp<any>{
params:{
  id_agent:string
}
}
export function EditAgentButon(){
  const {agentAuthenticate} = useAuth()
  const {params}  = useRoute<props>()
  const showButton = agentAuthenticate.id === params?.id_agent
  function show(){
    console.log(showButton)
    //console.log(agentAuthenticate?.id === params?.id_agent)

  
  }

  return(
    <>
    {showButton&& <Button title='editar' color={'green'} onPress={show}></Button>}
    </>
  )
}