import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Button , SafeAreaView, } from 'react-native';
import Header from './pages/header';
import Section1 from './pages/section1';
import React from 'react';


export default function App() {


  return (
    <View style={styles.container}>
        <SafeAreaView>
        <Header/>
        </SafeAreaView>
        <Section1/>
        {/* <StatusBar style='inverted' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#121212',
  }
});
