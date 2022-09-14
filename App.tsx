import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [statement,setStatement] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Baseoutside</Text>
      <TextInput style={styles.fildInput} placeholder='email'/>
      <TextInput style={styles.fildInput}  placeholder='Senha'/>
      <Button title='Entrar' onPress={()=>setStatement(!statement)}/>
        {!statement && <Text style={ styles.statement}>Hellow my friend </Text>}
        
      <StatusBar style="auto" />
    </View>
  );
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
