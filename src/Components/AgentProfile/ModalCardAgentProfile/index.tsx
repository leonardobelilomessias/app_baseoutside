import { View,Modal,StyleSheet,Text,Button, Pressable } from "react-native";
import HeaderCardAgent from "./HeaderCardAgent";

interface ModalCardAgentProfile{
  visibleModal?:boolean,
  setStateModal?:any
}

export default function ModalAgentProfile({visibleModal,setStateModal}:ModalCardAgentProfile){
  return(
    <View style={style.container}>
      <Modal style={style.modalContainer} visible={visibleModal} animationType="slide">
      <HeaderCardAgent/>
      <Pressable style={style.buttonModal} onPress={()=>setStateModal(!visibleModal)}>
        <Text style={style.textButtonModal}> Fechar </Text>
      </Pressable>
  
      </Modal>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  modalContainer:{
    flex:1,
    backgroundColor:"red"
  },
  buttonModal:{
    backgroundColor:"#0097F3",
    marginHorizontal:42,
    marginVertical:20,
    alignItems:"center"
  },
  textButtonModal:{
    color:"white",
    padding:12,
    fontSize:16,
    fontWeight:"500"
  }
})