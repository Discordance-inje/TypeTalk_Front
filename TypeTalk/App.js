import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {  } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Landing from "./src/landing/Landing";
import SignInPage from "./src/landing/login/SignInPage";
import SignUpPage from "./src/landing/login/SignUpPage";
import TabNavi from "./src/landing/clientpage/tabbar/TabNavi";
import UserFix from "./src/landing/clientpage/page/userdetail/UserFix";
import AccountManage from "./src/landing/clientpage/page/userdetail/AccountManage";
import ChatRoom from "./src/landing/clientpage/page/chat/ChatRoom";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import MatchingUser from "./src/landing/clientpage/page/match/component/MatchingUser";




export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    
    <>
  
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown:false}}
            >
            <Stack.Screen name="Home"
              component={Landing}
              options={{headerShown:false}}
              
            />
            {/* sign */}
          <Stack.Screen name="SignIn" component={SignInPage}/>
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Client" component={TabNavi} />
          {/* userDetail */}
          <Stack.Screen name="UserFix" component={UserFix} />
          <Stack.Screen name="Account" component={AccountManage} />
          {/* chat */}
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          {/* match */}
          <Stack.Screen name="Matching" component={MatchingUser} />
          
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
        
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





