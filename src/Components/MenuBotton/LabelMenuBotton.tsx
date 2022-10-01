import { ReactNode } from "react";
import { View,Text } from "react-native";
interface LabelMenuBotton{
  nameLabel:string;
}
export function LabelMenuBotton({nameLabel}:LabelMenuBotton){
  return(
    <>
    <View>
      <Text>{nameLabel}</Text>
    </View>
    </>
  )
}