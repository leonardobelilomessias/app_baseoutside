import { Button, FlatList, HStack, Image, Text, VStack,Pressable } from "native-base";

import Volluntier from '../../../../../assets/images/vlun.jpg'
export function ExclusiveDate(){
    return(
        <>
            <VStack bgColor={'white'} mx='2' p='4' rounded={10} space='4' shadow='2' mb='10'>
                <PostsExclusive/>
                <DailyExclusive/>
            </VStack>
        </>
    )
}

function PostsExclusive(){
    return(
        <VStack space={2}>
            <HStack justifyContent={'space-between'}> 
                <Text fontFamily={'heading'}>
                    Posts
                </Text>
                <Text lineHeight={'2xl'} fontSize={'2xs'}>
                    Total 15
                </Text>
            </HStack>

            <HStack justifyContent={'space-between'}>
            <Image source={Volluntier} h='85' w='85' alt='voluntario'/>
            <Image source={Volluntier} h='85' w='85' alt='voluntario'/>
            <Image source={Volluntier} h='85' w='85' alt='voluntario'/>
            <Image source={Volluntier} h='85' w='85' alt='voluntario'/>
            </HStack>
            <Pressable  >
                <Text color={'emerald.500'}  textAlign={'right'}>Ver Todos</Text>
            </Pressable>
        </VStack>
    )

}

function DailyExclusive(){
    return(
        <VStack space={2}>
            <HStack justifyContent={'space-between'}> 
                <Text fontFamily={'heading'}>
                    Daily
                </Text>
                <Text lineHeight={'2xl'} fontSize={'2xs'}>
                    Total 33
                </Text>
            </HStack>
        {dataDaily.map((item,index)=>(
            <Pressable key={item} bgColor={!!(index%2===0)?'emerald.100':"white"}  >
            <Text color={'emerald.600'}  >{item}</Text>
            
            </Pressable>
        ))}

            <Pressable  >
                <Text color={'emerald.500'}  textAlign={'right'}>Ver Todos</Text>
            </Pressable>
        </VStack>
    )
}

const dataDaily = ['Um dia de crescimento',"Bem vindo 2023!", "Nunca desista dos seus Sonhos","Atividade dobrada","Contruindo um legado.","Quem avisa amigo é"]