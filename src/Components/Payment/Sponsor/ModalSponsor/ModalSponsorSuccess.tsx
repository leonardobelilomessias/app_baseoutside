import { Radio, VStack,Modal, Button, Text, CheckCircleIcon } from "native-base";
type ModalSponsorSuccessProps= {
    showModalSuccess:boolean;
    setShowModalSuccess:(state:boolean)=> void
}
export function ModalSponsorSuccess({setShowModalSuccess,showModalSuccess}:ModalSponsorSuccessProps){
    return(
        <>
              <Modal isOpen={showModalSuccess} onClose={() => setShowModalSuccess(false)} size="lg">
              <Modal.Content maxWidth="350">
        <Modal.CloseButton />
        <Modal.Header>Operação Bem sucedida</Modal.Header>
        <Modal.Body alignItems={'center'}>
          <CheckCircleIcon size={'2xl'} color='emerald' />
        <Text fontSize={"2xl"} color='danger' textAlign={'center'} fontFamily='heading'> Tudo certo!</Text>
        <Text textAlign={'center'} color='warmGray.700'>Você se tornou um sponsor e agora pode ter acesso a conteudos exclusivos.</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button colorScheme={'emerald'} flex="1" onPress={() => {
            setShowModalSuccess(false)
        }}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal.Content>
      </Modal>
        </>
    )
}