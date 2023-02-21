import { useRoute } from "@react-navigation/native";
import { Box, Button, Center, Container, HStack, Image, Stack, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Alert, ImageSourcePropType } from "react-native";
import { Use } from "react-native-svg";
import ContentDataGenericProfile from "../../Components/Agent/GenericProfile/ContentDataGenericProfile";
import DataHeaderGenericProfile from "../../Components/Agent/GenericProfile/DataHeaderGenericProfile";
import PersonalDataGenericProfile from "../../Components/Agent/GenericProfile/PersonalDataGenericProfile";
import ContentDataAgentProfile from "../../Components/Agent/Profile/ContentDataAgentProfile";
import DataHeaderProfileAgent from "../../Components/Agent/Profile/DataHeaderProfile";
import PersonalDataAgentProfile from "../../Components/Agent/Profile/PersonalDataAgentProfile";
import { useDataAgent } from "../../Contexts/UserContext";
import { FindAgentDTO } from "../../Dtos/AgentDTO/DataAgentDTO";
import { AxiosApi } from "../../Services/HandleData/ProvideServices/axios";

type IdAgentProps={
    id:string
}

export function GenericProfile() {
    const dataAgent = useDataAgent()
    const route = useRoute()
    const {id} = route.params as IdAgentProps
    const [agent,setAgent] = useState({} as FindAgentDTO)
    const [loadingAgent,setLoadingAgent] = useState(false)

    async function fetchDataProfile(){
        try{
            setLoadingAgent(true)
            const {data}   = await AxiosApi.post('/agent/findAgentById',{id_agent:id})
            setAgent(data)
            

        }catch(error){
            Alert.alert("erro ao buscar dados do usuario")
        }finally{
            setLoadingAgent(false)
        }
    }
    useEffect(()=>{
        fetchDataProfile()
    },[])

    return (
        <>
            <VStack >
                {/*  Header on top with data  */}
                <DataHeaderGenericProfile/>
                {  /*  Personal data of agent authenticaded  */}
                <PersonalDataGenericProfile agent={agent} />
                {  /*  Geral data of agent authenticaded  */}
                <ContentDataGenericProfile />
            </VStack>
        </>
    )

}