import { CardFeedAgent } from "./CardFeedAgent";
import {StyleSheet, View} from 'react-native'
import { FeedColab } from "./FeedColab";
import { FeedMission } from "./FeedMission";
import { FeedAction } from "./FeedAction";
interface Props{
  selectMenu:string
}
export default function ContainerFeedAgent({selectMenu}:Props){
  
  if(selectMenu==='Colab'){
    return(

        <FeedColab/>

    )
  } 
  if(selectMenu==='Mission'){
    return(
      <View style={style.container}>
        <FeedMission/>
      </View>
    )
  }else{
    return(
    <View style={style.container}>
      <FeedAction/>
    </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',

  }
})