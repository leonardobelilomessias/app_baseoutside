import { Box, VStack ,Modal, Button, Text, Icon } from "native-base"
import { useState } from "react"
import { useDataAgent } from "../../../../../Contexts/UserContext"
import { Feather } from '@expo/vector-icons/'

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

export function ColabCreatedModalFeedBack({showModal,setShowModal,id_colab,setColab,colab}:ModalMenuColabFormProps){
    const {dataAgent} = useDataAgent()
    const [creatingColab,setCreatingColab] = useState(false)
    const [value,setValue] = useState('')
    async function finished(){
      setColab(false)
      setShowModal(false)
  
    }
    return(
      <Box>
          
          <Modal isOpen={showModal} onClose={() => setShowModal(false)} animationPreset={"fade"}  >
            <Modal.Content  w='100%' m='0' >
              <Modal.CloseButton />
              <Modal.Header><Text fontFamily={'heading'} textAlign={"center"}>Colab Criado com sucesso!</Text></Modal.Header>
              <Modal.Body>
                <VStack p='4' alignItems={'center'}>
                  <Icon as={Feather} name='check-circle' size={'45'} mb='2' color={'green.400'}/>
                        <Text color={'gray.600'} textAlign='center' fontFamily={'heading'} fontSize={'lg'}>Você agora está acabou de se tornar um colab.</Text>
                      <VStack space={2} mt={8} >
                      <Button  colorScheme={'green'} onPress={()=>finished()}>Finalizar</Button>
                      <Button  colorScheme={'green'} >Enviar Mensagem para o usuario</Button>
                    </VStack>
                </VStack>
              </Modal.Body>
  
            </Modal.Content>
          </Modal>
        </Box>)
  }