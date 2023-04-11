import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,landscape ,Dimensions,Platform,Alert, View, TouchableNativeFeedback,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback, SafeAreaView, Image, Button, PlatformColor } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
//import { SafeAreaView } from 'react-native-web';

// View => UIView (in IOS)
// View => Android view 
// We have to change the view and other similar functions in native language alike


export default function App() {
  //const handlePress = () => console.log("Text pressed");
  const {landscape} = useDeviceOrientation();
  // Get the dimensions of the device
  console.log(useDimensions ());
  return (
    <SafeAreaView style={styles.container }>
      <View style={{
          backgroundColor: 'dodgerblue',
          flex: 0.5,
          width: "100%",
          height: landscape ? '100%' : '30%',

      }} ></View>
     
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "teal"};
// Regular javascript properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    paddingTop: Platform.OS === "ios"
    
   
  }
});
