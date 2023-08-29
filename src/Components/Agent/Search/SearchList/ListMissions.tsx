import { useNavigation } from "@react-navigation/native"
import { Box, Center, FlatList, HStack, Image, Pressable, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { NavigatotionAgentProps } from "../../../../Routes/StackNavigation"
import { AxiosApi } from "../../../../Services/HandleData/ProvideServices/axios"
import { LoadingSpinner } from "../../../Shared/LoadingSpinner"

type ListMissionsProps={
    name:string
}
type DataMissionProps={
    id:string;
    name:string,
    image_profile:string,
    description:string
}
type ResponseMissionProps={
    data:DataMissionProps[]
}
const baseUrlPhotAgent = `${process.env.host}/images/hand.jpg`
export function ListMission({name}:ListMissionsProps){
    const [dataloading,setDataLoading]=useState(false)
    const [dataSearch,setdataSearch] = useState([] as DataMissionProps[])
    const [selectedList,setSelectedList] = useState('')
    
    async function handleSearchAgent(name:string){
        setDataLoading(true)
        if (!name){
            setdataSearch([])
            setDataLoading(false)
            return 
        }
        try{
            const response:ResponseMissionProps = await AxiosApi.get('mission/searchMissionsByname',{params:{name:name}})
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
        //handleRenderList(selectedList)
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
                    <CardSearchMission description={item?.description } id={item.id} image_profile={item.image_profile} name={item.name} />
                    )}
                    />
            }
        </>
    )
}


export function CardSearchMission({description,id,image_profile,name}:DataMissionProps){
    const navigation = useNavigation<NavigatotionAgentProps>()
    return(
        <Pressable onPress={()=>{navigation.navigate("GenericMissionProfile",{id})}}>
        <HStack bgColor={'white'} mx='3'  rounded={10} shadow='1'p='2' space={'5'} my='1' >
                <Image rounded={'full'} source={{uri:!!image_profile?`${baseUrlPhotAgent}/${image_profile}`:`${baseUrlPhotAgent}/user.png`}} alt='user photo' w={'20'} h='20'/>
                <VStack flex={1}>

                    <Text fontFamily={'heading'}>{name}</Text>
                    <Box >
                    <Text color={'gray.500'}>{ description?.substring(0,75)  }{description?.length>=74 &&  `...` }</Text>
                    </Box>
                </VStack>
            </HStack>
        </Pressable>
    )
}