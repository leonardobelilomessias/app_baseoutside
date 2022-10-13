import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import HomeScreen from '../screens/Agent/AgentProfile'
import { SignIn } from '../screens/SignIn'
import AgentProfile from '../Components/AgentProfile'
import { TabNavigation } from './TabNavigation.routes'
import { Routes } from '.'
import App from '../../App'
import { Home } from '../screens/Agent/Home'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'
import { Text } from 'react-native'
import { EditAgentButon } from '../Components/MenuBotton/EditAgentButton'
import { AreaExclusiveAgent } from '../screens/Agent/AreaExclusiveAgent'
import { EditProfile } from '../screens/Agent/EdditProfile'

const {Navigator,Screen} = createNativeStackNavigator()

export function StackNavigation(){
  const {agentAuthenticate} = useAuth()
return (  
  <Navigator  screenOptions={{animation:'slide_from_right'}}>
    <Screen name='ProfileAgent' options={{headerRight:({})=><EditAgentButon/>}} initialParams={{id_agent:agentAuthenticate.id}}  component={AgentProfile} />
    <Screen  name='AgentProfile'   options={{title:'Meu Perfil'}} initialParams={{id_agent:agentAuthenticate.id}}   component={HomeScreen}/>
    <Screen name='Sponsor' component={GetSponsorAgent}/>
    <Screen name='EditAgent' component={EditProfile}/>
  </Navigator>
  )
}

export function StackAgents(){
  return(
    <Navigator>
      
    </Navigator>
  )
}