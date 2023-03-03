import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import {VStack } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import ContentDataGenericProfile from "../../Components/Agent/GenericProfile/ContentDataGenericProfile";
import DataHeaderGenericProfile from "../../Components/Agent/GenericProfile/DataHeaderGenericProfile";
import PersonalDataGenericProfile from "../../Components/Agent/GenericProfile/PersonalDataGenericProfile";
import { LoadingSpinner } from "../../Components/Shared/LoadingSpinner";
import { useDataAgent } from "../../Contexts/UserContext";
import { FindAgentDTO, FullAgentDTO } from "../../Dtos/AgentDTO/DataAgentDTO";
import { AxiosApi } from "../../Services/HandleData/ProvideServices/axios";
import { AppError } from "../../Utils/AppError";

type IdAgentProps={
    id:string
}

export function GenericProfile() {
    const {setOptions,}= useNavigation()
    const route = useRoute()
    const {id} = route.params as IdAgentProps
    const [agent,setAgent] = useState({} as FullAgentDTO)
    const [loadingAgent,setLoadingAgent] = useState(false)
    const {handleLogout} = useDataAgent()
    async function fetchDataProfile(){
        try{
            setLoadingAgent(true)
            const response   = await AxiosApi.get('/agent/fetchAgentProfile',{params:{id_agent:id}})
            setAgent(response.data)
            setLoadingAgent(false)

        }catch(error ){
            if(error instanceof AppError && error.message ==='internal server error - TokenExpiredError: jwt expired'){

                handleLogout()
            }
            Alert.alert("erro ao buscar dados do usuario")
            setLoadingAgent(false)
        }finally{
        }
    }
    useFocusEffect(useCallback(()=>{
        return setOptions({title:agent.name})
    },[agent]))
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