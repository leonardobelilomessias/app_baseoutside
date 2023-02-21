import { HStack, VStack,Text } from "native-base";
import React from "react";


function DataHeaderGenericProfile() {
    return ( 
    <>
        <HStack justifyContent={'space-around'} rounded='10' m='2' p='4' bgColor={'white'} shadow='2' >
                    <ItemsTop label="Missões" amount="3"/>
                    <ItemsTop label="Ações" amount="15"/>
                    <ItemsTop label='Tasks' amount="22"/>
                    <ItemsTop label="Flags" amount="14"/>    
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