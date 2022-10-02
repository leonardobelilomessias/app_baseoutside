import { NavigationContainer } from '@react-navigation/native';
import { View ,StyleSheet} from 'react-native';
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/SignIn';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  //const {user} = useAuth()
  const user ={id:'01'}

  return(
    <View style={style.container}>
    <NavigationContainer >
      {
        user.id?<AuthRoutes/>:<SignIn/>
      }
    </NavigationContainer>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})