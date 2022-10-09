
import {createDrawerNavigator}from '@react-navigation/drawer'
import { SponsorAgent } from '../Components/SponsorAgent'
import AgentPRofile from '../screens/Agent/AgentProfile'
import { Home } from '../screens/Agent/Home'
import { TabNavigation } from './TabNavigation.routes'

const {Navigator,Screen} = createDrawerNavigator()

export function DrawerNavigations(){
return(
  <Navigator >
  <Screen name='Feed' component={Home} options={{drawerActiveBackgroundColor:'#89D99D', drawerActiveTintColor:'white'}}/>
  </Navigator>
)
}