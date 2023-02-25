import { HStack, Button, VStack, Box, Image, Text, Pressable } from "native-base";
import { useDataAgent } from "../../../Contexts/UserContext";
import User from '../../../assets/images/userIcon.png'
import { useNavigation } from "@react-navigation/native";
import { NavigatotionAgentProps } from "../../../Routes/StackNavigation";
import { Feather } from '@expo/vector-icons';
import { FindAgentDTO } from "../../../Dtos/AgentDTO/DataAgentDTO";

type PersonalDataAgentProps={
    agent:FindAgentDTO
}
function PersonalDataGenericProfile({agent}:PersonalDataAgentProps) {
    const { dataAgent } = useDataAgent()
    const bucketS3 = `https://baseoutside.s3.amazonaws.com/Agent`

    const { navigate } = useNavigation<NavigatotionAgentProps>()
    return (
        <>
            <HStack space={'2'} p='4' m='2' bg='white' rounded={10} shadow='2' >
                <VStack alignItems={'center'}>
                    <Box h='100' w='100' rounded={'full'}   >
                        <Image source={{ uri: agent.image_profile ? `${bucketS3}/${agent?.image_profile}` : `${bucketS3}/user.png` }} resizeMode='contain' rounded={'full'} width='100%' h='100%' alt='user'></Image>
                    </Box>
                    <Text fontFamily={'heading'} fontSize='16'>{!!agent.vocation? agent.vocation:'Geral'}</Text>
                    <Text color={'gray.400'}>{dataAgent.state === 0 ? 'iniciante' : 'experiente'}</Text>
                </VStack>

                <VStack flex={1} ml='1' >
                    <HStack alignContent={"space-between"} justifyContent='space-between' >
                        <Text fontFamily={'heading'} fontSize='20'>{agent.name}</Text>
                                                                    {/* this dataagent is passing data of agent logged isnt route */}
                        {dataAgent.id===agent.id &&
                         <Pressable onPress={() => { navigate('EditProfile', { dataAgent }) }}>
                            <Feather name="edit" size={20} color="black" />
                        </Pressable>
                        }
                    </HStack>
                    <Box h='20'>
                        <Text > {agent.description} </Text>
                    </Box>
                    <HStack space={2}>
                        <Button size='sm' bgColor={'green.500'} >
                            colab
                        </Button>
                        <Button flex={1} size='sm' bgColor={'green.500'} onPress={() => { navigate('Sponsor') }}>
                            Sponsor
                        </Button>
                    </HStack>
                </VStack>
            </HStack>
        </>);
}

export default PersonalDataGenericProfile;