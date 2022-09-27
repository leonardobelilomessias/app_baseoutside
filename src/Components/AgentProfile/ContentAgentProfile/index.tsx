import { View, FlatList,Image, StyleSheet } from "react-native";
import {image0 } from   "../../../assets/images/highlights/vl1.jpg"
import {image1 } from   "../../../assets/images/highlights/vl1.jpg"
import {image2 } from   "../../../assets/images/highlights/vl1.jpg"
import {image3 } from   "../../../assets/images/highlights/vl1.jpg"
import {image4 } from   "../../../assets/images/highlights/vl1.jpg"
import {image5 } from   "../../../assets/images/highlights/vl1.jpg"
import {image6 } from   "../../../assets/images/highlights/vl1.jpg"
import {image7 } from   "../../../assets/images/highlights/vl1.jpg"
import {image8 } from   "../../../assets/images/highlights/vl1.jpg"




const images =[
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8

  ]
export default function ContentAgentProfile(){
  return(


         <View style={style.block} >
          {images.map((image,index)=>(
        <Image resizeMode="stretch" style={style.img}
        source={require(`../../../assets/images/highlights/vl9.jpg`)}  key={index}/>
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
    margin:5,
    backgroundColor:"gray"
  },
  block:{
    flexDirection:"row",
    flexWrap:"wrap"
  }
})