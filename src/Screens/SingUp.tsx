import {Box, Button, Center, Flex, FormControl, HStack, Image, Input, ScrollView, Stack, Text, VStack} from 'native-base'
import BaseOutsideLogo from '../assets/images/BaseOutside.png'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../Routes/auth.routes';
import { useForm,Controller } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

type FormDataProps={
    name:string
    email:string;
    password:string
    password_confirm:string
}
const signUpSchema = yup.object({
    name:yup.string().required("digite um nome de usuario sem espaços"),
    email:yup.string().required("Digite uma senha valida"),
    password:yup.string().required("digite uma senha valida"),
    password_confirm:yup.string().required("redigite a sua senha").oneOf([yup.ref('password')],"As Senhas devem ser iguais")

})
export function SignUp(){
    const { navigate} = useNavigation<AuthNavigatorRoutesProps>()
    const {control, handleSubmit,formState:{errors}} = useForm<FormDataProps>({
        resolver:yupResolver(signUpSchema)
    })
    function handleSignup({email,name,password,password_confirm}:FormDataProps){
        
    }
    return(
        <ScrollView width={'full'} flex={1} contentContainerStyle={{flexGrow:1, justifyContent:"center",alignItems:'center'}} showsVerticalScrollIndicator={false}>
            <VStack alignContent={'center'} alignItems='center' justifyContent={'center'} flex={1}  width={'100%'} px='10'  >
                <Image  source={BaseOutsideLogo} alt='logo' resizeMode='contain' defaultSource={BaseOutsideLogo}/>
                <Text  my='3' textAlign={'center'} fontSize={'2xl'} fontFamily={'heading'}>
                    Criar Conta
                </Text>

                <FormControl isInvalid={!!errors.name?.message}>

                <Controller 
                name='name' 
                control={control}
                rules={{
                    required:"Informe uma descrição"
                }}
                render={
                    ({field:{onChange,value}})=>(
                        <Input placeholder='nome'fontSize={'md'} autoCapitalize='none' onChangeText={onChange}  value={value} leftElement={<Text fontSize={20} pl='2'  textAlign='center' alignContent={'center'} justifyContent='center'  ><AntDesign name="user" color="gray" size={20}  /> </Text>} />
                        )
                    }/>    
                    <Text>
                        <FormControl.ErrorMessage>
                        {errors.name?.message}
                        </FormControl.ErrorMessage> 
                    </Text>
                </FormControl>
                
                <FormControl isInvalid={!!errors.email?.message}>

                <Controller
                name="email"
                control={control}
                
                render={({field:{onChange,value}})=>(
                    <Input placeholder='email'fontSize={'md'} autoCapitalize='none'  onChangeText={onChange}  value={value} leftElement={<Text fontSize={20} pl='2'  textAlign='center' alignContent={'center'} justifyContent='center'  ><Fontisto name="email" color="gray" size={20}/> </Text>}/>
                    )}
                    />
                    <Text>
                        <FormControl.ErrorMessage>
                        {errors.email?.message}
                        </FormControl.ErrorMessage> 
                    </Text>
                </FormControl >
                
                <FormControl isInvalid={!!errors.password?.message}>

                <Controller 
                    control={control}
                    name='password'
                    render={({field:{onChange,value}})=>(
                        <Input fontSize={'md'}  placeholder='senha' onChangeText={onChange}  value={value} secureTextEntry leftElement={<Text fontSize={20} pl='2'  textAlign='center' alignContent={'center'} justifyContent='center'  ><Fontisto style={{}} name="locked" color="gray" size={20}/> </Text>}/>
                        )}
                        />
                        <Text>
                            <FormControl.ErrorMessage>
                            {errors.password?.message}
                            </FormControl.ErrorMessage> 
                        </Text>
                </FormControl>
                
                <FormControl isInvalid={!!errors.password_confirm?.message}>

                <Controller 
                    control={control}
                    name='password_confirm'
                    render={({field:{onChange,value}})=>(
                        <Input fontSize={'md'}  placeholder='repita a senha' onChangeText={onChange}  value={value} secureTextEntry leftElement={<Text fontSize={20} pl='2'  textAlign='center' alignContent={'center'} justifyContent='center'  ><Fontisto style={{}} name="locked" color="gray" size={20}/> </Text>}/>
                        )}
                        />
                        <Text>
                        <FormControl.ErrorMessage>
                        {errors.password_confirm?.message}
                        </FormControl.ErrorMessage> 
                    </Text>
                </FormControl>


                    <Button width={'full'} colorScheme={'green'} my='2' onPress={handleSubmit(handleSignup)}>Entrar</Button>

                    <Button onPress={()=> navigate("SignIn")} width={'full'}  variant='outline' my='2'  colorScheme={'green'}>Voltar para o Login</Button>
                    <Text  color={'green.500'} fontWeight='bold'>Esqueceu sua senha? clique aqui</Text>
            </VStack>
</ScrollView>
    )
}