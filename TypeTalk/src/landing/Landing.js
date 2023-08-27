import { useState } from "react";
import { Button, Image, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux";
import { setLoginUser } from "../redux/action/manageUser";

/**
 * Platform.OS === "android" ? a:b 
 * os 확인
 */
export default ({
    navigation
}) => {
    const [isUser, setIsUser] = useState(false);
    const logoPath = '/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/logo/logo2.PNG'
    const dispatch = useDispatch()
    const signUpId = () =>{
        dispatch(setLoginUser(-1))
    }
    return (
        <View
            style={{
                backgroundColor:'#0080C8',
                flex: 1,
                alignItems:"center"
            }}>
            <View
                style={{
                    backgroundColor:'white',
                    marginTop:50,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40%",
                    width:'75%',
                    borderRadius:500,
                    borderWidth:1
                }}>
                <Image source={{uri:logoPath}}
                    style={{
                        width:200,
                        height:200
                    }}
                />
            </View>
            <View
                style={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginTop:50
                }}>
                 <TouchableOpacity
                style={styles.signBt}
                    onPressIn={() =>
                        navigation.navigate('SignIn')}
                ><Text style={{color:"black",fontWeight:"bold",fontSize:16}}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.signBt}
                    onPress={() =>
                        {navigation.navigate('SignUp'),signUpId()}}
                ><Text style={{color:"black",fontWeight:"bold",fontSize:16}}>회원가입</Text>
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
        backgroundColor: "white",
        borderWidth: 1,
        height:30,
        borderRadius: 8,
        marginBottom: Platform.OS === "android"?15:10

    }
})