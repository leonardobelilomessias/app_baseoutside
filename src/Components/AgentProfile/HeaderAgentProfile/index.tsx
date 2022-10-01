import { View,StyleSheet } from "react-native";
import fakeApi from "../../../dummys/fakeApi";
import DataTopHeaderProfileAgent from "./DataTopHeaderProfileAgent";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";

export  default function HeaderPofileAgent(){
  const api:any= fakeApi.db_outside
  const missions = api[0].tb_missions
  const user = api[0].tableUsers[0]
  const actions = api[0].tb_actions
  const tasks = api[0].tb_task_agent
  const colabs= api[0].tb_colabs_agent
return(
  <View style={style.container}>
    <DataTopHeaderProfileAgent/>
    <View style={style.displayInfo}>
    <ImageContainer/>
    <InfoContainer user={user}/>
    </View>

  </View>
)
}
const style = StyleSheet.create({
  container:{
  },
  displayInfo:{
    flexDirection:"row"
  }
})