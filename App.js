import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// View => UIView (in IOS)
// View => Android view 
// We have to change the view and other similar functions in native language alike


export default function App() {
  console.log("App executed")
  let x = 1;
  return (
    <View style={styles.container}>
      <Text>Hello React native I am sithu!</Text>
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
});
