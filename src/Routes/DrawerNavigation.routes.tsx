
import {createDrawerNavigator}from '@react-navigation/drawer'
import {useEffect} from 'react'
import { SponsorAgent } from '../Components/SponsorAgent'
import AgentPRofile from '../screens/Agent/AgentProfile'
import { Home } from '../screens/Agent/Home'
import { TabNavigation } from './TabNavigation.routes'
import {Pressable, Text} from 'react-native'
import { AreaExclusiveAgent } from '../screens/Agent/AreaExclusiveAgent'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../hooks/auth'
import Ionicons from '@expo/vector-icons/Ionicons';
const {Navigator,Screen} = createDrawerNavigator()

export function DrawerNavigations(){
  const {navigate,goBack,dispatch}= useNavigation()
  useEffect(()=>{


  },[])
  const {signOut} = useAuth()
  function handleSignount(){
    signOut()

  }
 
return(
  <Navigator  >
  <Screen name='Base Outside'  component={Home} options={{drawerActiveBackgroundColor:'#89D99D', drawerActiveTintColor:'white',drawerLabel:({color})=><Text style={{color:color}}>Inicio</Text>, headerRight:()=><Pressable onPress={()=>handleSignount()}><Ionicons name='ios-power-sharp' color={"#3D3D3D"} style={{marginHorizontal:20}} size={25}/></Pressable>}}/>
  <Screen name='Exclusives' component={AreaExclusiveAgent} options={{drawerActiveBackgroundColor:'#89D99D', drawerActiveTintColor:'white',drawerLabel:({color})=><Text style={{color:color}}>Exclusive</Text>}}/>
  </Navigator>
)
}