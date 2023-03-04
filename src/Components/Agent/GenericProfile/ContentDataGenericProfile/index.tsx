import { HStack, Box, VStack,Text, Pressable } from "native-base";
import { useEffect, useState } from "react";
import { FindAgentDTO, FullAgentDTO } from "../../../../Dtos/AgentDTO/DataAgentDTO";
import ContentDataAgentProfile from "../../Profile/ContentDataAgentProfile";
import { ContentProfile } from "./ContentProfile";
import { MenuProfile } from "./MenuProfile";

type ContentDataGenericProfileProps = {
    agent:FullAgentDTO
}
function ContentDataGenericProfile({agent}:ContentDataGenericProfileProps) {
    const [choiceMenu,setChoiceMenu] = useState('info')
    useEffect(()=>{
        console.log(choiceMenu)
    },[choiceMenu])
    return ( 
        <>
                <MenuProfile  setChoiceMenu={setChoiceMenu} />

                <ContentProfile agent={agent} choiceMenu={choiceMenu}/>

        </>
     );
}


export default ContentDataGenericProfile;