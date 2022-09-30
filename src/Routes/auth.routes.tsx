import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import HomeScreen from '../screens/Agent/AgentProfile'
import { SignIn } from '../screens/SignIn'
import { TabNavigation } from './TabNavigation.routes'
import { StackNavigation } from './StackNavigation.routes'

const {Navigator,Screen} = createNativeStackNavigator()

export function AuthRoutes(){
return (  
    <TabNavigation/>
  )
}


export function AuthRoutesBackup(){
  return (  
    <Navigator defaultScreenOptions={{headerShown:true,headerTransparent:true, contentStyle:{backgroundColor:"white"}}} screenOptions={{contentStyle:{backgroundColor:"white"},headerShown:false}} >
  
      <Screen name='AgentProfile' component={HomeScreen}/>
      <Screen name='Sponsor' component={GetSponsorAgent}/>
  
    </Navigator>
    )
  }