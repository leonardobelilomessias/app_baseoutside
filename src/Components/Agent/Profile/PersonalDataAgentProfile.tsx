import { HStack, Button, VStack, Box, Image, Text, Pressable, Center } from "native-base";
import { useDataAgent } from "../../../Contexts/UserContext";
import User from '../../../assets/images/userIcon.png'
import { useNavigation } from "@react-navigation/native";
import { NavigatotionAgentProps } from "../../../Routes/StackNavigation";
import { Feather } from '@expo/vector-icons';
function PersonalDataAgentProfile() {

    const { dataAgent } = useDataAgent()
    const bucketS3 = `${process.env.host}/images/hand.jpg`
    const { navigate } = useNavigation<NavigatotionAgentProps>()
    return (
        <>
            <VStack  p='4' m='2'  >
                <VStack alignItems={'center'}>
                    <Center backgroundColor={'red.300'} size={'xl'} >
                    <Image  resizeMode="cover"  source={{
                        uri: "http://192.168.15.169:3333/images/hand.jpg"
                        }} alt="Alternate Text" size="xl" rounded={'full'} />
                                         <Pressable position={'absolute'} bottom={'0'} right={'0'} onPress={() => { navigate('EditProfile', { dataAgent }) }}>
                            <Feather name="edit" size={20} color="black"  />
                        </Pressable>
                    </Center>
                    <Text fontFamily={'heading'} fontSize='25'p={0}m={'0'}>
                            {dataAgent.name}
                            
                    </Text>
                    <Text color={'gray.400'} fontSize={'xs'} fontWeight={'bold'}>
                        {dataAgent.vocation?dataAgent.vocation:"Generico"}
                    </Text>
                    <HStack space={2}>
                        <Button width={135} h={35} bgColor={'green.500'} borderRadius={'full'} >
                            colab
                        </Button>
                        <Button  width={135} borderRadius={'full'}  colorScheme={'green.500'} variant={'outline'} color={'red.500'} onPress={() => { navigate('Sponsor') }}>
                            Sponsor
                        </Button>
                    </HStack>

                </VStack>

                <VStack  >
                    <HStack alignContent={"space-between"} justifyContent='space-between' >
         
       
                    </HStack>
                    <Box h='20'>
                        <Text >{dataAgent.description}</Text>
                    </Box>

                </VStack>
            </VStack>
        </>);
}

export default PersonalDataAgentProfile;