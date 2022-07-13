import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
//import { SafeAreaView } from 'react-native-web';

// View => UIView (in IOS)
// View => Android view 
// We have to change the view and other similar functions in native language alike


export default function App() {
  const handlePress = () => console.log("Text pressed");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React native I am sithu!</Text>
      <Image source={require("./assets/favicon.png")} />
      <Image source={{uri: "https://picsum.photos/200/300"}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems:"center"
   
  },
});

