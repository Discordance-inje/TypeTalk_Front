import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {  } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Landing from "./landing/Landing";
import SignInPage from "./landing/sign/SignInPage";
import SignUpPage from "./landing/sign/SignUpPage";
import MainPage from "./landing/mainpage/MainPage";


export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown:false}}
            >
            <Stack.Screen name="Home"
              component={Landing}
              options={{headerShown:false}}
              
            />
          <Stack.Screen name="SignIn" component={SignInPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="MainPage" component={MainPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})