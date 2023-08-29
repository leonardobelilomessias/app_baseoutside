
import { Box, Center, FlatList, HStack, Image, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { AxiosApi } from "../../../../Services/HandleData/ProvideServices/axios"
import { LoadingSpinner } from "../../../Shared/LoadingSpinner"

type ListActionsProps={
    name:string
}
type DataActionProps={
    id:string;
    name:string,
    image_profile:string,
    description:string
}
type ResponseActionProps={
    data:DataActionProps[]
}
const baseUrlPhotAgent = `${process.env.host}/images/hand.jpg`
export function ListActions({name}:ListActionsProps){
    const [dataloading,setDataLoading]=useState(false)
    const [dataSearch,setdataSearch] = useState([] as DataActionProps[])
    const [selectedList,setSelectedList] = useState('')
    function handleRenderList(item:string){
    }
    
    async function handleSearchAgent(name:string){
        setDataLoading(true)
        if (!name){
            setdataSearch([])
            setDataLoading(false)
            return 
        }
        try{
            const response:ResponseActionProps = await AxiosApi.get('/action/searchActionsByName',{params:{name:name}})
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
                <Center p={5}  ><Text color={'gray.500'}>Nenhuma informação encontrada</Text></Center>:
                <FlatList  
                data={dataSearch}
                keyExtractor={(item)=>(item.id)}
                renderItem={({item})=>(
                <CardSearchActions description={item?.description } id={item.id} image_profile={item.image_profile} name={item.name} />
        )}
        />
}
</>
    )
}

export function CardSearchActions({description,id,image_profile,name}:DataActionProps){
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