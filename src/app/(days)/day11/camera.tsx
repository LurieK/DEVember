import { Stack } from "expo-router";
import {View, Text} from "react-native";
import { useCameraPermission } from "react-native-vision-camera";

const CameraScreen = ()=> {

  const { hasPermission, requestPermission } = useCameraPermission();

  return(
    <View>
      <Stack.Screen options={{ headerShown :false}}/>

      <Text>Camera</Text>
    
    </View>
  
  )

}

export default CameraScreen