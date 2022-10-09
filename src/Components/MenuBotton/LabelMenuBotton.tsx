import { ReactNode } from "react";
import { View,Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconProps from '@expo/vector-icons/Ionicons';
interface LabelMenuBotton{
  nameLabel:string;
  color?:string
  icon?: 'search'|'ios-home-sharp' |'ios-share-outline' |'person-circle-outline' |  "star-outline" | "ios-clipboard-sharp" | "ios-clipboard-outline" | "ios-cube-outline"
}

export function LabelMenuBotton({nameLabel,color,icon='search'}:LabelMenuBotton){
  return(
    <>
    <Ionicons name={icon} size={24} color={color}/>
    </>
  )
}

