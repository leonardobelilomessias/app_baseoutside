import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { View ,StyleSheet} from 'react-native';
import { sin } from 'react-native-reanimated';
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/SignIn';
import { AuthRoutes } from './auth.routes';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react';



export function Routes(){
  const [data,setData]  = useState()
  const {user,agentAuthenticate} = useAuth()


  

  
  //const user ={id:'01'}
  return(
    <View style={style.container}>
    <NavigationContainer >
      {
        (user.id|| agentAuthenticate['id'])?<AuthRoutes/>:<SignIn/>
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