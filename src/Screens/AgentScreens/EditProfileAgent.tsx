import { useRoute, RouteProp } from "@react-navigation/native";
import { Box, Button, Container, FormControl, Image, Input, Text, TextArea, VStack, Pressable, Spinner } from "native-base";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FindAgentDTO } from "../../Dtos/AgentDTO/DataAgentDTO";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import User from '../../assets/images/userIcon.png'
import * as ImagePicker  from  'expo-image-picker'
import { LoadingSpinner } from "../../Components/Shared/LoadingSpinner";
import { AxiosApi } from "../../Services/HandleData/ProvideServices/axios";


type FormDataProps = {
    name: string
    description: string;
    vocation: string;

}
type ParamsRoute = {
    dataAgent: FindAgentDTO
}
const editSchema = yup.object({
    name: yup.string().required("Informe o nome válido !")

})


export function EditProfileAgent() {
    const [photLoading,setPhotoLoading]=useState(false)
    const bucketS3 = `https://baseoutside.s3.amazonaws.com/Agent`
    const route = useRoute()
    const { dataAgent } = route?.params as ParamsRoute
    const [image,setImage] = useState(`${bucketS3}/${dataAgent?.image_profile}`)
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        defaultValues: {
            name: dataAgent.name,
            description: dataAgent.description,
            vocation: dataAgent.vocation
        },
        resolver: yupResolver(editSchema)
    })

    function handleEditAgent({ name, description, vocation }: FormDataProps) {
        
    }

    async function handleImageUser(){
        setPhotoLoading(true)
            const photoselected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                quality:1,
                aspect:[4,4],
                allowsEditing:true,
            
            
        }).then((photoselected)=>{
            setPhotoLoading(true)
            if (!photoselected.canceled) {
                setImage(photoselected.assets[0].uri);
                const fileExtension = photoselected.assets[0].uri.split('.').pop()
                const photoFile ={
                    name:`${dataAgent.user_name}.${fileExtension}`.toLocaleLowerCase(),
                    uri:photoselected.assets[0].uri,
                    type:`${photoselected.assets[0].type}/${fileExtension}`
                }as any 
                const userPhotoUploadForm = new FormData()
                userPhotoUploadForm.append('image_profile',photoFile)
                console.log(photoFile)
                AxiosApi.patch('/agent/imageProfile',userPhotoUploadForm,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                })
            //return photoselected
            }
            
            

        }).catch((error)=>{
            throw error
        }).finally(()=>{setPhotoLoading(false)})
    
        //console.log(photoselected)
        setPhotoLoading(false)
    }
    

    return (
        <>
            <VStack p='5' alignItems={'center'} flex={1} bgColor='white'>
                <VStack my={5} alignItems={'center'}>
                    <Box h='100' w='100' rounded={'full'}   >
                        {photLoading?
                        <LoadingSpinner/>
                        :
                        <Image source={{ uri: dataAgent.image_profile ? image : User }} resizeMode='contain' rounded={'full'} width='100%' h='100%' alt='user' />
                        }


                    </Box>
                    <Pressable onPress={()=>handleImageUser()}>
                        <Text mb='6' color={'green.400'} fontSize={'md'}>Trocar Foto</Text>
                    </Pressable>
                </VStack>
                <VStack alignContent={'center'} width='90%'  >

                    <FormControl isInvalid={!!errors.name?.message} >
                        <Controller
                            control={control}
                            name='name'

                            render={({ field: { onChange, value } }) => (
                                <Input colorScheme={'green'} placeholder='Nome' value={value}
                                    onChangeText={onChange} />
                            )}
                        />
                        <Text>
                            <FormControl.ErrorMessage>{errors.name?.message}</FormControl.ErrorMessage>
                        </Text>
                    </FormControl>

                    <Controller
                        control={control}
                        name='description'
                        rules={{
                            required: "Informe uma descrição"
                        }}
                        render={({ field: { onChange, value = dataAgent.description } }) => (
                            <TextArea autoCompleteType={''} placeholder={dataAgent.description} value={value} onChangeText={onChange} />
                        )}
                    />
                    <Text>{errors.description?.message}</Text>

                    <Controller
                        control={control}
                        name='vocation'
                        rules={{
                            required: "Informe dado valido para voacção"
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input colorScheme={'green'} placeholder={dataAgent.vocation} value={value} onChangeText={onChange} />
                        )}
                    />
                    <Text>{errors.vocation?.message}</Text>

                    <Button my='4' onPress={handleSubmit(handleEditAgent)} alignContent='center' alignItems={'center'} colorScheme='green' textAlign={'center'}>Enviar</Button>
                    <Button onPress={handleSubmit(handleEditAgent)} alignContent='center' alignItems={'center'} variant='outline' colorScheme={'green'} textAlign={'center'}>Cancelar</Button>
                </VStack>

            </VStack>
        </>
    )
}