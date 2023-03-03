import { Radio, VStack, Modal, Button, Text, Icon, ArrowForwardIcon, WarningOutlineIcon  } from "native-base";

type ModalSponsorFailedProps= {
    showModalFailed:boolean;
    setShowModalFailed:(state:boolean)=> void
}
export function ModalSponsorFailed({setShowModalFailed,showModalFailed}:ModalSponsorFailedProps){
    return(

      <Modal isOpen={showModalFailed} size="lg" onClose={() => setShowModalFailed(false)}>
      <Modal.Content maxWidth="350">
        <Modal.CloseButton />
        <Modal.Header>Falhou</Modal.Header>
        <Modal.Body alignItems={'center'}>
          <WarningOutlineIcon  size={'2xl'} color='red' />
        <Text fontSize={"2xl"} color='danger' textAlign={'center'} fontFamily='heading'> Falhou</Text>
        <Text textAlign={'center'} color='warmGray.700'>Houve um erro ao finalizar a operação e não foi possivel se tornar sponsor. Tente novamente!</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button colorScheme={'emerald'} flex="1" onPress={() => {
            setShowModalFailed(false)
        }}>
            Voltar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
    )

}