import { View ,Text,StyleSheet} from "react-native";
import { useAuth, User } from "../../../../hooks/auth";
import {useEffect} from 'react'

const elements =[{title:'',text:''}]
export const TextInfo =({title,text}:{title:string,text:string})=>(
  <View style={style.boxContent}>
    <Text style={style.title}>{title}</Text>
    <Text style={style.text}>{text}</Text>
  </View>
)
interface props extends User{
  agent:{
    vocation:string
    interests:[{id:string,interests:string}]
    skills:[{id:string,skill:string}]
    level:number
    state:number
  }
}
export function InfoContent({agent}:props){
  
  const vocation = agent.vocation? agent.vocation: 'indefinida'
  const arrInterests = !!agent?.interests?.length? agent.interests:[{interests:'indefinido'}]
  const level = agent.level===0 ? 'New agent':'Constant'
  const arrSkiils = !!agent?.skills?.length? agent.skills:[{skill:'indefinido'}]
  const state = agent.state ===0? '':''

  return(
    <>
    <View style={style.infoContainer}>
      <TextInfo title={'Vocation' }text={vocation}/>
      <View style={style.boxContent}>
        <Text style={style.title}>Interest</Text>
        <Text style={style.text}>{arrInterests.map(({interests},key)=> <Text key={key}> {interests} {!(key>= arrInterests.length-1) && ',' }</Text>)}</Text>
      </View>
      <View style={style.boxContent}>
        <Text style={style.title}>Skills</Text>
        <Text style={style.text}>{arrSkiils.map(({skill},key)=> <Text key={key}> {skill} {!(key>= arrSkiils.length-1) && ',' }</Text>)}</Text>
      </View>
      <TextInfo title='Level' text={level}/>
      <TextInfo title='State' text="Constant"/>
    </View>
    </>
  ) 
}
const style = StyleSheet.create({
  infoContainer:{
    padding:10,
 },
  title:{
    fontSize:16,
    fontWeight:'400',
  },
  text:{
    fontSize:14,
    color:'gray'
  },
  boxContent:{
    marginBottom:10

  },
  
})