import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {  } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Landing from "./landing/Landing";
import SignInPage from "./landing/login/SignInPage";
import SignUpPage from "./landing/login/SignUpPage";
import TabNavi from "./landing/clientpage/tabbar/TabNavi";
import UserFix from "./landing/clientpage/page/userdetail/UserFix";
import AccountManage from "./landing/clientpage/page/userdetail/AccountManage";
import ChatRoom from "./landing/clientpage/page/chat/ChatRoom";

/*
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

*/
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
            {/* sign */}
          <Stack.Screen name="SignIn" component={SignInPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Client" component={TabNavi} />
          {/* userDetail */}
          <Stack.Screen name="UserFix" component={UserFix} />
          <Stack.Screen name="Account" component={AccountManage} />
          {/* chat */}
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  }
})





