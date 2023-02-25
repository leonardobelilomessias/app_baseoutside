import { Box, Center, CheckIcon, Divider, HStack, Icon, Pressable, Select, Text, TextArea, VStack,IIconProps, ScrollView } from "native-base";
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons'; 
import { SvgProps } from "react-native-svg";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


export function DefaultQuote(){
    const [service, setService] = useState("");
    return(
    <ScrollView>
        <VStack p='4' m='4'bgColor={'white'} space={4}  rounded='10' shadow={'2'} >
            <TextArea fontSize={'md'} autoCompleteType={'none'} h={150} placeholder='Sobre oque você está pensando?'/>
            <HStack alignItems={'center'} alignContent={'center'} justifyContent='space-between'>
            
                <Box maxW="200" flex={0} p={0} >
                    <Select  py='0' selectedValue={service} minWidth="110" accessibilityLabel="Geral" placeholder="Geral" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="1" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="Geral" value="geral" />
                    <Select.Item label="Sponsors" value="sponsors" />
                    <Select.Item label="Colabs" value="colabs" />

                    </Select>
                </Box>
                <Pressable shadow={2} rounded={'10'}  bgColor={'green.500'} flex={0} py={1.5} px='8'>
                    <Text flex={0} color={'white'}>Publicar</Text>
                </Pressable>
            
            </HStack>
            
        </VStack>
        <VStack p='8' m='4'bgColor={'white'} space={2}  rounded='10' shadow={'2'} alignItems='center'>
                <ButtonChoice option="Compartilha Foto"  icon={<FontAwesome name="photo" size={24} color="black" />}/>
                <ButtonChoice option="FeedBack" icon={<MaterialIcons name="feedback" size={24} color="black" />}/>
                <ButtonChoice option="Promover Ação" icon={<Feather name="share-2" size={24} color="black" />}/>
                <ButtonChoice option="Criar Daily Post" icon={<MaterialIcons name="post-add" size={24} color="black" />}/>
                <ButtonChoice option="Compartilha Gift" icon={<AntDesign name="gift" size={24} color="black" />}/>
        </VStack>
    </ScrollView>
    )
}
type ButtonChoiceProps={
    option:string;
    icon:IIconProps
}

function ButtonChoice({option,icon}:ButtonChoiceProps){
    return(
        <>
            <Pressable py={6} w='100%' _pressed={{bgColor:'green.100'}}>
                <HStack space={'5'}>
                {icon}<Text  fontFamily={'heading'} >{option}</Text>
                </HStack>
                
            </Pressable>
            <Divider  bg={'gray.100'} w='90%'/>
        </>
    )
}