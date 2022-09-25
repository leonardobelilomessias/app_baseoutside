import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {

  return (
  <>
    <StatusBar style="light" translucent={false}/>
    <SafeAreaView style= {styles.container}>
    <View style={styles.container}>
  
        <HomeScreen/>
    </View>
    </SafeAreaView>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }

});
