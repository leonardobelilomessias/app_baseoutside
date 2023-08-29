import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, FlatList, HStack, Image, Pressable, Text, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import example from '../../../assets/images/BaseOutside.png'
import ImageUser from '../../../assets/images/user.png'
import Volunter from '../../../assets/images/vlun.jpg'
import { useDataAgent } from "../../../Contexts/UserContext";
import { NavigatotionAgentProps } from "../../../Routes/StackNavigation";
import Sponsor from "../../../Screens/Agents/Sponsor";
import { AxiosApi } from "../../../Services/HandleData/ProvideServices/axios";
import { AppError } from "../../../Utils/AppError";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
type MenuProps = {
    selectedListRender?: (listSelected: string) => void
    itemMenuSelected: string
    setItemMenuSelected: React.Dispatch<any>
}
type PostProps = {
    id: string,
    name: string;
    photo: string;
    description: string,
    avatar: string | null
    publication_id: string
}

type ResponseColabProps = {
    data: {
        name: string;
        id_colab: string;
        image_profile: string;
        description: string;
        url: string
        publication_id: string
        id_colaboreted: string
    }[]
}
type ResponseSponsorProps = {
    data: {
        name: string;
        id_colab: string;
        image_profile: string;
        description: string;
        url: string
        publication_id: string
        id_sponsored: string
    }[]
}
const baseUrlPhotAgent = `${process.env.host}/images/hand.jpg`
const baseUrlPhotPublication = `${process.env.host}/images/hand.jpg`

export function Posts() {
    const [loadingPost, setLoadingPost] = useState(false)
    const { dataAgent } = useDataAgent()
    const [postsRederized, setPostRenderized] = useState([] as PostProps[])
    const [itemMenuSelected, setItemMenuSelected] = useState('geral')

    async function fetchFeed() {
        setLoadingPost(true)
        try {
            const selected: PostProps[] | undefined = await switchRenderList({ itemMenuSelected: itemMenuSelected, id_agent: dataAgent.id })
            if (selected) setPostRenderized(selected)
        } catch (e) {
            Alert.alert("erro ao carregar os dados")
        } finally {
            setLoadingPost(false)
        }
    }

    useEffect(() => {
        fetchFeed()
    }, [itemMenuSelected])

    return (
        <>
            <MenuFeed itemMenuSelected={itemMenuSelected} setItemMenuSelected={setItemMenuSelected} />
            {loadingPost ?
                <Box m={10}>
                    <LoadingSpinner size={'lg'} />
                </Box>
                :
                <FlatList data={postsRederized} keyExtractor={(item) => (item.publication_id)} renderItem={({ item }) => (
                    <RenderPosts avatar={item.avatar} name={item.name} id={item.id} description={item.description} photo={item.photo} publication_id={item.publication_id} />
                )} />
            }
        </>
    );
}

function MenuFeed({ setItemMenuSelected }: MenuProps) {
    const [itemMenu, setItemMenu] = useState('geral')
    function handleMenu(item: string) {
        setItemMenu(item)
        setItemMenuSelected(item)
    }
    return (
        <HStack m='1'>
            <Pressable bg={itemMenu === 'geral' ? 'white' : 'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={() => handleMenu('geral')}>
                <Text color={itemMenu === 'geral' ? 'green.400' : 'white'} textAlign={'center'} p={2}>Geral</Text>
            </Pressable>
            <Pressable bg={itemMenu === 'colab' ? 'white' : 'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={() => handleMenu('colab')}>
                <Text color={itemMenu === 'colab' ? 'green.400' : 'white'} textAlign={'center'} p={2}>Colab</Text>
            </Pressable>
            <Pressable bg={itemMenu === 'sponsor' ? 'white' : 'gray.300'} flex={1} m='1' shadow='2' rounded={10} onPress={() => handleMenu('sponsor')}>
                <Text color={itemMenu === 'sponsor' ? 'green.400' : 'white'} textAlign={'center'} p={2}>Sponsor</Text>
            </Pressable>
        </HStack>
    )
}

function RenderPosts({ name, description, id, photo, avatar, publication_id }: PostProps) {
    const navigation = useNavigation<NavigatotionAgentProps>()
    function handleGoProfile(id: string) {
        navigation.navigate('GenericProfile', { id: id })
    }

    return (
        <>
            <VStack bgColor={'white'} mx={4} my='2' p='4' bg='white' rounded={'8'} space={4} shadow='1'  >
                <Pressable onPress={() => handleGoProfile(id)}>
                    <HStack alignItems={'center'}>
                        <Box h='8' rounded={'full'} w='8' mx='2'>
                            <Image source={{ uri: (!!avatar ? `${baseUrlPhotAgent}/${avatar}` : `${baseUrlPhotAgent}/user.png`) }} alt='image agent' width={'100%'} height='100%' borderWidth={'1'} rounded={'full'} />
                        </Box>

                        <Text fontFamily={'heading'}>{name}</Text>
                    </HStack>
                </Pressable>
                <Box>
                    <Image source={{ uri: `${baseUrlPhotPublication}/${photo}` }} width='100%' height={'250px'} resizeMode='cover' resizeMethod="scale" alt='example'></Image>
                </Box>
                <Text >{description}
                </Text>
            </VStack>
        </>
    )
}

async function switchRenderList({ itemMenuSelected, id_agent }: { itemMenuSelected: string, id_agent: string }) {
    try {
        switch (itemMenuSelected) {


            case 'geral':
                const responseSponsorGeral: ResponseSponsorProps = await AxiosApi.get('agent/feedSponsor', { params: { id_agent: id_agent } })
                const sponsorFormatedGeral = formatDataSponsor(responseSponsorGeral)
                const responseColabGeral: ResponseColabProps = await AxiosApi.get('agent/feedColab', { params: { id_agent: id_agent } })
                const colabFormatedGeral = formatDataColab(responseColabGeral)
                const uniqueElements = removeDupicateItemns([...sponsorFormatedGeral, ...colabFormatedGeral])
                return uniqueElements
                break;
            case 'sponsor':
                const responseSponsor: ResponseSponsorProps = await AxiosApi.get('agent/feedSponsor', { params: { id_agent: id_agent } })
                const sponsorFormated = formatDataSponsor(responseSponsor)
                return sponsorFormated
                break;

            case 'colab':
                const responseColab: ResponseColabProps = await AxiosApi.get('agent/feedColab', { params: { id_agent: id_agent } })
                const colabFormated = formatDataColab(responseColab)
                return colabFormated
                break;
            default:
                const emptyElements: PostProps[] = []
                return emptyElements
                break

        }
    } catch (e) {
        Alert.alert('Hove um erro ao buscar os dados.')
    }
}



function removeDupicateItemns(elements: PostProps[]) {
    const uniqueElements: PostProps[] = []
    const uniqueList: string[] = []
    const duplicatedList = [...elements]
    for (const value of duplicatedList) {
        if (!uniqueList.includes(value.publication_id)) {
            uniqueList.push(value.publication_id)
            uniqueElements.push(value)
        }
    }
    return uniqueElements
}
function formatDataSponsor(dataSponsor: ResponseSponsorProps) {
    const sponsorformated = dataSponsor.data.map((sponsor) => {
        return {
            id: sponsor.id_sponsored,
            name: sponsor.name,
            photo: sponsor.url,
            description: sponsor.description,
            avatar: sponsor.image_profile,
            publication_id: sponsor.publication_id
        }
    })
    return sponsorformated
}
function formatDataColab(dataColab: ResponseColabProps) {
    const colabFormated = dataColab.data.map((colab) => {
        return {
            id: colab.id_colab,
            name: colab.name,
            photo: colab.url,
            description: colab.description,
            avatar: colab.image_profile,
            publication_id: colab.publication_id

        }
    })
    return colabFormated
}
