import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [statement,setStatement] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Baseoutside</Text>
      <Button title='click aqui por favor ' onPress={()=>setStatement(!statement)}/>
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
  }
});
