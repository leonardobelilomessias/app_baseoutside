import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import HomeScreen from '../screens/Agent/AgentProfile'
import { SignIn } from '../screens/SignIn'

const {Navigator,Screen} = createNativeStackNavigator()

export function AuthRoutes(){
return (  
  <Navigator defaultScreenOptions={{headerShown:true,headerTransparent:true, contentStyle:{backgroundColor:"white"}}} screenOptions={{contentStyle:{backgroundColor:"white"},headerShown:false}} >

    <Screen name='AgentProfile' component={HomeScreen}/>
    <Screen name='Sponsor' component={GetSponsorAgent}/>

  </Navigator>
  )
}