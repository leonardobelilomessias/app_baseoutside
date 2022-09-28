import {View, Text, StyleSheet, FlatList,Image} from 'react-native'

import {resolve,join} from 'path'
const images =[
"../../../assets/images/highlights/vl1.jpg",
"../../../assets/images/highlights/vl2.jpg",
"../../../assets/images/highlights/vl3.jpg",
"../../../assets/images/highlights/vl4.jpg",
"../../../assets/images/highlights/vl5.jpg",
"../../../assets/images/highlights/vl6.jpg",
"../../../assets/images/highlights/vl7.jpg",
"../../../assets/images/highlights/vl8.jpg",
"../../../assets/images/highlights/vl9.jpg",
]
const highlight = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}]
export default function ListHighlightAgentProfile(){
  return(
    <View>
      <Text style={{marginHorizontal:20}}>Highlights</Text>
      <FlatList showsHorizontalScrollIndicator={false} data={highlight} renderItem={(itemData)=>
      <View style={style.blockHighlight}>
        <Image style={style.img} 
        source={require("../../../assets/images/highlights/vl9.jpg")} />
      </View>
      }
      keyExtractor={(item)=> item.id.toString()}
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
  }
})