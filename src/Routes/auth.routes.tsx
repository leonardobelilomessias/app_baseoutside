import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import HomeScreen from '../screens/Agent/AgentProfile'
import { SignIn } from '../screens/SignIn'
import { TabNavigation } from './TabNavigation.routes'
import { StackNavigation } from './StackNavigation.routes'
import { DrawerNavigations } from './DrawerNavigation.routes'
import { useAuth } from '../hooks/auth'

const {Navigator,Screen} = createNativeStackNavigator()

export function AuthRoutes(){
  const {agentAuthenticate,user} = useAuth()
return (  
    
    <TabNavigation/>
    
  )
}
