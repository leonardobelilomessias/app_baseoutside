import {View,Text, Image, StyleSheet} from 'react-native'
export function HeaderSponsorAgent(){
  return(
    <>
    <View style={style.container}>
      <Image style={style.img} source={require("../../assets/images/imgProfile.jpg")}/>
      <Text style={style.nameAgent}>Agent outsider</Text>
      <Text style={style.vocationAgent}>Tecnology</Text>
      <Text style ={style.stateAgent}>Constant</Text>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  container:{
    alignItems:"center",
    borderBottomColor:"grey",
    borderWidth:1,backgroundColor:'white',
    borderBottomEndRadius:200,

  },
  img:{
    width:200,
    height:200,
    backgroundColor:'red',
    borderRadius:125,
  },
  nameAgent:{
    fontSize:24,
    fontWeight:"600"
  },
  vocationAgent:{
    fontSize:18,
  },
  stateAgent:{
    color:"gray"
  }
})