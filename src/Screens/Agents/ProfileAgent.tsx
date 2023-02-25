import { Box, Button, Center, Container, HStack, Image, ScrollView, Stack, Text, VStack } from "native-base";
import { ImageSourcePropType } from "react-native";
import { Use } from "react-native-svg";
import ContentDataAgentProfile from "../../Components/Agent/Profile/ContentDataAgentProfile";
import DataHeaderProfileAgent from "../../Components/Agent/Profile/DataHeaderProfile";
import PersonalDataAgentProfile from "../../Components/Agent/Profile/PersonalDataAgentProfile";
import { useDataAgent } from "../../Contexts/UserContext";



export function ProfileAgent() {
    const {dataAgent} = useDataAgent()

    return (
        <ScrollView>
            <VStack >
                {/*  Header on top with data  */}
                <DataHeaderProfileAgent agent={dataAgent} />
                {  /*  Personal data of agent authenticaded  */}
                <PersonalDataAgentProfile />
                {  /*  Geral data of agent authenticaded  */}
                <ContentDataAgentProfile />
            </VStack>
        </ScrollView>
    )

}