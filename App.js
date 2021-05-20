import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/custom/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem name={'Model 3'}
        tagline={'Order online for '}
        taglineCTA={'Touchless delivery'}
        image={require('./assets/img/Model3.jpeg')} />
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
  }
});
