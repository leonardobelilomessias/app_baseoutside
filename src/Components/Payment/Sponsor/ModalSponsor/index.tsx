import { Center, VStack, HStack, Radio,Modal,Button, Text, Input } from "native-base";
import { useState } from "react";
import { ModalSponsorFailed } from "./ModalSponsorFailed";
import { ModalSponsorSuccess } from "./ModalSponsorSuccess";

type ModalSponsorProps= {
    showModal:boolean;
    setShowModal:(state:boolean)=> void
    createSponsor:()=>Promise<any>
    value:number
}
export function ModalSponsor({showModal, setShowModal,createSponsor,value}:ModalSponsorProps){


  const [showModalFailed, setShowModalFailed] = useState(false);
  const [showModalSuccess,setShowModalSuccess]=useState(false)

  async function handleCreateSponsor(){
     try{
      await createSponsor()
      setShowModal(false)
      setShowModalSuccess(true)
     }catch(e){
      console.log(e)
      setShowModalFailed(true)
      setShowModal(false)
     }
  }

  return <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content w="90%">
          <Modal.CloseButton />
          <Modal.Header>Sponsor</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
                <Text fontFamily={'heading'} fontSize={'2xl'} color='green.500' textAlign={'center'}  > R${value}</Text>
                <Text textAlign={'center'}>Preencha todos os dados para terminar a operação.</Text>
              <HStack alignItems="center" justifyContent="space-between">
                <Input placeholder="Nome completo"/>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
              <Input keyboardType="numeric" placeholder="Numero do cartão"/>
              </HStack>
              <HStack alignItems="center" space={2} >
              <Input flex={1} placeholder="Validade"/>
              <Input flex={1} placeholder="CVV"/>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer >
            <HStack flex={'1'} space={8}>
                <Button flex="1" colorScheme={'secondary'} onPress={() => {
                    setShowModal(false);
                }}>
                
                Cancel

                </Button>
                <Button flex="1" colorScheme={'emerald'} onPress={() => {
                    handleCreateSponsor();
                }}>
                
                Sponsor
                </Button>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
          <ModalSponsorSuccess setShowModalSuccess={setShowModalSuccess} showModalSuccess={showModalSuccess}/>
          <ModalSponsorFailed setShowModalFailed={setShowModalFailed} showModalFailed={showModalFailed}/>
    </Center>;
};