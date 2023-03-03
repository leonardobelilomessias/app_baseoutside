import { Box, HStack, Image, Input, Pressable, Text, VStack ,FlatList, Center} from "native-base";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { SearchList } from "../../Components/Agent/Search/SearchList";
import { SearchMenu } from "../../Components/Agent/Search/SearchMenu";


import SearchEmpty from '../../assets/images/searchInit.svg'
import { StartSearchEmpty } from "../../Components/Agent/Search/StartSearchEmpty";
import { useFocusEffect } from "@react-navigation/native";

type MenuProps={
selectedListRender?:any
}
type ResponseAgentProps={
    data:DataAgentProps[]
}
type DataAgentProps={
    id:string;
    name:string,
    image_profile:string,
    description:string
}

const baseUrlPhotAgent = 'https://baseoutside.s3.amazonaws.com/Agent'
const baseUrlPhotPublication = 'https://baseoutside.s3.amazonaws.com/PhotosPublications'
export function AgentSearch(){
    const [dataSearch,setdataSearch] = useState([] as DataAgentProps[])
    const [selectedList,setSelectedList] = useState('agent')
    const [name,setName] = useState('')
    function handleRenderList(item:string){

    }
    
    async function handleSearch(name:string){
        setName(name)
    }
    useFocusEffect(useCallback(()=>{
        setName('')
    },[]))
    useEffect(()=>{
        handleRenderList(selectedList)
        return ()=>{dataSearch}
    },[dataSearch,selectedList])
    
    return(
        <>
            <Box p='4' bgColor={'white'} m='3' rounded={'10'}>
                <Input _focus={{borderColor:'green.400',selectionColor:"green.400"}} placeholder="Buscar" value={name} textAlign={'center'} bgColor='gray.200'  outlineColor={'red'}  borderTopColor='red' onChangeText={(e)=>handleSearch(e)}/>
            </Box>
            <SearchMenu selectedListRenderList={setSelectedList}/>
            {
                name.length ===0?<StartSearchEmpty/>:
                
            <SearchList name={name} selectItem={selectedList}/>
            }
        </>
    )
}

