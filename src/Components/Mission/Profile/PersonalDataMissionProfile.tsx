import { HStack, Button, VStack, Box, Image, Text, Pressable, Stack } from "native-base";
import { useDataAgent } from "../../../Contexts/UserContext";
import User from '../../../assets/images/userIcon.png'
import { useNavigation } from "@react-navigation/native";
import { NavigatotionAgentProps } from "../../../Routes/StackNavigation";
import { Feather } from '@expo/vector-icons';

type DataMission = {
    mission:FetchProfileMission
}
function PersonalDataMissionProfile({mission}:DataMission) {
    const bucketS3 = `https://baseoutside.s3.amazonaws.com/Agent`
    const { navigate } = useNavigation<NavigatotionAgentProps>()
    return (
        <>
            <Stack space={'2'} p='4' m='2' bg='white' rounded={10} shadow='2'  >
                <VStack alignItems={'center'}>
                    <Box h='100' w='100'>
                        <Image source={ User } resizeMode='contain' rounded={'full'} width='100%' h='100%' alt='user'></Image>
                    </Box>
                    <Text fontFamily={'heading'} fontSize='16'>{mission.name}</Text>
                    <Text color={'gray.400'}>state</Text>
                </VStack>

                <VStack  >

                    <Box h='24' mx='5' >
                        <Text >{mission.description}</Text>
                    </Box>
                    <HStack space={2}>
                        <Button  flex={1} size='sm' bgColor={'green.500'} >
                            colab
                        </Button>
                        <Button flex={2} size='sm' bgColor={'green.500'} onPress={() => { navigate('Sponsor') }}>
                            Sponsor
                        </Button>
                    </HStack>
                </VStack>
            </Stack>
        </>);
}

export default PersonalDataMissionProfile;