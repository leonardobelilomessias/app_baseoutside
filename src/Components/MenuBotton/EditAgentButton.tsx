import { useRoute,RouteProp, useNavigation,  } from '@react-navigation/native'
import {Button} from 'react-native'
import { useAuth } from '../../hooks/auth'
interface props extends RouteProp<any>{
params:{
  id_agent:string
}
}
interface navigateProps{
  navigate:(progile:string,{})=>void
  setOptions:()=> void
}
export function EditAgentButon(){
  const {agentAuthenticate} = useAuth()
  const {params}  = useRoute<props>()
  const {navigate} = useNavigation<navigateProps>()
  const showButton = agentAuthenticate.id === params?.id_agent
  function show(){
    console.log(showButton)
    console.log( agentAuthenticate?.id)
    navigate('Profile',{screen:'EditAgent'})
   
    
  
  }

  return(
    <>
    {showButton&& <Button title='editar' color={'#3B8C6E'} onPress={show}></Button>}
    </>
  )
}