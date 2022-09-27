import {View,StyleSheet} from 'react-native'
import ButtonCardProfileAgent from './ButtonCardProfileAgent'
import ListHighlightAgentProfile from './ListHilightsAgentProfile'
interface PropsInteractiveArea{
  openModal:any
}
export default function InteractiveArea({openModal}:PropsInteractiveArea){
  return(
    <View style = {style.container}>
      <ButtonCardProfileAgent openModal={openModal}/>
      <ListHighlightAgentProfile/>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:"#CBCBCA",

  }
})