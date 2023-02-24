import { Box, Center, FlatList, HStack, Image, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { AxiosApi } from "../../../../Services/HandleData/ProvideServices/axios"
import { LoadingSpinner } from "../../../Shared/LoadingSpinner"
import searchEmpty from '../../../../assets/images/searchEmpty.jpg'
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
type ListAgentProps={
    name:string
}
export function ListAgents({name}:ListAgentProps){
    const [dataloading,setDataLoading]=useState(false)
    const [dataSearch,setdataSearch] = useState([] as DataAgentProps[])
    const [selectedList,setSelectedList] = useState('')
    function handleRenderList(item:string){
        //console.log(item)
    }
    
    async function handleSearchAgent(name:string){
        setDataLoading(true)
        if (!name){
            setdataSearch([])
            setDataLoading(false)
            return 
        }
        try{
            console.log('procurando=>',name)
            const response:ResponseAgentProps = await AxiosApi.get('agent/searchAgentsByname',{params:{name:name}})
            console.log(dataSearch)
            if(!response.data) {
                setdataSearch([])
            }else{
                setdataSearch(response.data)
            }
        }catch(e){
            Alert.alert('houve um error no carregamento de dados')
        }finally{
            setDataLoading(false)
        }
        
    }
    useEffect(()=>{
        handleSearchAgent(name)
        handleRenderList(selectedList)
        return ()=>{dataSearch}
    },[selectedList, name])
    return(
        <>
                    {
                dataloading?
                <LoadingSpinner/>
                :dataSearch.length===0?
                <Center p={5} ><Text color={'gray.500'}>Nenhuma informação encontrada</Text></Center>:
                <FlatList  
                data={dataSearch}
                keyExtractor={(item)=>(item.id)}
                renderItem={({item})=>(
                    <CardSearchAgent description={item?.description } id={item.id} image_profile={item.image_profile} name={item.name} />
                    )}
                    />
            }
        </>
    )
}



export function CardSearchAgent({description,id,image_profile,name}:DataAgentProps){
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