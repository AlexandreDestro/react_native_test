import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';


export default function App() {

  const [contador, setContador] = useState(0)

  useEffect(()=>{
    console.log("componente inicializado!")

  },[])

  useEffect(()=>{
    console.log(contador)

  },[contador])

  return (
    <PaperProvider>
    <View style={styles.container}>
      <Text>Michael Jackson</Text>
      <StatusBar style="auto" />
      <Button icon="camera" mode="contained" onPress={() => setContador(contador + 1)}>
       Incrementar {contador}
      </Button>


    </View>
    </PaperProvider>
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
