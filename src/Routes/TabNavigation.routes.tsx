import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { LabelMenuBotton } from '../Components/MenuBotton/LabelMenuBotton'
import { Search } from '../screens/Agent/Search'
import {  StackNavigation } from './StackNavigation.routes'
import {Pressable, Text} from 'react-native'
import { Share } from '../screens/Agent/Share'
import { DrawerNavigations } from './DrawerNavigation.routes'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AreaExclusiveAgent } from '../screens/Agent/AreaExclusiveAgent'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../hooks/auth'

interface navigationProp{
  navigate:(name:string,screen:{}) => {};
}

const {Navigator,Screen}  = createBottomTabNavigator()
 
export function TabNavigation(){
  const {agentAuthenticate} = useAuth()
  function dispare(){
    navigation.navigate('Profile',{screen:'ProfileAgent',params:{id_agent:agentAuthenticate.id},/*initial:false*/})
  }
  const navigation:navigationProp  = useNavigation()
  return(
  <Navigator  initialRouteName='Monitor' screenOptions={{tabBarHideOnKeyboard:true,tabBarShowLabel:false, tabBarActiveTintColor:'#89D99D',tabBarInactiveTintColor:'black'}}>

    <Screen  name= "Monitor" options={{headerShown:false, headerLeft:()=><Ionicons style={{padding:15}} name='ios-menu-outline' size={30}/>,headerRight:()=><Text style={{padding:15}}>Settings</Text>,headerTitleAlign:"center", tabBarIcon:({color})=><Pressable onPress={()=> navigation.navigate("Monitor",{screen:'Base Outside'})}><LabelMenuBotton nameLabel='Monitor' color={color}  icon='ios-home-sharp'/></Pressable> }} component={DrawerNavigations} />


    <Screen name='Exclusive' options={{ tabBarShowLabel:false,tabBarIcon:({color})=><LabelMenuBotton nameLabel='Exclusive' color={color} icon='ios-clipboard-outline'/>}} component={AreaExclusiveAgent}/>
    <Screen name='Share' options={{tabBarShowLabel:false,tabBarIcon:({color})=><LabelMenuBotton nameLabel='Share' color={color} icon='ios-share-outline' />, tabBarIconStyle:{backgroundColor:'green'}}} component={Share}/>

    <Screen name='Search' options={{tabBarIcon:({color})=><LabelMenuBotton nameLabel='Search' color={color}/>}} component={Search} />

    <Screen name='Profile' options={{ headerShown:false,tabBarShowLabel:false,tabBarIcon:({color,focused})=>
    <Pressable onPress={()=>{ dispare()}}>
          <LabelMenuBotton focused={focused} nameLabel='Profile' agent={agentAuthenticate.id} color={color} icon='person-circle-outline'/>
      </Pressable>
      }} component={StackNavigation}/>
    
  </Navigator>
  )
}
