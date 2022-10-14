import { View,StyleSheet ,KeyboardAvoidingView,ScrollView,Image} from "react-native";
import { User } from "../../../hooks/auth";
import { ButtonHandleEditAgent } from "./ButtonHandleEditAgent";
import { InputTextEditAgent } from "./InputTextEditAgent";

interface props{
  agent:User
}
const profile= 'http://192.168.0.43:3333/Agent/'
export function  ContainerFormEditAgentProfile({agent}:props){
  function handleSave(){
    console.log('save')
  }
  function handleCancel(){
    console.log(agent.image_profile)

  }
  return(
    <ScrollView style={style.scrollContainer}>
    <View style={style.container}>
    <Image style={style.img} source={{uri:`${profile}${agent.image_profile===null?'avatar.png':agent.image_profile}` }}/>
        <InputTextEditAgent currentValue={agent.name} fildName="Name"/>
        <InputTextEditAgent currentValue={agent.user_name} fildName="UserName"/>
        <InputTextEditAgent currentValue={agent.vocation as string } fildName="Vocation" />
        <InputTextEditAgent currentValue={agent.description as string } fildName="Description" />
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
