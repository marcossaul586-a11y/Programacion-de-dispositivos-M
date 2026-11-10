import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Maincard from './Maincard';
import { useState } from 'react';
export default function App() {
  const nombre = "Marcos";
  const apellido = "Nunez";
  const [isLoading, setIsloading] = useState(false);

  const btntitle= isLoading ? "Mostrar" : "cargar";
  return (
    <View style={styles.container}>
      <Text>"hello world by nombre es {nombre} {apellido}"</Text>
      <StatusBar style="auto" />
      <Button title={btntitle} onPress={() => setIsloading (!isLoading)}/>

      <Maincard loading={isLoading}/> 
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
});
