import { useRoute, RouteProp } from "@react-navigation/native";
import { Box, Button, Container, FormControl, Image, Input, Text, TextArea, VStack, Pressable } from "native-base";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FindAgentDTO } from "../../Dtos/AgentDTO/DataAgentDTO";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import User from '../../assets/images/userIcon.png'


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
    const bucketS3 = `https://baseoutside.s3.amazonaws.com/Agent`
    const route = useRoute()
    const { dataAgent } = route?.params as ParamsRoute
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



    return (
        <>
            <VStack p='5' alignItems={'center'} flex={1}>
                <VStack my={5} alignItems={'center'}>
                    <Box h='100' w='100' rounded={'full'}   >
                        <Image source={{ uri: dataAgent.image_profile ? `${bucketS3}/${dataAgent?.image_profile}` : User }} resizeMode='contain' rounded={'full'} width='100%' h='100%' alt='user' />


                    </Box>
                    <Pressable>
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