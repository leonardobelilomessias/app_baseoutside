import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetSponsorAgent } from '../screens/GetSponsorAgent'
import HomeScreen from '../screens/Home'
import { SignIn } from '../screens/SignIn'

const {Navigator,Screen} = createNativeStackNavigator()

export function AuthRoutes(){
return (  
  <Navigator defaultScreenOptions={{headerShown:true,headerTransparent:true, contentStyle:{backgroundColor:"white"}}} screenOptions={{contentStyle:{backgroundColor:"white"}}} >
    <Screen  name= "SignIn" component={SignIn} options={{headerShadowVisible:false,}}/>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Sponsor' component={GetSponsorAgent}/>

  </Navigator>
  )
}