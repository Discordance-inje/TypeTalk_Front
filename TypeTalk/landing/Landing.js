import { useState } from "react";
import { Button, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
/**
 * Platform.OS === "android" ? a:b 
 * os 확인
 */
export default ({
    navigation
}) => {
    const [isUser, setIsUser] = useState(false);
    
    return (
        <View
            style={{
                backgroundColor: "#63B28C",
                flex: 1,
            }}>
            <View
                style={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50%"
                }}>
                <Text>logo</Text>
            </View>
            <View
                style={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"
                }}>
                 <TouchableOpacity
                style={styles.signBt}
                    onPressIn={() =>
                        navigation.navigate('SignIn')}
                ><Text style={{color:"white"}}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.signBt}
                    onPressIn={() =>
                        navigation.navigate('SignUp')}
                ><Text style={{color:"white"}}>회원가입</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    signBt: {
        justifyContent:"center",
        alignItems:"center",
        width: "50%",
        backgroundColor: "#262c2C",
        borderWidth: 1,
        height:30,
        borderRadius: 8,
        marginBottom: Platform.OS === "android"?15:10

    }
})