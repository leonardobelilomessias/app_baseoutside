import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, Center } from 'native-base';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center alignItems={'center'} justifyContent='center'>
      <Box p={'1/4'}>Hello world</Box>
      </Center>
    </NativeBaseProvider>
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
