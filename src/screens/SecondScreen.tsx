import {View,Text,StyleSheet,TextInput ,Button} from 'react-native'
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){
  const [statement,setStatement] = useState(false)
  return(
    <View>
    <Text>Hellow</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:42,
    fontWeight:'bold'
  },
  statement:{
    fontSize:24
  },
  fildInput:{
    width:300,
    borderColor:'gray',
    borderWidth:1,
    padding:5,
    marginBottom:10,
    borderRadius:4,
  }

});
