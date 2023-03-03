import { HStack,Pressable,Text } from "native-base"
import { useState, useEffect } from "react"

type MenuProps={
    selectedListRenderList?:any
    }

export function  SearchMenu({selectedListRenderList}:MenuProps){
    const [itemMenuSelected,setItemMenuSelected] = useState('agent')
    useEffect(()=>{
        selectedListRenderList(itemMenuSelected)
    },[itemMenuSelected])
    
    return(
    <HStack m='1'>

        <Pressable bg={itemMenuSelected==='agent'?'white':'gray.300'} flex={1} m='1'  py='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('agent')}>
            <Text  color={itemMenuSelected==='agent'?'green.400':'white'} textAlign={'center'}  >Agents</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='mission'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('mission')} py='1'>
            <Text  color={itemMenuSelected==='mission'?'green.400':'white'}textAlign={'center'}  >Missoes</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='action'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('action')} py='1'>
            <Text  color={itemMenuSelected==='action'?'green.400':'white'}textAlign={'center'}  >Açoes</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='task'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('task')} py='1'>
            <Text  color={itemMenuSelected==='task'?'green.400':'white'}textAlign={'center'}  >Tasks</Text>
        </Pressable>
    </HStack>
)}

