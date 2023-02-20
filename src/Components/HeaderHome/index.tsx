import { HStack, Text } from "native-base";
import { Feather } from '@expo/vector-icons';
import { Pressable } from "react-native";
import { ModalMenu } from "../Agent/ModalMenu";
import { useState } from "react";

export function HeaderHome(){
    const [showModal, setShowModal] = useState(false);
    return(
        <>
        <HStack alignContent={'center'} alignItems='center' space={3}>
        <Pressable onPress={()=>setShowModal(true)}>
        <Feather name="menu" size={24} color="black" />
        </Pressable>
        <Text fontSize={20} fontFamily={'heading'} >BaseOutside</Text>
        <ModalMenu showModal={showModal} setShowModal={setShowModal}/>
        </HStack>
        </>
    )
}