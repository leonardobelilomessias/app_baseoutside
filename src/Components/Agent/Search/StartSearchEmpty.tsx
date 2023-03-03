import { Center, Text } from "native-base";



import SearchEmpty from '../../../assets/images/searchInit.svg'
export function StartSearchEmpty(){
    return(
        <Center  flex={1}  p='5' > 
        <SearchEmpty fontSize={4} height={200} /> 
        <Text color={'emerald.500'} textAlign='center'>Pesquise por agents, missões ou tarefas que você tem interesse. </Text>
        </Center>
    )
}