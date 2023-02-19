import { Box, Center, Container, HStack, Image, ScrollView, Stack, Text, VStack } from "native-base";
import { useContext } from "react";
import { Posts } from "../../Components/Agent/FeedAgent/Posts";
import { AgentContext } from "../../Hooks/UserContext";
import  example from '../assets/images/BaseOutside.png'


export function Home(){
    const user = useContext(AgentContext)
        
    return(
        <>
        <ScrollView>
            
                <Posts/>
            
        </ScrollView>
        </>
    )

}