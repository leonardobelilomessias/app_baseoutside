import { View,StyleSheet,Text ,Image} from "react-native";

export function CardFeedAgent(){
  return(
    <>
    <View style={style.container}>
      <View style={style.header}>
        <Image style={style.image} source={require('../../assets/images/highlights/vl5.jpg')}/>
        <Text style={style.textHeader}>Soldiers Soliderity</Text>
      </View>
      <Image style={style.imagePublication} source={require('../../assets/images/highlights/vl6.jpg')}/>
      <Text >We have the privilege of contribuite with change of the word. Then give us best to improve 
        of lifes of all humanity.
      </Text>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  container:{
    width:'95%',
    backgroundColor:"white",
    height:370,
    borderWidth:1,
    borderColor:'#E5E5E5',
    marginVertical:15

  },
  image:{
    width:35,
    height:35,
    borderRadius:30,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  textHeader:{
    fontSize:20,
    marginLeft:8,
    fontWeight:'400'
  },
  imagePublication:{
    width:'100%',
    height:250
  }
})