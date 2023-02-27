import { Box, Button, HStack, Image, Modal, VStack, Text  } from "native-base";
import {Alert} from "react-native";
import { AxiosApi } from "../../../../../Services/HandleData/ProvideServices/axios";

type CancelColabModalProps={
    showModal:boolean;
    setShowModal:(prop:boolean)=>void;
    id_colab:string,
    setExistColab:(prop:boolean)=>void;
    setCreatingColab:(state:boolean)=>void
    id_agent_authenticated:string
}
const noImageUser = `https://baseoutside.s3.amazonaws.com/Agent/user.png` 
export function CancelColabModal({setShowModal,showModal,id_colab,setExistColab,setCreatingColab,id_agent_authenticated}:CancelColabModalProps){
    async function cancelColab() {
        setCreatingColab(true)
        try{
          
          const colabCreated =   await AxiosApi.delete('/agent/colabAgent',{params:{id_agent:id_colab,id_colab:id_agent_authenticated,type:1}}) 
          setExistColab(false)
          setShowModal(false)
        }catch(e){
          console.log(e)
          Alert.alert('Error ao criar colab')
        }finally{
          setCreatingColab(false)
        }
      }
    return(
        <Box>
          
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} animationPreset={"fade"}  >
          <Modal.Content  w='100%' m='0'  minH={200}>
            <Modal.CloseButton />
            <Modal.Header><Text fontFamily={'heading'} textAlign={"center"}>Cancelar Colaboração</Text></Modal.Header>
            <Modal.Body>
  
          
              <VStack  alignItems={'center'}>

                    <Text fontSize={'lg'}>Você realmente deseja cancelar a colaboração?</Text>
                    <HStack space={5} mt={5} >
                    <Button  colorScheme={'green'} flex={1} onPress={()=>cancelColab()}>Descolab</Button>
  
                    <Button  colorScheme={'green'} flex={1} onPress={()=>setShowModal(false)}>Cancelar</Button>
                    
                    </HStack>
              </VStack>
            
              
            </Modal.Body>
  
          </Modal.Content>
        </Modal>
      </Box>
    )
}