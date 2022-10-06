import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/Routes';


export default function App() {
    
  return (
  <>
    <StatusBar style="light" translucent={false}/>
    <SafeAreaView style= {styles.container}>
    <View style={styles.container}>
      <AuthProvider>
           <Routes/>
      </AuthProvider>
    </View>
    </SafeAreaView>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white"
  }

});
