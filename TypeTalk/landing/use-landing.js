import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
export const useLanding= () => {
    const onClickSignIn = (id,pw) => {
        /*
            true 면 메인으로 이동
            false면 retry
        */

            console.log(id,pw)
            /*
            if (id.trim() === "") {
                Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
            } else if (password.trim() === "") {
                Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
            } else {
                axios.post("주소들어감", 
                    null, 
                    { params: {id: id, pwd: pw} }
                ).then(function(resp) {
                    console.log(resp.data);
                    if (resp.data !== null && resp.data != "") {
                        console.log("로그인 성공");
                    } else {
                        Alert.alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
                        setId("");
                        setPassword("");
                    }
                }).catch(function(err) {
                    console.log(`Error Message: ${err}`);
                })
            }
            */ 
    }

    const onClickSignUp = () => {

    }

    const InputType = ({title, text,setText}) => {
        return (
                <View
                        style={{flexDirection: "row", marginTop: 20, alignItems:"center"}}>
                        <Text style={{width:Platform.OS === "android"? 60:57}}>{title} :</Text>
                        <TextInput
                         style={styles.textInputSt}
                         value={text}
                         onChangeText={(text)=>{setText(text)}}
                         />
                    </View>
        )
    }
    return{
        onClickSignIn,
        onClickSignUp,
        InputType
    }
}
const styles = StyleSheet.create({
    textInputSt: {
        width: "65%",
        height: Platform.OS === "android"? 40:30,
        borderBottomWidth: 1,
        marginLeft: 20,
        
    }
})