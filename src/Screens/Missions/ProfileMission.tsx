import { useRoute } from "@react-navigation/native";
import { Box, Center, ScrollView, Stack, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import ContentDataMissionProfile from "../../Components/Mission/Profile/ContentDataMissionProfile";
import DataHeaderProfileMission from "../../Components/Mission/Profile/DataHeaderProfileMission";
import PersonalDataMissionProfile from "../../Components/Mission/Profile/PersonalDataMissionProfile";
import { LoadingSpinner } from "../../Components/Shared/LoadingSpinner";
import { AxiosApi } from "../../Services/HandleData/ProvideServices/axios";

type IdAgentProps={
    id:string
}

export function ProfileMission(){
    const route = useRoute()
    const {id} = route.params as IdAgentProps
    const [mission,setMission] = useState({} as FetchProfileMission)
    const [loadingMission, setLoadingMission] = useState(false)
    async function fetchDataProfile(){
        try{
            setLoadingMission(true)
            const {data}   = await AxiosApi.get('/mission/profileMission',{params:{id_mission:id}})
            setMission(data)
            
            console.log(data)
        }catch(error){
            Alert.alert("erro ao buscar dados do usuario")
        }finally{
            setLoadingMission(false)
        }
    }
    useEffect(()=>{
        fetchDataProfile()
        return()=>{id}
    },[id])

    return(
        <ScrollView  >
            

            {
                loadingMission? 
                <Center flex={1} h='100%' m={'auto'}  mt='auto' alignItems={'center'} >
                    <LoadingSpinner/>
                </Center>
                
                :
                <>
                <DataHeaderProfileMission/>
                <PersonalDataMissionProfile mission={mission}/>
                <ContentDataMissionProfile/>
                </>
            }
            
        </ScrollView>
    )
}