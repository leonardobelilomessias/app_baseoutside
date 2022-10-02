import React from "react";
import { View, FlatList,Image, StyleSheet, ImageBackground ,Pressable,Text} from "react-native";
import { images } from "../../../../dummys/images";
import { ContainerJorney } from "./ContainerJourney";
import { ContentExclusive } from "./ContentExclusive";
import { InfoContent } from "./InfoContent";

const mg = images
interface contentPropos{
  show:string
}
export default function ContentAgentProfile({show}:contentPropos){
      if(show==='Exclusive') return <ContentExclusive/>
      if(show ==='info') return <InfoContent/>
      if(show ==='Journey') return<ContainerJorney/>
      else return<></>
  
}
const style = StyleSheet.create({
  container:{
    flexDirection:"row"
  },
  img:{
    width:125,
    height:125,
  },
  block:{
    flexDirection:"row",
    flexWrap:"wrap"
    
  },
  blockImage:{
    flexDirection:"row",
    flexWrap:"wrap",
    margin:5
    
  },
  pressed:{
    opacity:0.5,
    backgroundColor:'green',


  }
})