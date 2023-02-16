import { HStack, Box, VStack,Text, Pressable } from "native-base";
import { useState } from "react";

function ContentDataAgentProfile() {

    return ( 
        <>
                    <MenuProfile />

                    <VStack bgColor={'white'} mx='2' p='4' rounded={10} shadow='2'>
                        <Box>
                            <Text fontFamily={'heading'}>Vocation</Text>
                            <Text>Example vocation</Text>
                        </Box>
                        <Box  >
                            <Text fontFamily={'heading'}>Skills</Text>
                            <Text>Example vocation</Text>
                        </Box>
                        <Box  >
                            <Text fontFamily={'heading'}>Level</Text>
                            <Text>Example vocation</Text>
                        </Box>
                        <Box  >
                            <Text fontFamily={'heading'}>state</Text>
                            <Text>Example vocation</Text>
                        </Box>
                    </VStack>

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
        <Pressable bg={selected==='journey'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setSelected('journey')}>
            <Text  color={selected==='journey'?'green.400':'white'} textAlign={'center'}  p={2}>Jornada</Text>
        </Pressable>
        <Pressable bg={selected==='exclusive'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setSelected('exclusive')}>
            <Text  color={selected==='exclusive'?'green.400':'white'}textAlign={'center'}  p={2}>Exclusive</Text>
        </Pressable>
    </HStack>
)}

export default ContentDataAgentProfile;