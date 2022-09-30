import {View, Text, StyleSheet, FlatList,Image, Pressable} from 'react-native'
import { highlights } from '../../../dummys/images'
export default function ListHighlightAgentProfile(){
  return(
    <View>
      <Text style={{marginHorizontal:20}}>Highlights</Text>
      <FlatList showsHorizontalScrollIndicator={false} data={highlights} renderItem={(itemData)=>
      <Pressable style={({pressed})=>[pressed ? [style.pressed, style.blockHighlight]:style.blockHighlight]}>
        <Image style={[style.img]} 
        source={itemData.item.file} />
      </Pressable>
      }
      keyExtractor={(item)=> item.file.toString()}
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
    backgroundColor:'green',
    height:200
  }
})