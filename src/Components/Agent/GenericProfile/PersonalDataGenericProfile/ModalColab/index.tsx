import { Center, FormControl, Input, Button, Modal, Box, Text,Pressable, VStack, Image, Radio, HStack, Select, CheckCircleIcon} from "native-base";
import { useState } from "react";
import { Alert } from "react-native";
import { useDataAgent } from "../../../../../Contexts/UserContext";
import { AxiosApi } from "../../../../../Services/HandleData/ProvideServices/axios";
import { LoadingSpinner } from "../../../../Shared/LoadingSpinner";
import { ColabCreatedModalFeedBack } from "./ColabCreatedModalFeedBack";
import { CreateColabForm } from "./CreateColabForm";




type ModalMenuColabProps={
    showModal:boolean;
    setShowModal:(prop:boolean)=>void;
    id_colab:string
    existColab:boolean
    setExistColab:(prop:boolean)=>void;

}
type ModalMenuColabFormProps={
  showModal:boolean;
  setShowModal:(prop:boolean)=>void;
  id_colab:string,
  colab:boolean;
  setColab:(prop:boolean)=>void;
  existColab:boolean
  setExistColab:(prop:boolean)=>void;

}




export function ModalColab({showModal,setShowModal,id_colab,existColab,setExistColab}:ModalMenuColabProps){
    const {dataAgent} = useDataAgent()
    const [colab,setColab] = useState(false)

    return(
    <Box>
        
        {!colab?
        <CreateColabForm setExistColab={setExistColab} existColab={existColab} colab={colab} setColab={setColab}  id_colab={id_colab} showModal={showModal} setShowModal={setShowModal}/>
        :
        <ColabCreatedModalFeedBack setExistColab={setExistColab} existColab={existColab} colab={colab} setColab={setColab}  id_colab={id_colab} showModal={showModal} setShowModal={setShowModal}/>
        }
      </Box>)
}


