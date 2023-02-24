import { Box, HStack, Image, Input, Pressable, Text, VStack ,FlatList, Center} from "native-base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { SearchList } from "../../Components/Agent/Search/SearchList";
import { SearchMenu } from "../../Components/Agent/Search/SearchMenu";
import { LoadingSpinner } from "../../Components/Shared/LoadingSpinner";
import { AxiosApi } from "../../Services/HandleData/ProvideServices/axios";
import SearchEmpty from '../../assets/images/searchInit.svg'

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
        //console.log(item)
    }
    
    async function handleSearch(name:string){
        console.log(name.length)
        setName(name)
        
    }
    useEffect(()=>{
        handleRenderList(selectedList)
        return ()=>{dataSearch}
    },[dataSearch,selectedList])
    
    return(
        <>
            <Box p='4' bgColor={'white'} m='3' rounded={'10'}>
                <Input _focus={{borderColor:'green.400',selectionColor:"green.400"}} placeholder="Buscar" textAlign={'center'} bgColor='gray.200'  outlineColor={'red'}  borderTopColor='red' onChangeText={(e)=>handleSearch(e)}/>
            </Box>
            <SearchMenu selectedListRenderList={setSelectedList}/>
            {
                name.length ===0?<Center p={10}   ><SearchEmpty fontSize={4} height={200} /> </Center>:
                
            <SearchList name={name} selectItem={selectedList}/>
            }
        </>
    )
}

function CardSearchAgent({description,id,image_profile,name}:DataAgentProps){
    return(
        <>
        <HStack bgColor={'white'} mx='3'  rounded={10} shadow='1'p='2' space={'5'} my='1' >
                <Image rounded={'full'} source={{uri:!!image_profile?`${baseUrlPhotAgent}/${image_profile}`:`${baseUrlPhotAgent}/user.png`}} alt='user photo' w={'20'} h='20'/>
                <VStack flex={1}>

                    <Text fontFamily={'heading'}>{name}</Text>
                    <Box >
                    <Text color={'gray.500'}>{ description?.substring(0,75)  }{description?.length>=74 &&  `...` }</Text>
                    </Box>
                </VStack>
            </HStack>
        </>
    )
}