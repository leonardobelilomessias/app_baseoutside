import {Box, Button, Center, Flex, FormControl, HStack, Image, Input, KeyboardAvoidingView, ScrollView, Stack, Text, VStack} from 'native-base'
import BaseOutsideLogo from '../assets/images/BaseOutside.png'
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../Routes/auth.routes';
import { useForm,Controller } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useDataAgent } from '../Hooks/UserContext';

type FormDataProps={
    email:string;
    password:string
}
const signSchema = yup.object({
    email:yup.string().required("Digite um email valido").email("Digite um email valido"),
    password:yup.string().required("Digite uma senha")
})

export function SignIn(){
    const {handleSign} = useDataAgent()
    
    const {navigate} = useNavigation<AuthNavigatorRoutesProps>()
    const {control,handleSubmit,formState:{errors}} = useForm<FormDataProps>({
        resolver: yupResolver(signSchema)
    })
    function handleSignIn({email,password}:FormDataProps){
        
    try{

        handleSign({email,password})
    }catch(e){
        
    }


    }
    return(
    <ScrollView width={'full'} flex={1} contentContainerStyle={{flexGrow:1, justifyContent:"center",alignItems:'center',}} showsVerticalScrollIndicator={false} >
        <VStack alignContent={'center'} alignItems='center' justifyContent={'center'} flex={1}  width={'100%'} px='10' space={2} >
            <Image  source={BaseOutsideLogo} alt='logo' resizeMode='contain' defaultSource={BaseOutsideLogo}
            />
            <Text textAlign={'center'} fontSize={'2xl'} fontFamily={'heading'}>
                Entrar
            </Text>

            <FormControl isInvalid={!!errors.email?.message} >

            <Controller
            control={control}
            name='email'
            
            
            render={({field:{onChange,value}})=>(
                <Input placeholder='email'fontSize={'md'} autoCapitalize='none'  onChangeText={onChange}  value={value} leftElement={<Text fontSize={20} pl='2'   textAlign='center' alignContent={'center'} justifyContent='center'  ><Fontisto style={{}} name="email" color="gray" size={20}/> </Text>}/>
                )}
                />
                <Text> 
                <FormControl.ErrorMessage>
                    {errors.email?.message}
                </FormControl.ErrorMessage>
                </Text>
                </FormControl>

            <FormControl isInvalid={!!errors.password?.message}>
                <Controller
                control={control}
                name='password'
                render={({field:{onChange,value}})=>(
                    <Input fontSize={'md'}  placeholder='senha' secureTextEntry onChangeText={onChange} value={value} leftElement={<Text fontSize={20} pl='2'   textAlign='center' alignContent={'center'} justifyContent='center'  ><Fontisto style={{}} name="locked" color="gray" size={20}/> </Text>}/>
                    )}
                    />
                <Text>
                    <FormControl.ErrorMessage>
                    {errors.password?.message}
                    </FormControl.ErrorMessage>
                </Text>
            </FormControl>    
            <Button width={'full'} colorScheme={'green'} onPress={handleSubmit(handleSignIn)}>Entrar</Button>
            <Button onPress={()=>{navigate("SignUp")}} width={'full'} variant='outline' colorScheme={'green'}>Criar conta</Button>
            <Text  color={'green.500'} fontWeight='bold'>Esqueceu sua senha? clique aqui</Text>
        </VStack>

</ScrollView>
    )
}