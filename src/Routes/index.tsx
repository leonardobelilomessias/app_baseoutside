import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from './auth.routes';
import { Box } from 'native-base';
import { AppRoutes } from './app.routes';
import { useDataAgent } from '../Contexts/UserContext';
import { LoadingSpinner } from '../Components/Shared/LoadingSpinner';

const { Navigator, Screen } = createNativeStackNavigator();
export function Routes() {
    const {dataAgent,loading}= useDataAgent()
    return (
        <Box flex={1}>

            <NavigationContainer >
                {
                loading?
                <LoadingSpinner/>:
                
                    !!dataAgent.id?
                    <AppRoutes/>:
                    <AuthRoutes/>
            }
            </NavigationContainer>
        </Box>
    )
}