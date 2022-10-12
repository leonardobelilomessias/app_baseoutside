import { useState,useEffect,useLayoutEffect,useCallback } from "react";
import { View,StyleSheet, ActivityIndicator } from "react-native";
import { useAuth, User } from "../../../hooks/auth";
import { api } from "../../../services/api";

import DataTopHeaderProfileAgent from "./DataTopHeaderProfileAgent";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";
interface Props{
  agent:User
}
export  default function HeaderPofileAgent({agent}:Props){
  
return(
  <>

    
  <View style={style.container}> 
    <DataTopHeaderProfileAgent/>
    <View style={style.displayInfo}>
    <ImageContainer photoProfile = {agent.image_profile as string}/>
    <InfoContainer user={agent}/>
    </View>
  </View>

  </>


)
}
const style = StyleSheet.create({
  container:{
  },
  displayInfo:{
    flexDirection:"row"
  }
})