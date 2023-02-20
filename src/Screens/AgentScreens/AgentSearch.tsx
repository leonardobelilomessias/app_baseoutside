import { Box, HStack, Input, Pressable, Text } from "native-base";
import { useEffect, useState } from "react";

type MenuProps={
selectedListRender?:any
}
export function AgentSearch(){
    return(
        <>
            <Box p='4' bgColor={'white'} m='3' rounded={'10'}>
                <Input _focus={{borderColor:'green.400',selectionColor:"green.400"}} placeholder="Buscar" textAlign={'center'} bgColor='gray.200'  outlineColor={'red'}  borderTopColor='red'/>
            </Box>
            <MenuFeed/>
        </>
    )
}

function  MenuFeed ({selectedListRender}:MenuProps){
    const [itemMenuSelected,setItemMenuSelected] = useState('geral')
    useEffect(()=>{
        //selectedListRender(itemMenuSelected)
    },[itemMenuSelected])
    
    return(
    <HStack m='1'>
        <Pressable bg={itemMenuSelected==='geral'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10}  onPress={()=>setItemMenuSelected('geral')}>
            <Text color={itemMenuSelected==='geral'?'green.400':'white'} textAlign={'center'}  >Geral</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='agents'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('agents')}>
            <Text  color={itemMenuSelected==='agents'?'green.400':'white'} textAlign={'center'}  >Agents</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='missions'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('missions')}>
            <Text  color={itemMenuSelected==='missions'?'green.400':'white'}textAlign={'center'}  >Missoes</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='actions'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('actions')}>
            <Text  color={itemMenuSelected==='actions'?'green.400':'white'}textAlign={'center'}  >Açoes</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='tasks'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('tasks')}>
            <Text  color={itemMenuSelected==='tasks'?'green.400':'white'}textAlign={'center'}  >Tasks</Text>
        </Pressable>
    </HStack>
)}