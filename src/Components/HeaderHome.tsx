import { HStack, Text } from "native-base";
import { Feather } from '@expo/vector-icons';
import { Pressable } from "react-native";

export function HeaderHome(){
    return(
        <>
        <HStack alignContent={'center'} alignItems='center' space={3}>
        <Pressable>
        <Feather name="menu" size={24} color="black" />
        </Pressable>
        <Text fontSize={20} fontFamily={'heading'} >BaseOutside</Text>
        </HStack>
        </>
    )
}