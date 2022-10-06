import {View ,Pressable,Text,StyleSheet} from 'react-native'

interface PropsButtonCardProfileAgent{
  openModal:any
}
export default function ButtonCardProfileAgent({openModal}:PropsButtonCardProfileAgent){
  return(
    <View>
      <Pressable android_ripple={{color:"#16D129"}} style={style.buttonCard} onPress={()=>openModal(true)} >
        <Text style={style.textButtonCard}> See Card </Text>
      </Pressable>
    </View>
  )
}
const style = StyleSheet.create({
  buttonCard:{
    borderColor:"#3B8C6E",
    borderWidth:1,
    marginHorizontal:20,
    marginVertical:10,
    padding:5,
    alignItems:"center"
  },
  textButtonCard:{
    color:"#3B8C6E",
    fontWeight:'500'
  }
})