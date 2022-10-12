import { ReactNode, useState } from "react";
import { View,Text, Pressable,StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconProps from '@expo/vector-icons/Ionicons';
import { useAuth } from "../../hooks/auth";
import { RouteProp, useRoute } from "@react-navigation/native";
interface LabelMenuBotton{
  focused?:boolean
  agent?:string
  onPress?:()=> void,
  nameLabel:string;
  color?:string
  icon?: 'search'|'ios-home-sharp' |'ios-share-outline' |'person-circle-outline' |  "star-outline" | "ios-clipboard-sharp" | "ios-clipboard-outline" | "ios-cube-outline"
}


interface iProps extends RouteProp<any> {
  params:{
    params:{
      id_agent:string
    }
  }
  }


export function LabelMenuBotton({nameLabel,color,icon='search',onPress,focused}:LabelMenuBotton){
  const {agentAuthenticate} = useAuth()
  const {params}  =  useRoute<iProps>()

  const colorselected = params?.params?.id_agent === agentAuthenticate.id && focused? color:'black'
  
  const iconUser  = nameLabel==='Profile'? colorselected: color
  return(

    <Ionicons name={icon} size={24} color={iconUser}/>
    
  )
}

const  style = StyleSheet.create({
  container:{
    width:'100%',
    backgroundColor:'red'
  }
})


