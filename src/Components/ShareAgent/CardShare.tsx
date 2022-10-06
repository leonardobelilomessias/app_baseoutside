import { View,StyleSheet,Text } from "react-native";

export function  CardShare(){
  return(
    <View style={style.card}>
      <Text style={style.text}> Type</Text>
    </View>
  )
}
const style = StyleSheet.create({
  card:{
    flex:1,
    minWidth:'40%',
    margin:15,
    height:100,
    backgroundColor:'#89D99D',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:6,
    shadowColor: "black",  
    elevation: 5
  },
  text:{
    color:'white',
    fontSize:18,
    fontWeight:'500',
  }
  })