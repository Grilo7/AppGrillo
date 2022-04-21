import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text style= {styles.title}>Hola, Coder!</Text>
      <Text style= {styles.text}>Bienvenidos al curso de desarrollo de aplicaciones. </Text>
      <StatusBar style="auto" />
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'right',
    justifyContent: 'center',
  },
    title: {

    fontSize: 24,
    fontWeight: 800,

  },
    text: {

      fontSize: 18,
      fontWeight: 400,
                        
    },
});
