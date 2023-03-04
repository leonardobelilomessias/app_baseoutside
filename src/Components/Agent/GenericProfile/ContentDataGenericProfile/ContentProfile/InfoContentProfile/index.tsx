import { Box, Text, VStack } from "native-base";
import { FullAgentDTO } from "../../../../../../Dtos/AgentDTO/DataAgentDTO";
import { BasicInfoProfileAgent } from "./BasicInfoProfileAgent";
import { ChartsDataProfileAgent } from "./ChartsDataProfileAgent";


type InfoContentProfileProps={
    agent:FullAgentDTO
}
export function InfoContentProfile({agent}:InfoContentProfileProps){
    return(
        <VStack>
            <BasicInfoProfileAgent agent={agent}/>
            <ChartsDataProfileAgent/>
        </VStack>

    )
}