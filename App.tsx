import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Routes } from './src/Routes';
import HomeScreen from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';

export default function App() {

  return (
  <>
    <StatusBar style="light" translucent={false}/>
    <SafeAreaView style= {styles.container}>
    <View style={styles.container}>
      <Routes/>
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
