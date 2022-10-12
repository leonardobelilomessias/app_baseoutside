import { useNavigation , NavigationProp} from "@react-navigation/native";
import { View,StyleSheet,Text ,Image, Pressable} from "react-native";
import {useLayoutEffect} from 'react'
const url = 'http://192.168.0.43:3333/PhotosPublications/'
const profile= 'http://192.168.0.43:3333/Agent/'
interface Props{
  img:string,
  name?:string
  img_profile?:string,
  description?:string,
  idColab?:string,
 
}
interface navigatiorPros{
  navigate:(string:string,screen:{screen?:string,params:{},initial:boolean}) => (string);
}

export function CardFeedAgent({img,name,img_profile,description, idColab}:Props){
  const navigation= useNavigation<navigatiorPros>()
  
  function dispare(){
    navigation.navigate('Profile',{screen:'ProfileAgent',params:{id_agent:idColab},initial:false})
    
  }

  
  return(
    <>
    <View style={style.container}>
      <Pressable  onPress={()=>dispare()} style={style.header}>
        <Image style={style.image} source={{uri:`${profile}${img_profile===null?'avatar.png':img_profile}` }}/>
        <View style={style.headerLabels}>
          <Text style={style.textHeader}>{name}</Text>
          <Text style={style.label}>Publication</Text>
        </View>
      </Pressable>
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
    width:30,
    height:30,
    borderRadius:30,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  textHeader:{
    fontSize:16,
    marginLeft:8,
    fontWeight:'500',
 
  },
  imagePublication:{
    width:'100%',
    height:250
  },
  description:{
  marginLeft:8,
  },
  label:{
    textAlignVertical:'center',
    textAlign:'right',
    borderColor:'green',
    color:'green',
    borderRadius:6,
    borderWidth:1,
    paddingHorizontal:5,
    fontSize:12

  },
  headerLabels:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'space-between',
    
  }
})