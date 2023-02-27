import { HStack, VStack,Text } from "native-base";
import React, { useState } from "react";
import { FullAgentDTO } from "../../../Dtos/AgentDTO/DataAgentDTO";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";

type DataHeaderProps ={
    agent:FullAgentDTO
}
function DataHeaderGenericProfile({agent}:DataHeaderProps) {
    const [missions,setMissions] = useState("0")


    return ( 
    <>
        <HStack justifyContent={'space-around'} rounded='10' m='2' p='4' bgColor={'white'} shadow='2' >
            {
                !agent.missions?
                <LoadingSpinner/>:
                <>
                    <ItemsTop label="Missões" amount={agent.missions.length.toString()}/>
                    <ItemsTop label="Ações" amount={agent.actions.length.toString()}/>
                    <ItemsTop label='Tasks' amount={agent.tasks.length.toString()}/>
                    <ItemsTop label="Flags" amount={'15'}/>    
                </>
            }
        </HStack>
    </>
     );    
}
const ItemsTop = ({amount,label}:{amount:string,label:string})=>
<VStack alignContent={'center'} justifyContent='center' justifyItems={'center'} >
<Text textAlign={'center'} fontSize='20'>
    {amount}
</Text>
<Text textAlign={'center'} fontFamily={'heading'}>
    {label}
</Text>
</VStack>
export default DataHeaderGenericProfile;  