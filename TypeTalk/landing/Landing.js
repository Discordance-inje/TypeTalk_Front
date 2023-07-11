import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import { useLanding } from "./use-landing";
/**
 * Platform.OS === "android" ? a:b 
 * os 확인
 */
export default ({
    navigation
}) => {
    const [isUser, setIsUser] = useState(false);
    return(
        <View
            style={{
                backgroundColor:"#63B28C",
                flex:1,
                }}>
            <View
                style ={{
                    alignContent:"center",
                    alignItems: "center",
                    justifyContent:"center",
                    height: "50%"
                }}>
                <Text>logo</Text>
            </View>
            <View
            style ={{
                alignContent:"center",
                alignItems: "center",
                justifyContent:"center",
                width:"100%"
            }}>
            <Button
                style = {styles.signBt}
                title ={"로그인"}
                color="#262c2C"
                onPress={() =>
                    navigation.navigate('SignIn')}
                />

            <Button
                title ={"회원가입"}
                color="#262c2C"
                
                onPress={() =>
                    navigation.navigate('SignUp')}
                />
            </View>
          
        </View>
    )
}
const styles = StyleSheet.create({
    signBt:{
        flex:1,
        width:"50%",
        backgroundColor: "A7D8BB",
        borderWidth:1,
        borderColor:"black",
        borderRadius: 8,
    }
})