import { View, Text, Image,StyleSheet} from "react-native";

export function CardPublication(){
  return(
    <>
    <View style={style.container}>
      <Text style={style.text}>That is one Pulication of agent</Text>
      <Image style={style.image} source={require('../../../../../assets/images/highlights/vl4.jpg')}  resizeMode='cover'/>
    </View>

    <View style={style.container}>
      <Text style={style.text} >That is one Pulication</Text>
      <Image style={style.image} source={require('../../../../../assets/images/highlights/vl5.jpg')}  resizeMode='cover'/>
    </View>
    </>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
    borderRadius:4,
    padding:10,
    marginBottom:15
  },
  image:{
    width:"100%",
    height:200,
    alignSelf:'center'
  },
  text:{
    fontSize:16,
    marginBottom:10,
    color:'green'
  }

})