import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import { useState } from "react";
import  example from '../../../assets/images/BaseOutside.png'
import ImageUser from '../../../assets/images/userIcon.png'

export function Posts() {
    return ( 
        <>
            <MenuFeed/>
            <RenderPosts/>
            <RenderPosts/>
        </>
     );
}

function  MenuFeed (){
    const [selected,setSelected] = useState('info')
    return(
    <HStack m='1'>
        <Pressable bg={selected==='info'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10}  onPress={()=>setSelected('info')}>
            <Text color={selected==='info'?'green.400':'white'} textAlign={'center'}  p={2}>Info</Text>
        </Pressable>
        <Pressable bg={selected==='journey'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setSelected('journey')}>
            <Text  color={selected==='journey'?'green.400':'white'} textAlign={'center'}  p={2}>Jornada</Text>
        </Pressable>
        <Pressable bg={selected==='exclusive'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setSelected('exclusive')}>
            <Text  color={selected==='exclusive'?'green.400':'white'}textAlign={'center'}  p={2}>Exclusive</Text>
        </Pressable>
    </HStack>
)}

function RenderPosts(){
    
    return(
        <>
            <VStack  bgColor={'white'} m={4} p='4'  bg='white' rounded={'14'} space={4} shadow='1'  >
                <HStack alignItems={'center'}>
                    <Box bg='gray.200' h='10' rounded={'full'} w='10' mx='2'>
                        <Image source={ImageUser} alt='image agent' width={'100%'} height='100%' borderWidth={'1'}  borderColor='gray.400' rounded={'full'}/>
                    </Box>
                    <Text  fontFamily={'heading'}>User Example</Text>
                </HStack>
                <Box>
                    <Image source={example} width='100%' height={'250px'} resizeMode='contain' alt='example'></Image>
                </Box>
                <Text >Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam
                    ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.
                </Text>
            </VStack>
        </>
    )
}
const fakeDataAgent = [{agent:'',publication:{ image:'', description:'Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.'}}]