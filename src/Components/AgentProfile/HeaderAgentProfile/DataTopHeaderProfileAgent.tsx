import { useEffect } from "react";
import { View ,Text, StyleSheet} from "react-native";
import fakeApi from "../../../dummys/fakeApi";


export default function DataTopHeaderProfileAgent(){
  ''.length
  const api:any= fakeApi.db_outside
   const missions = api[0].tb_missions
   const user = api[0].tableUsers[0]
   const actions = api[0].tb_actions
   const tasks = api[0].tb_task_agent
   const colabs= api[0].tb_colabs_agent


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