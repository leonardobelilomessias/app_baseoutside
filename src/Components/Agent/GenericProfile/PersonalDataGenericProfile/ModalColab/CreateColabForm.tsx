import { Box, VStack, HStack, Center, Radio, Select, CheckCircleIcon, Modal, Button, Image, Text } from "native-base"
import { useState } from "react"
import { Alert } from "react-native"
import { useDataAgent } from "../../../../../Contexts/UserContext"
import { AxiosApi } from "../../../../../Services/HandleData/ProvideServices/axios"
import { LoadingSpinner } from "../../../../Shared/LoadingSpinner"
import { CancelColabModal } from "./CancelColabModal"

type ModalMenuColabFormProps={
    showModal:boolean;
    setShowModal:(prop:boolean)=>void;
    id_colab:string,
    colab:boolean;
    setColab:(prop:boolean)=>void;
    existColab:boolean
    setExistColab:(prop:boolean)=>void;
  
  }
const noImageUser = `https://baseoutside.s3.amazonaws.com/Agent/user.png` 

export function CreateColabForm({showModal,setShowModal,id_colab,setColab,colab,existColab,setExistColab}:ModalMenuColabFormProps){
    const {dataAgent} = useDataAgent()
    const [creatingColab,setCreatingColab] = useState(false)
    const [value,setValue] = useState('')
    
  
    async function createColab(){
      setCreatingColab(true)
      try{
        
        const colabCreated =   await AxiosApi.post('/agent/colabAgent',{id_agent:id_colab,id_colab:dataAgent.id,type:1}) 
        setExistColab(true)
        if(colabCreated) {
          setColab(true)
        }
        
        
      }catch(e){
        console.log(e)
        Alert.alert('Error ao criar colab')
      }finally{
        setCreatingColab(false)
      }
  
    }

    if(existColab){
      return(
        <CancelColabModal  id_agent_authenticated={dataAgent.id} id_colab={id_colab} setCreatingColab={setCreatingColab} setShowModal={setShowModal} showModal={showModal} setExistColab={setExistColab}/>
      )
    }
    return(
      <Box>
          
          <Modal isOpen={showModal} onClose={() => setShowModal(false)} animationPreset={"fade"}  >
            <Modal.Content  w='100%' m='0'  minH={200}>
              <Modal.CloseButton />
              <Modal.Header><Text fontFamily={'heading'} textAlign={"center"}>Colaborar</Text></Modal.Header>
              <Modal.Body>
  
                {creatingColab?
                <Center flex={1}>
                  <LoadingSpinner/>
                </Center>
                :
                <VStack >
                    <Center>
                      <Image source={{uri:noImageUser}} w='50' h='50' alt="user"/>
                    </Center>
                    <Box px='2'>

                      <Radio.Group name="myRadioGroup" colorScheme={'green'}  accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                          setValue(nextValue);
                        }}>
                          <Radio value="one" my={1}>
                              <Text>Apenas seguir</Text>
                          </Radio>
                          <Radio value="two" my={1}>
                              <Text>Colaborar</Text>
                          </Radio>
                          <SelectModal value={value}/>
                      </Radio.Group>
                    </Box>
                      <HStack space={5} mt={5} >
                      <Button  colorScheme={'green'} flex={1} onPress={()=>setShowModal(false)}>Cancelar</Button>
                      <Button flex={1} colorScheme={'green'} onPress={()=>createColab()}>Tornar-se colab</Button>
                      </HStack>
                </VStack>
              
                }
              </Modal.Body>
  
            </Modal.Content>
          </Modal>
        </Box>)
  }
  
  
  
  function SelectModal({value}:{value:string}){
    const [service, setService] = useState("");
    return <Center>
        <Box maxW="300">
          <Select isDisabled={value==='two'?false:true} selectedValue={service}  minWidth="200" accessibilityLabel="Escolher Demanda" placeholder="Escolher Demanda" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckCircleIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box>
      </Center>;
  }