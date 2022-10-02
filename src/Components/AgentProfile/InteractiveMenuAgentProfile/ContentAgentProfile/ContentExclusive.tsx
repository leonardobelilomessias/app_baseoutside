import { View, FlatList,Image, StyleSheet, ImageBackground ,Pressable} from "react-native";
import { images } from "../../../../dummys/images";
const mg = images
export function ContentExclusive(){
  return(
    <View style={style.block} >
    {mg.map((image,index)=>(
      <Pressable  style={({pressed})=>[style.blockImage,pressed &&  style.pressed]} key={index}>
        <Image resizeMode="cover" style={style.img}
        source={image.file}    />
      </Pressable>
    ))}

  </View>
  )
}
const style = StyleSheet.create({
  container:{
    backgroundColor:"red",
    flexDirection:"row"
  },
  img:{
    width:125,
    height:125,

    backgroundColor:"gray"
  },
  block:{
    flexDirection:"row",
    flexWrap:"wrap"
    
  },
  blockImage:{
    flexDirection:"row",
    flexWrap:"wrap",
    margin:5
    
  },
  pressed:{
    opacity:0.5,
    backgroundColor:'green',


  }
})