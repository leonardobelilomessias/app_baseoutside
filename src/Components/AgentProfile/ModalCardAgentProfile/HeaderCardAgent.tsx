import {View,Image, StyleSheet,Text} from 'react-native'

export default function HeaderCardAgent(){
  return(
    <View style={style.container}>
      <Image source={require('../../../assets/images/hill.jpg')}  style={style.img}/>
      <View><Text style={style.title}>Hello! Iam a agent outsider</Text></View>
      <Text style={ style.description}>
      <Text style={{fontWeight:"500", fontSize:16}}>Description</Text>{`\n`}
      i have a dream... you already listen thats statement. but i want talk about a dreams of thats time. I belive that humanity have urge pontential and tecnology can help optimize it
      </Text>
    </View>
  )
}
const style =  StyleSheet.create({
  container:{
    width:"100%",
    padding:10,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
  },
  img:{
    width:250,
    height:250,
    borderRadius:125
  },
  title:{
    fontSize:24,
    fontWeight:"500"
  },
  description:{
    marginHorizontal:22,
    marginVertical:10,
    textAlign:"justify"
  }
})