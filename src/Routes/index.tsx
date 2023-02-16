import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from './auth.routes';
import { Box } from 'native-base';
import { AppRoutes } from './app.routes';

const { Navigator, Screen } = createNativeStackNavigator();
export function Routes() {
    return (
        <Box flex={1}>

            <NavigationContainer >
                <AppRoutes />
            </NavigationContainer>
        </Box>
    )
}