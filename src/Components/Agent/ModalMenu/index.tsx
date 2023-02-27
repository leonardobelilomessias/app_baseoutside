import { Center, FormControl, Input, Button, Modal, Box, Text,Pressable, VStack} from "native-base";
import { useState } from "react";
import { useDataAgent } from "../../../Contexts/UserContext";

type ModalMenuProps={
    showModal:boolean;
    setShowModal:(prop:boolean)=>void
}

export function ModalMenu({showModal,setShowModal}:ModalMenuProps){
    const {handleLogout} = useDataAgent()
    async function getLogout() {
      await handleLogout()
    }
    return(
    <Box>
        
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} animationPreset={"slide"}  >
          <Modal.Content h="100%" w='100%' m='0' style={{marginBottom: 0,marginTop: "auto"}}>
            <Modal.CloseButton />
            <Modal.Header><Text fontFamily={'heading'} textAlign={"center"}>Opções de Usuário</Text></Modal.Header>
            <Modal.Body>
              <VStack >
                <Pressable onPress={()=>{getLogout()}}>
                  <Text  p='3' fontFamily={'heading'} fontSize={'lg'} textAlign='center'>Configuraçoes de conta</Text>
                </Pressable>
                <Pressable p='3' onPress={()=>{getLogout()}}>
                  <Text fontFamily={'heading'} fontSize={'lg'} textAlign='center'>Editar perfil</Text>
                </Pressable>
                <Pressable  p='3' onPress={()=>{getLogout()}}>
                  <Text fontFamily={'heading'} fontSize={'lg'} textAlign='center'>Minhas Atividades</Text>
                </Pressable>
                <Pressable  p='3' onPress={()=>{getLogout()}}>
                  <Text fontFamily={'heading'} fontSize={'lg'} textAlign='center'>Privacidade</Text>
                </Pressable>
                <Pressable  p='3' onPress={()=>{getLogout()}}>
                  <Text fontFamily={'heading'}  fontSize={'lg'} textAlign='center'>Sair</Text>
                </Pressable>
              </VStack>
            </Modal.Body>

          </Modal.Content>
        </Modal>
      </Box>)
}