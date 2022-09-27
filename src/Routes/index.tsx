import { NavigationContainer } from '@react-navigation/native';
import { View ,StyleSheet} from 'react-native';
import { AuthRoutes } from './auth.routes';
export function Routes(){
  return(
    <View style={style.container}>

    <NavigationContainer >
      <AuthRoutes/>
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