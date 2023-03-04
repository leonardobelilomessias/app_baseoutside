import { Button, Center, FormControl, Icon, Input, KeyboardAvoidingView, Radio, ScrollView, Text, useTheme, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { AxiosApi } from "../../Services/HandleData/ProvideServices/axios";
import {MaterialIcons,FontAwesome5,Foundation} from '@expo/vector-icons'
import { useForm,Controller } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { ModalSponsor } from "./Sponsor/ModalSponsor";
import { useDataAgent } from "../../Contexts/UserContext";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CheckoutScreen({id_sponsered}:{id_sponsered:string}) {
  const {goBack} = useNavigation()
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("unique");
  const {colors} = useTheme()
  const [value,setValue] = useState(0)
  const {dataAgent} = useDataAgent()
  const schema = yup.object({
    value:yup.string().required("digite um valor valido")
  })
  const {control,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})
  async function createSponsor(){
    try{

      const sponsor = await AxiosApi.post('/agent/sponsorAgent',{ id_agent:id_sponsered, id_sponsor:dataAgent.id, type:type, agent_private:false, sponsor_private:false,value:value } )
      console.log(sponsor.data)
    }catch(e){
      console.log(e)
    }
  }
  async function handleSponsor(e:any){
     console.log('valor', e)
     console.log('tipo', type)
     setValue(e.value)
     
     console.log(value)
    // console.log('id_sponsered',id_sponsered)
    // console.log('agent authenticade', dataAgent.id)
    setShowModal(true)
  }
    return (
        <KeyboardAvoidingView  behavior="position">
      
        <VStack p={10} m='5' mt='16' space='4' bgColor={'white'} rounded='10' shadow={'2'}>
          <Text textAlign={'center'} fontFamily={'heading'} fontSize='md' >Tornar-se Sponsor</Text>
          <Text color={'gray.500'} mb='6' textAlign={'center'} > você está prestes a se tornar  sponsor e você poderá acompanhar conteudos exclusivos postados </Text>
          <FormControl isInvalid={!!errors.value?.message}>
          <Controller
          control={control}
          name="value"
          
          render={( {field: { onChange, value }} )=>(
            <Input mb='2' color={'green.500'} placeholder="00,00" onChangeText={onChange} value={value}  _focus={{bgColor:'white',borderColor:"green.500"}} fontSize={'md'} keyboardType="number-pad"  InputLeftElement={<Icon  mx={'8'} color='green.200' as={<Foundation size={25}color={'green'} name="dollar"/>} size={35} />}/>
            )}
            />
            <FormControl.ErrorMessage>
            {errors&& errors.value?.message}
            </FormControl.ErrorMessage>
          </FormControl>  

          <Radio.Group colorScheme={"emerald"} name="myRadioGroup" accessibilityLabel="favorite number" value={type} onChange={nextValue => {
            setType(nextValue);
          }}>
            <Radio value="unique" my={1}>
              Unico
            </Radio>
            <Radio value="recurrent" my={1}>
              Recorrente
            </Radio>
          </Radio.Group>
          {/* {errors&& errors.price?.message} */}
        <Button  colorScheme={'emerald'} onPress={handleSubmit(handleSponsor)}>
           ir para pagina de pagamento
        </Button>
        <Button  colorScheme={'emerald'} variant='ghost' onPress={()=>{goBack()}}>
           voltar
        </Button>
        </VStack>
        <ModalSponsor value={value} createSponsor={createSponsor} showModal={showModal} setShowModal={setShowModal} />

            </KeyboardAvoidingView>    
      
    );
  }