import { useEffect } from "react";
import { View ,Text, StyleSheet} from "react-native";
import {db_outside} from "../../../dummys/fakeApi";


export default function DataTopHeaderProfileAgent(){
  ''.length
  const api:any= db_outside
   const missions = Array(5)
   const user = Array(6)
   const actions = Array(7)
   const tasks = Array(14)
   const colabs= Array(15)


  return (
    <View style={style.container}>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>{missions.length}</Text>
        <Text style={style.textData}>Missions</Text>
      </View>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>{actions.length}</Text>
        <Text style={style.textData}>Actions</Text>
      </View>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>{tasks.length}</Text>
        <Text style={style.textData}>Task</Text>
      </View>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>{colabs.length}</Text>
        <Text style={style.textData}>Colab</Text>
      </View>
    </View>

  )
}

const style = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-around",
    borderBottomColor:"#CBCBCA",
    borderWidth:1,
    padding:4
  },
  blockDataTop:{
    justifyContent:"center",
    alignItems:"center"
  },
  textNumber:{
    fontSize:24,
    fontWeight:"700"
  },
  textData:{
    fontSize:16,
    fontWeight:"400"
  }
})