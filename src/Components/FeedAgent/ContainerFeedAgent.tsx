import { CardFeedAgent } from "./CardFeedAgent";
import {StyleSheet, View} from 'react-native'
export default function ContainerFeedAgent(){
  return(
    <View style={style.container}>
      <CardFeedAgent/>  
      <CardFeedAgent/>
      <CardFeedAgent/>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',

  }
})