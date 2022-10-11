
import {createDrawerNavigator}from '@react-navigation/drawer'
import { SponsorAgent } from '../Components/SponsorAgent'
import AgentPRofile from '../screens/Agent/AgentProfile'
import { Home } from '../screens/Agent/Home'
import { TabNavigation } from './TabNavigation.routes'
import {Text} from 'react-native'
import { AreaExclusiveAgent } from '../screens/Agent/AreaExclusiveAgent'
import { useNavigation } from '@react-navigation/native'

const {Navigator,Screen} = createDrawerNavigator()

export function DrawerNavigations(){
 
return(
  <Navigator  >
  <Screen name='Base Outside'  component={Home} options={{drawerActiveBackgroundColor:'#89D99D', drawerActiveTintColor:'white',drawerLabel:({color})=><Text style={{color:color}}>Inicio</Text>}}/>
  <Screen name='Exclusives' component={AreaExclusiveAgent} options={{drawerActiveBackgroundColor:'#89D99D', drawerActiveTintColor:'white',drawerLabel:({color})=><Text style={{color:color}}>Exclusive</Text>}}/>
  </Navigator>
)
}