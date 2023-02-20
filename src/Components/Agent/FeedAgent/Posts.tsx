import { Box, FlatList, HStack, Image, Pressable, Text, VStack } from "native-base";
import { useEffect, useRef, useState } from "react";
import  example from '../../../assets/images/BaseOutside.png'
import ImageUser from '../../../assets/images/user.png'
import Volunter from '../../../assets/images/vlun.jpg'
import { AxiosApi } from "../../../Services/HandleData/ProvideServices/axios";
type MenuProps={
    selectedListRender:(listSelected:string)=>void
}
type PostProps={
    id:string,
    name:string;
    photo:string;
    description:string,
    avatar:string | null
}

const dataPostColab= [
    {id:"01",name:'Colab example',photo:Volunter, description:"Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.",avatar:'18aca2f550ee7887f8ca83162f173098_leo.jpeg'},
    {id:"02",name:'Colab example',photo:Volunter, description:"Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.",avatar:null}

]
const dataPostSponsors= [
{id:"sponsor01",name:'Spónsor example',photo:example, description:"Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.",avatar:null},
{id:"sponsor2",name:'Sponsor',photo:example, description:"Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.",avatar:null}

]
export function Posts() {
    

    const [postsRederized,setPostRenderized] = useState([...dataPostColab,...dataPostSponsors])
    function selectedListRender(listSelected:string){
        if(listSelected==='geral'){
            setPostRenderized([...dataPostColab,...dataPostSponsors])


        }  
        if(listSelected==='colab'){
            setPostRenderized(dataPostColab)
        }
        if(listSelected ==='sponsor'){
            setPostRenderized(dataPostSponsors)

        }
    }
    const [] = useState('')
    useEffect(()=>{
        
    },[postsRederized])
    return ( 
        <>
            <MenuFeed  selectedListRender={selectedListRender} />
            <FlatList  data={postsRederized} keyExtractor={(item)=>(item.id)} renderItem={({item})=>(
            <RenderPosts avatar={item.avatar} name={item.name} id={item.id} description={item.description} photo={item.photo}/>
            )} />

            
        </>
     );
}

function  MenuFeed ({selectedListRender}:MenuProps){
    const [itemMenuSelected,setItemMenuSelected] = useState('geral')
    useEffect(()=>{
        selectedListRender(itemMenuSelected)
    },[itemMenuSelected])
    
    return(
    <HStack m='1'>
        <Pressable bg={itemMenuSelected==='geral'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10}  onPress={()=>setItemMenuSelected('geral')}>
            <Text color={itemMenuSelected==='geral'?'green.400':'white'} textAlign={'center'}  p={2}>Geral</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='colab'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('colab')}>
            <Text  color={itemMenuSelected==='colab'?'green.400':'white'} textAlign={'center'}  p={2}>Colab</Text>
        </Pressable>
        <Pressable bg={itemMenuSelected==='sponsor'?'white':'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={()=>setItemMenuSelected('sponsor')}>
            <Text  color={itemMenuSelected==='sponsor'?'green.400':'white'}textAlign={'center'}  p={2}>Sponsor</Text>
        </Pressable>
    </HStack>
)}

function RenderPosts({name,description,id,photo,avatar}:PostProps){
    const apiUrl = 'https://baseoutside.s3.amazonaws.com/Agent'
    return(
        <>
            <VStack  bgColor={'white'} m={4} p='4'  bg='white' rounded={'14'} space={4} shadow='1'  >
                <HStack alignItems={'center'}>
                    <Box  h='8' rounded={'full'} w='8' mx='2'>
                        <Image source={{uri:(!!avatar?`${apiUrl}/${avatar}`:`${apiUrl}/user.png`)}} alt='image agent' width={'100%'} height='100%' borderWidth={'1'}   rounded={'full'}/>
                    </Box>
                    <Text  fontFamily={'heading'}>{name}</Text>
                </HStack>
                <Box>
                    <Image source={photo as any} width='100%' height={'250px'} resizeMode='cover' resizeMethod="scale"  alt='example'></Image>
                </Box>
                <Text >{description}
                </Text>
            </VStack>
        </>
    )
}
const fakeDataAgent = [{agent:'',publication:{ image:'', description:'Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.'}}]