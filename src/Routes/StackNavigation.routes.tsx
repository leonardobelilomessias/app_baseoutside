import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import HomeScreen from '../screens/Agent/AgentProfile'
import { SignIn } from '../screens/SignIn'
import AgentProfile from '../Components/AgentProfile'
import { TabNavigation } from './TabNavigation.routes'

const {Navigator,Screen} = createNativeStackNavigator()

export function StackNavigation(){
return (  
  <Navigator  screenOptions={{animation:'slide_from_right'}}>
    <Screen name='AgentPRofile'  options={{title:'Meu Perfil'}} component={HomeScreen}/>
    <Screen name='Sponsor' component={GetSponsorAgent}/>
  </Navigator>
  )
}