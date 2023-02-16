import { Box, Center, Container, HStack, Image, ScrollView, Stack, Text, VStack } from "native-base";
import { useContext } from "react";
import  example from '../assets/images/BaseOutside.png'
import { AgentContext } from "../Hooks/UserContext";

export function Home(){
    const user = useContext(AgentContext)
        console.log(user.name)
    return(
        <>
        <ScrollView>


        <Stack>
            <HStack m='1'>
                <Box bg={'white'} flex={1} m='1' shadow='2' rounded={10}>
                    <Text color={"green.400"} textAlign={'center'}  p={2}>Geral</Text>
                </Box>
                <Box bg={'gray.300'} flex={1} m='1' shadow='2' rounded={10}>
                    <Text  color={"white"} textAlign={'center'}  p={2}>Colabs</Text>
                </Box>
                <Box bg={'gray.300'} flex={1} m='1' shadow='2' rounded={10}>
                    <Text  color={"white"} textAlign={'center'}  p={2}>Sponsor</Text>
                </Box>
            </HStack>
            <VStack  bgColor={'white'} m={4} p='4'  bg='white' rounded={'14'} space={4} shadow='1'  >
                <HStack alignItems={'center'}>
                    <Box bg='gray.200' h='10' rounded={'full'} w='10' mx='2'></Box>
                    <Text  fontFamily={'heading'}>User Example</Text>
                </HStack>
                <Box>
                    <Image source={example} width='100%' resizeMode='cover' alt='example'></Image>
                </Box>
                <Text >Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam
                    ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.
                </Text>
            </VStack>


            <VStack  bgColor={'white'} m={4} p='4'  bg='white' rounded={'14'} space={4} >
                <HStack alignItems={'center'}>
                    <Box bg='gray.200' h='10' rounded={'full'} w='10' mx='2'></Box>
                    <Text  fontFamily={'heading'}>User Example</Text>
                </HStack>
                <Box>
                    <Image source={example} width='100%' resizeMode='cover' alt='example'></Image>
                </Box>
                <Text >Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam
                    ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.
                </Text>
            </VStack>
        </Stack>
        </ScrollView>
        </>
    )

}