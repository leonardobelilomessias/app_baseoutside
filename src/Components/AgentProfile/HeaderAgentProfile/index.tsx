import { View,StyleSheet } from "react-native";
import { useAuth } from "../../../hooks/auth";

import DataTopHeaderProfileAgent from "./DataTopHeaderProfileAgent";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";

export  default function HeaderPofileAgent(){
  
  const {agentAuthenticate} = useAuth()
  

return(
  <View style={style.container}>
    <DataTopHeaderProfileAgent/>
    <View style={style.displayInfo}>
    <ImageContainer/>
    <InfoContainer user={agentAuthenticate}/>
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