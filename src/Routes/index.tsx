import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { View ,StyleSheet,Text} from 'react-native';
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/SignIn';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const {agentAuthenticate, loading} = useAuth()
  return(
    <View style={style.container}>
    <NavigationContainer >
      {
        loading?<View style={{flex:1, alignItems:"center",justifyContent:"center"}}><Text>Carregando</Text></View>:
      
      
        ( agentAuthenticate?.id)?<AuthRoutes/>:<SignIn/>
      
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