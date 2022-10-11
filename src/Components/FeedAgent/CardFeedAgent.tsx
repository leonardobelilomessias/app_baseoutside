import { View,StyleSheet,Text ,Image} from "react-native";
const url = 'http://192.168.0.43:3333/PhotosPublications/'
const profile= 'http://192.168.0.43:3333/Agent/'
interface Props{
  img:string,
  name?:string
  img_profile?:string,
  description?:string
}
export function CardFeedAgent({img,name,img_profile,description}:Props){
  return(
    <>
    <View style={style.container}>
      <View style={style.header}>
        <Image style={style.image} source={{uri:`${profile}${img_profile}` }}/>
        <Text style={style.textHeader}>{name}</Text>
      </View>
      <Image style={style.imagePublication}resizeMode="center"  source={{uri:`${url}${img}` }}/>
      <Text style={style.description} >{description}
      </Text>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
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
  },
  description:{
  marginLeft:8,
  }
})