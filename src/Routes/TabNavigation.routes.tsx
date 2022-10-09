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
import { DrawerNavigations } from './DrawerNavigation.routes'
import Ionicons from '@expo/vector-icons/Ionicons';

const {Navigator,Screen}  = createBottomTabNavigator()
export function TabNavigation(){
  return(
  <Navigator screenOptions={{tabBarHideOnKeyboard:true,tabBarShowLabel:false, tabBarActiveTintColor:'#89D99D',tabBarInactiveTintColor:'black'}}>

    <Screen name= "Monitor" options={{headerShown:false, headerLeft:()=><Ionicons style={{padding:15}} name='ios-menu-outline' size={30}/>,headerRight:()=><Text style={{padding:15}}>Settings</Text>,headerTitleAlign:"center", tabBarIcon:({color})=><LabelMenuBotton nameLabel='Monitor' color={color}  icon='ios-home-sharp'/>}} component={DrawerNavigations} />

    <Screen name='Search' options={{tabBarIcon:({color})=><LabelMenuBotton nameLabel='Search' color={color}/>}} component={Search} />

    <Screen name='Share' options={{tabBarShowLabel:false,tabBarIcon:({color})=><LabelMenuBotton nameLabel='Share' color={color} icon='ios-share-outline' />}} component={Share}/>

    <Screen name='Statisticks' options={{ tabBarShowLabel:false,tabBarIcon:({color})=><LabelMenuBotton nameLabel='Statistics' color={color} icon='ios-clipboard-outline'/>}} component={GetSponsorAgent}/>

    <Screen name='Profile' options={{ headerShown:false,tabBarShowLabel:false,tabBarIcon:({color})=><LabelMenuBotton nameLabel='Profile' color={color} icon='person-circle-outline'/>}} component={StackNavigation}/>
  </Navigator>
  )
}
