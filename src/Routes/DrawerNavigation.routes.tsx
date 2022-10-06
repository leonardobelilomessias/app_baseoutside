
import {createDrawerNavigator}from '@react-navigation/drawer'
import { SponsorAgent } from '../Components/SponsorAgent'
import AgentPRofile from '../screens/Agent/AgentProfile'
import { TabNavigation } from './TabNavigation.routes'

const {Navigator,Screen} = createDrawerNavigator()

export function DrawerNavigations(){
return(
  <Navigator screenOptions={{drawerLabelStyle:false}}>
  <Screen name='menu' component={SponsorAgent}/>
  </Navigator>
)
}