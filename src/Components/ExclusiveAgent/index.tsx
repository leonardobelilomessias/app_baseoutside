import {Text, StyleSheet, View} from 'react-native'
export function ExclusiveAgent(){
  return(
    <View style={style.container}>
    <Text>Area exclusive</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  }
})