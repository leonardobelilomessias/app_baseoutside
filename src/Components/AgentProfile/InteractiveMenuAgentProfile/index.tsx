import{View, Text, StyleSheet}from 'react-native'
import ButtonMenuAgentProfile from './ButtonMenuAgentProfile'
export default function InteractiveMenuAgentProfile(){
  return(
    <View style={style.container}>
      <ButtonMenuAgentProfile title='info'/>
      <ButtonMenuAgentProfile title='Journey'/>
      <ButtonMenuAgentProfile title='Exclusive'/>

    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flexDirection:"row",
  }
})