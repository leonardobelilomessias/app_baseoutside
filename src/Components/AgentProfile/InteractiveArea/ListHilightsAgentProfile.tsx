import {View, Text, StyleSheet, FlatList,Image, Pressable} from 'react-native'
import { highlights, icons, images } from '../../../dummys/images'

interface itemProps{
  file:any
  
}
interface DataProps{
  images:itemProps[]
  
}
interface namesProps{
  names:string[]
}

export default function ListHighlightAgentProfile({images}:DataProps){

  return(
    <View>
      <Text style={{marginHorizontal:20}}>Highlights</Text>
      <FlatList showsHorizontalScrollIndicator={false} data={images} renderItem={(DataItem)=>
      <Pressable style={({pressed})=>[pressed ? [style.pressed, style.blockHighlight]:style.blockHighlight]}>
        <Image style={[style.img]} 
        source={DataItem.item.file} resizeMode='contain' 
        />
      </Pressable>
      }
      keyExtractor={(item)=> item.file}
      horizontal={true}
      />
    </View>
  )
}
const style= StyleSheet.create({
  blockHighlight:{
    width:60,
    height:60,
    margin:10,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center"
  },
  img:{
    width:60,
    height:60,
    margin:10,
    borderRadius:50,
  },
  pressed:{
    opacity:0.5,
    backgroundColor:'#89D99D',
    height:200
  }
})