import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Button, Image, Linking, SafeAreaView, ScrollView} from 'react-native';
import Header from './pages/header';
import Section1 from './pages/section1';


export default function App() {
  return (
    <View style={styles.container}>
        <SafeAreaView>
        <Header/>
        </SafeAreaView>
        <ScrollView>
          <Section1/>
          <StatusBar style='inverted' />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#121212',
    paddingVertical:30,
    height:'auto'
  }
});
