import { useRoute } from "@react-navigation/native";
import {VStack } from "native-base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import ContentDataGenericProfile from "../../Components/Agent/GenericProfile/ContentDataGenericProfile";
import DataHeaderGenericProfile from "../../Components/Agent/GenericProfile/DataHeaderGenericProfile";
import PersonalDataGenericProfile from "../../Components/Agent/GenericProfile/PersonalDataGenericProfile";
import { LoadingSpinner } from "../../Components/Shared/LoadingSpinner";
import { FindAgentDTO, FullAgentDTO } from "../../Dtos/AgentDTO/DataAgentDTO";
import { AxiosApi } from "../../Services/HandleData/ProvideServices/axios";

type IdAgentProps={
    id:string
}

export function GenericProfile() {
    console.log('renderizou')
    const route = useRoute()
    const {id} = route.params as IdAgentProps
    const [agent,setAgent] = useState({} as FullAgentDTO)
    const [loadingAgent,setLoadingAgent] = useState(false)
    async function fetchDataProfile(){
        try{
            setLoadingAgent(true)
            const response   = await AxiosApi.get('/agent/fetchAgentProfile',{params:{id_agent:id}})
            
            setAgent(response.data)
            
            setLoadingAgent(false)

        }catch(error){
            Alert.alert("erro ao buscar dados do usuario")
            setLoadingAgent(false)
        }finally{
        }
    }
    useEffect(()=>{
        fetchDataProfile()
        return()=>{id}
    },[id])

    return (
        <>
        {loadingAgent?
        <LoadingSpinner/>:

            <VStack >
                {/*  Header on top with data  */}
                <DataHeaderGenericProfile agent={agent} />
                {  /*  Personal data of agent authenticaded  */}
                <PersonalDataGenericProfile agent={agent} />
                {  /*  Geral data of agent authenticaded  */}
                <ContentDataGenericProfile  agent={agent} />
            </VStack>
        }
        </>
    )

}