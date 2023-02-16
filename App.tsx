import React from 'react';
import { StatusBar, TextBase ,Text} from 'react-native';
import { NativeBaseProvider, Box, Center, Container, } from 'native-base';
import { StyleSheet,  View, ViewBase } from 'react-native';
import { useFonts, Roboto_100Thin_Italic , Roboto_400Regular  ,Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/theme';
import { SignIn } from './src/Screens/SignIn';
import { SignUp } from './src/Screens/SingUp';
import { Routes } from './src/Routes';
import { AuthRoutes } from './src/Routes/auth.routes';
import{ AgentDataProvider, AgentProvider} from './src/Hooks/UserContext';
export default function App() {
  const [fontsLoaded] = useFonts({Roboto_100Thin_Italic,Roboto_700Bold,Roboto_400Regular})
  return (
    <>
    {fontsLoaded?
      <NativeBaseProvider theme={THEME}>
          <StatusBar backgroundColor='transparent' barStyle={'dark-content'}/>


          <AgentDataProvider>

            <Routes/>
          </AgentDataProvider>


          
        </NativeBaseProvider>
      :
        <View>
        <Text>Carregando</Text>
        </View>}
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
