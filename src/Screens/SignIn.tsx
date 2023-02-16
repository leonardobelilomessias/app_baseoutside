import {Box, Button, Center, Flex, HStack, Image, Input, KeyboardAvoidingView, ScrollView, Stack, Text, VStack} from 'native-base'
import BaseOutsideLogo from '../assets/images/BaseOutside.png'
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../Routes/auth.routes';
export function SignIn(){
    const {navigate} = useNavigation<AuthNavigatorRoutesProps>()
    return(
    <ScrollView width={'full'} flex={1} contentContainerStyle={{flexGrow:1, justifyContent:"center",alignItems:'center',}} showsVerticalScrollIndicator={false} >
        <VStack alignContent={'center'} alignItems='center' justifyContent={'center'} flex={1}  width={'100%'} px='10' space='6' >
            <Image  source={BaseOutsideLogo} alt='logo' resizeMode='contain' defaultSource={BaseOutsideLogo}
            />
            <Text textAlign={'center'} fontSize={'2xl'} fontFamily={'heading'}>
                Entrar
            </Text>
            <Input placeholder='email'fontSize={'md'} autoCapitalize='none' leftElement={<Text fontSize={20} pl='2'  textAlign='center' alignContent={'center'} justifyContent='center'  ><Fontisto style={{}} name="email" color="gray" size={20}/> </Text>}/>
            <Input fontSize={'md'}  placeholder='senha' secureTextEntry leftElement={<Text fontSize={20} pl='2'  textAlign='center' alignContent={'center'} justifyContent='center'  ><Fontisto style={{}} name="locked" color="gray" size={20}/> </Text>}/>
            <Button width={'full'} colorScheme={'green'}>Entrar</Button>
            <Button onPress={()=>{navigate("SignUp")}} width={'full'} variant='outline' colorScheme={'green'}>Criar conta</Button>
            <Text  color={'green.500'} fontWeight='bold'>Esqueceu sua senha? clique aqui</Text>
        </VStack>

</ScrollView>
    )
}