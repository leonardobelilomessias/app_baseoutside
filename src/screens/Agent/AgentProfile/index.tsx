import {View,Text,StyleSheet,TextInput ,Button} from 'react-native'
import { useState } from 'react';
import AgentProfile from '../../../Components/AgentProfile';

export default function AgentPRofile(){

  return(
    <View style={styles.container}>
       <AgentProfile/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,

  }
  

});
