import {Text, View,StyleSheet, ActivityIndicator} from 'react-native'
import React, {useState, useEffect} from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { FeedAgent } from '.'
import { CardFeedAgent } from './CardFeedAgent'

interface IFeedAgent{
  
  name: string
  id_colab:string
  image_profile:string
  description:string
  url: string

}
export function FeedColab(){
  const {agentAuthenticate} = useAuth()

  const [feedagent,setFeedAgent] = useState<IFeedAgent[]>([])
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    async function  getdata(){
      const data  = await  api.post('agent/feedColab',{id_agent:agentAuthenticate.id})
      setFeedAgent(data.data)
      setLoading(false)
    }
    getdata()
   },[])
  return(
    
    
    <View style={style.container}>
      {loading ?<ActivityIndicator color={"#16D129"}size={46}/>:<></>}
      {feedagent.map(info=>(<CardFeedAgent key={info.url} name={info.name} idColab ={info.id_colab} description={info.description} img_profile={info.image_profile} img={info.url}/>))}
    </View>
 
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',

  }
})