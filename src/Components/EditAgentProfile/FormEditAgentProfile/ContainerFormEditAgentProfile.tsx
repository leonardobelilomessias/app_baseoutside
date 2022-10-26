import { useState } from "react";
import { View,StyleSheet ,KeyboardAvoidingView,ScrollView,Image, Alert} from "react-native";
import { User } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { ButtonHandleEditAgent } from "./ButtonHandleEditAgent";
import { InputTextEditAgent } from "./InputTextEditAgent";
import {useNavigation} from '@react-navigation/native'
interface props{
  agent:User
}
const profile= 'http://192.168.0.43:3333/Agent/'
export function  ContainerFormEditAgentProfile({agent}:props){
  const {goBack} = useNavigation()
  const [name,setName]  = useState(agent.name)
  const [description,setDescription] = useState(agent.description)
  const [vocation,setVocation] = useState(agent.vocation)
  const [userName,setUserName] = useState(agent.user_name)
 
 
  async function handleSave(){
    const info = {
      id:agent.id,
      name,
      vocation,
      description
    }
    try{
     console.log(info) 
      await api.patch('/agent',info)
      goBack()
  
    }catch(e:any){
      Alert.alert(e.message)
    }
  }
  function handleCancel(){
    Alert.alert('cancelar')

  }
  return(
    <ScrollView style={style.scrollContainer}>
    <View style={style.container}>
    <Image style={style.img} source={{uri:`${profile}${agent.image_profile===null?'avatar.png':agent.image_profile}` }}/>
        <InputTextEditAgent  value={name} onChangeText={setName} fildName="Name"/>
        <InputTextEditAgent value={userName} onChangeText={setUserName} fildName="UserName"/>
        <InputTextEditAgent value={vocation} onChangeText={setVocation} fildName="Vocation" />
        <InputTextEditAgent multiline={true} value={description!}  onChangeText={setDescription}
        numberOfLines={5}fildName="Description" />
        <View style={style.buttonsContainer}>
        <ButtonHandleEditAgent onPress={handleSave} titleButton="Salvar"/>
        <ButtonHandleEditAgent onPress={handleCancel} titleButton="Cancelar"/>
        </View>
    </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  scrollContainer:{
    backgroundColor:'white'
  },
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    padding:10
  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'70%',
    marginTop:20
  },
  img:{
    width:100,
    height:100,
    borderRadius:50
  },
})
