import { Text } from "native-base";
import { FullAgentDTO } from "../../../../../Dtos/AgentDTO/DataAgentDTO";
import { ExclusiveDate } from "./ExclusiveData";
import { InfoContentProfile } from "./InfoContentProfile";

type ContentProfileProps={
    agent:FullAgentDTO
    choiceMenu:string
}
export function  ContentProfile({agent,choiceMenu}:ContentProfileProps){

        switch(choiceMenu){
            case 'journey':
            return <Text>Journey</Text>
            case 'exclusive':
            return <ExclusiveDate/>
            case 'info':
            return <InfoContentProfile agent={agent}/>
            default:
            return <InfoContentProfile agent={agent}/>
        }
}