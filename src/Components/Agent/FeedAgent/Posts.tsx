import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, FlatList, HStack, Image, Pressable, Text, VStack } from "native-base";
import { useEffect, useRef, useState } from "react";
import  example from '../../../assets/images/BaseOutside.png'
import ImageUser from '../../../assets/images/user.png'
import Volunter from '../../../assets/images/vlun.jpg'
import { useDataAgent } from "../../../Contexts/UserContext";
import { NavigatotionAgentProps } from "../../../Routes/StackNavigation";
import { AxiosApi } from "../../../Services/HandleData/ProvideServices/axios";
import { AppError } from "../../../Utils/AppError";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
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

type ResponseColabProps={
    data:{
        name:string;
        id_colab:string;
        image_profile:string;
        description:string;
        url:string
    }[]
}
type NavigateAgentProps={

}


const dataPostSponsors= [
{id: "c7d2de4f-b2ad-4acc-a1dc-d7def44c53e",name:'Spónsor example',photo:"c7d23a8255f95220ffe55ad97b138aa6_vl5.jpg", description:"Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.",avatar:null},
{id:"c7d2de4f-b2ad-4acc-a1dc-d7def44c53e",name:'Sponsor',photo:"c7d23a8255f95220ffe55ad97b138aa6_vl5.jpg", description:"Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.",avatar:null}

]
export function Posts() {
    
    const [loadingPost,setLoadingPost]=useState(false)
    const [dataPostColab,setDataPostColab]= useState([] as PostProps[])
    const {dataAgent} = useDataAgent()

    async function fetchFeed(){
        try{
            setLoadingPost(true)
            //console.log(dataAgent.id)
            const  reponse :ResponseColabProps  = await AxiosApi.get('agent/feedColab',{params:{
                id_agent:dataAgent.id
            }})
            const colabFormated = reponse.data.map((colab)=>{
                return {
                    id:colab.id_colab,
                    name:colab.name,
                    photo:colab.url,
                    description:colab.description,
                    avatar:colab.image_profile
                }
            })
            setDataPostColab(colabFormated)
            return colabFormated
        }catch(e){
            console.log(e )
        }finally{
            setLoadingPost(false)

        }
    }   

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
        fetchFeed()
    },[postsRederized])
    return ( 
        <>
        {/** change the key stractot its with a key of bad pratices */}
            <MenuFeed  selectedListRender={selectedListRender} />
            {loadingPost?
                    <Box m={10}>
                        <LoadingSpinner size={'lg'}/>
                    </Box>
            :

            <FlatList  data={postsRederized} keyExtractor={(item)=>( `${item.id}/${Math.random().toString()}`)} renderItem={({item})=>(
                <RenderPosts avatar={item.avatar} name={item.name} id={item.id} description={item.description} photo={item.photo}/>
                )} />
            }

            
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
    const navigation = useNavigation<NavigatotionAgentProps>()
    function handleGoProfile(id:string){
        navigation.navigate('GenericProfile',{id:id})
    }
    const baseUrlPhotAgent = 'https://baseoutside.s3.amazonaws.com/Agent'
    const baseUrlPhotPublication = 'https://baseoutside.s3.amazonaws.com/PhotosPublications'

    return(
        <>
            <VStack  bgColor={'white'} m={4} p='4'  bg='white' rounded={'14'} space={4} shadow='1'  >
                <Pressable onPress={()=>handleGoProfile(id)}>
                    <HStack alignItems={'center'}>
                        <Box  h='8' rounded={'full'} w='8' mx='2'>
                            <Image source={{uri:(!!avatar?`${baseUrlPhotAgent}/${avatar}`:`${baseUrlPhotAgent}/user.png`)}} alt='image agent' width={'100%'} height='100%' borderWidth={'1'}   rounded={'full'}/>
                        </Box>

                        <Text  fontFamily={'heading'}>{name}</Text>
                    </HStack>
                </Pressable>
                <Box>
                    <Image source={{uri:`${baseUrlPhotPublication}/${photo}`}} width='100%' height={'250px'} resizeMode='cover' resizeMethod="scale"  alt='example'></Image>
                </Box>
                <Text >{description}
                </Text>
            </VStack>
        </>
    )
}
const fakeDataAgent = [{agent:'',publication:{ image:'', description:'Hoje começamos mais um projeto incrivel que se cham base outside. Esperamos que muitas pessoas possam ter um experiencia incrivel ao seguir o seu coraçao e sua vocação.'}}]