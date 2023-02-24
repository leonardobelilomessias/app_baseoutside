import { Feather } from '@expo/vector-icons'; 
import { Pressable } from 'react-native';
export function MessageIcon(){
    return(
        <>
        <Pressable >
            <Feather name="send" size={24} color="black" />
        </Pressable>
        </>
    )
}