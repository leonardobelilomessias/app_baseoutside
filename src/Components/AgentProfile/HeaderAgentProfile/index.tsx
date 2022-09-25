import { View,StyleSheet } from "react-native";
import DataTopHeaderProfileAgent from "./DataTopHeaderProfileAgent";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";

export  default function HeaderPofileAgent(){
return(
  <View style={style.container}>
    <DataTopHeaderProfileAgent/>
    <View style={style.displayInfo}>
    <ImageContainer/>
    <InfoContainer/>
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