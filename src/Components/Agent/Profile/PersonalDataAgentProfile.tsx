import { HStack,Button, VStack, Box, Image, Text } from "native-base";
import { useDataAgent } from "../../../Hooks/UserContext";
import User from '../../../assets/images/userIcon.png'
import { useNavigation } from "@react-navigation/native";
import { NavigatotionAgentProps } from "../../../Routes/StackNavigation";
function PersonalDataAgentProfile() {
    const dataAgent = useDataAgent()
    const {navigate} = useNavigation<NavigatotionAgentProps>()
    return ( 
    <>
            <HStack space={'2'} p='4' m='2' bg='white' rounded={10} shadow='2' >
                    <VStack alignItems={'center'}>
                        <Box h='100' w='100' rounded={'full'}   >
                        <Image source={User }  resizeMode='contain' rounded={'full'} width='100%' h='100%' alt='user'></Image>
                        </Box>
                        <Text fontFamily={'heading'} fontSize='16'>field</Text>
                        <Text color={'gray.400'}>Status</Text>
                    </VStack>

                    <VStack flex={1}  >
                        
                        <Text fontFamily={'heading'} fontSize='20'>{dataAgent.name}</Text>
                        <Box h='20'>
                            <Text > {dataAgent.description} </Text>
                        </Box>
                        <HStack space={2}>
                            <Button size='sm'  bgColor={'green.500'} >
                                colab
                            </Button>
                            <Button flex={1} size='sm' bgColor={'green.500'} onPress={()=>{navigate('Sponsor')}}>
                                Sponsor
                            </Button>
                        </HStack>
                    </VStack>
                </HStack>
    </> );
}

export default PersonalDataAgentProfile;