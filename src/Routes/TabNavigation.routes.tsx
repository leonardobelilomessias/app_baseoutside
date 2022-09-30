import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AgentProfile from '../Components/AgentProfile'
import AgentPRofile from '../screens/Agent/AgentProfile'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import { StackNavigation } from './StackNavigation.routes'

const {Navigator,Screen}  = createBottomTabNavigator()
export function TabNavigation(){
  return(
  <Navigator>
    <Screen name= "Home" options={{headerShown:false,}} component={ StackNavigation} />
    <Screen name='Search' component={GetSponsorAgent} />
    <Screen name='Share' component={GetSponsorAgent}/>
    <Screen name='Statisticks' component={GetSponsorAgent}/>
    <Screen name='Profile' component={AgentProfile}/>


    
  </Navigator>
  )
}