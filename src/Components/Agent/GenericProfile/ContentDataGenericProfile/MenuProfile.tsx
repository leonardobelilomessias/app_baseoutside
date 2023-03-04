import { HStack, Pressable, Text } from "native-base"
import { useEffect, useState } from "react"

export function  MenuProfile ({setChoiceMenu}:{setChoiceMenu:(state:string)=>void}){
    const [selected,setSelected] = useState('info')
    useEffect(()=>{
        setChoiceMenu(selected)
    },[selected])
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