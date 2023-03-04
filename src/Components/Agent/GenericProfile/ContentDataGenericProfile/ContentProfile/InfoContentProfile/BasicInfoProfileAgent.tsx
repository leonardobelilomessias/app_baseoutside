import { Box, Text, VStack } from "native-base"
import { FullAgentDTO } from "../../../../../../Dtos/AgentDTO/DataAgentDTO"

type InfoContentProfileProps={
    agent:FullAgentDTO
}
export function BasicInfoProfileAgent({agent}:InfoContentProfileProps){
    console.log(agent.skills?.length > 0)
    return(
        <VStack bgColor={'white'} mx='2' p='4' rounded={10} shadow='2'>
        {!!agent.description &&
            <Box h='20'>
                <Text fontFamily={'heading'}>Description</Text>
                <Text > {agent.description} </Text>
            </Box>
        }
        <Box>
            <Text fontFamily={'heading'}>Vocation</Text>
            <Text color={'warmGray.400'}>{!!agent.vocation? agent.vocation:`${agent.name} ainda não definiu sua vocação`}</Text>
        </Box>
        <Box  >
            <Text fontFamily={'heading'}>Skills</Text>
            <Text color={'warmGray.400'}>{agent.skills?.length >0? agent.skills:`${agent.name} ainda não compartilhou nenhuma habilidade`}</Text>
        </Box>
        <Box  >
            <Text fontFamily={'heading'}>Level</Text>
            <Text color={'warmGray.400'}>{!!agent.level? agent.vocation:`Sem informações suficientes sobre o level de ${agent.name} `}</Text>
        </Box>
        <Box  >
            <Text fontFamily={'heading'}>State</Text>
            <Text color={'warmGray.400'}>{!!agent.state? agent.state:" indefinido"}</Text>
        </Box>
    </VStack>

    )
}