import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AgentProfile from '../Components/AgentProfile'
import { FeedAgent } from '../Components/FeedAgent'
import { LabelMenuBotton } from '../Components/MenuBotton/LabelMenuBotton'
import AgentPRofile from '../screens/Agent/AgentProfile'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import { Home } from '../screens/Agent/Home'
import { Search } from '../screens/Agent/Search'
import { StackNavigation } from './StackNavigation.routes'
import {Text} from 'react-native'
import { Share } from '../screens/Agent/Share'

const {Navigator,Screen}  = createBottomTabNavigator()
export function TabNavigation(){
  return(
  <Navigator screenOptions={{tabBarHideOnKeyboard:true,tabBarShowLabel:false,}}>
    <Screen name= "Monitor" options={{headerLeft:()=><Text style={{padding:15}}>Manager</Text>,headerRight:()=><Text style={{padding:15}}>Settings</Text>,headerTitleAlign:"center", tabBarIcon:()=><LabelMenuBotton nameLabel='Monitor' />}} component={Home} />
    <Screen name='Search' options={{tabBarIcon:()=><LabelMenuBotton nameLabel='Search' />}} component={Search} />
    <Screen name='Share' options={{tabBarShowLabel:false,tabBarIcon:()=><LabelMenuBotton nameLabel='Share' />}} component={Share}/>
    <Screen name='Statisticks' options={{ tabBarShowLabel:false,tabBarIcon:()=><LabelMenuBotton nameLabel='Statistics' />}} component={GetSponsorAgent}/>
    <Screen name='Profile' options={{ headerShown:false,tabBarShowLabel:false,tabBarIcon:()=><LabelMenuBotton nameLabel='Profile' />}} component={StackNavigation}/>
  </Navigator>
  )
}