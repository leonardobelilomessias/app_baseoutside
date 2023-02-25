import { HStack, Box, VStack,Text, Pressable } from "native-base";
import { useState } from "react";
import { ContentData } from "./ContentData";


function ContentDataMissionProfile() {

    return ( 
        <>
                    <MenuProfile />

                    <VStack bgColor={'white'} mx='2' p='4' rounded={10} shadow='2'>
                        <Box>
                            <Text fontFamily={'heading'}>Vocation</Text>
                            <Text color={'gray.700'}>Liderança</Text>
                        </Box>
                        <Box  >
                            <Text  color={'gray.700'} fontFamily={'heading'}>Skills</Text>
                            <Text>Desenvolvimento web e mobile, gestão de projetos sociais</Text>
                        </Box>
                        <Box  >
                            <Text  color={'gray.700'} fontFamily={'heading'}>Level</Text>
                            <Text>Iniciante</Text>
                        </Box>
                        <Box  >
                            <Text  color={'gray.700'} fontFamily={'heading'}>State</Text>
                            <Text>Constante</Text>
                        </Box>
                    </VStack>

                    <ContentData/>
                    

        </>
     );
}

function  MenuProfile (){
    const [selected,setSelected] = useState('info')
    return(
    <HStack m='1'>
        <Pressable bg={selected==='info'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10}  onPress={()=>setSelected('info')}>
            <Text color={selected==='info'?'green.400':'white'} textAlign={'center'}  p={2}>Info</Text>
        </Pressable>
        <Pressable bg={selected==='actions'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setSelected('actions')}>
            <Text  color={selected==='actions'?'green.400':'white'} textAlign={'center'}  p={2}>Açoes</Text>
        </Pressable>
        <Pressable bg={selected==='exclusive'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setSelected('exclusive')}>
            <Text  color={selected==='exclusive'?'green.400':'white'}textAlign={'center'}  p={2}>Exclusivo</Text>
        </Pressable>
    </HStack>
)}

export default ContentDataMissionProfile;