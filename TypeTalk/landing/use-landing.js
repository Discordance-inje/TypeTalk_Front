import { DarkTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, DimensionValue, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
export const useLanding = () => {
    const left = 10;
    const displayHeight = Dimensions.get('window').height;
    const displayWidth = Dimensions.get('window').width;
    const onClickSignIn = (id, pw) => {
        /*
            true 면 메인으로 이동
            false면 retry
        */

        console.log(id, pw)
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

    const InputType = ({ title, text, setText, width }) => {
        return (
            <View
                style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                <Text style={{ width: displayWidth / 6.5 }}>{title} :</Text>
                <TextInput
                    style={styles.textInputSt}
                    value={text}
                    onChangeText={(text) => { setText(text) }}
                />
            </View>
        )
    }
    const Mbti = ({ mbti, setMbti }) => {
        return (
            <View
                style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                <Text style={{ width: displayWidth / 6.5 }}>mbti :</Text>
                <View style={{
                    width: "65%",
                    flexDirection: "row",
                    height: Platform.OS === "android" ? 40 : 30,
                    marginLeft: 20,
                }}>
                    <TextInput
                        style={{
                            width: 60,
                            height: Platform.OS === "android" ? 40 : 30,
                            borderBottomWidth: 1,
                        }}
                        value={mbti}
                        onChangeText={(mbti) => { setMbti(mbti) }}
                    />
                    <TouchableOpacity style={{
                        alignItems: "center",
                        width: 80,
                        borderWidth: 1,
                        justifyContent: "center",
                        marginLeft: left,
                        backgroundColor: "grey"
                    }}><Text>검사하기</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
    const Birth = ({ text, setText}) => {
        const [open,setOpen]=useState(false)
        const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '남', value: 'man'},
    {label: '여', value: 'woman'}
  ]);
        return (
            <View
            style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
            <View style={{width:"53%", flexDirection:"row"}}>
            <Text style={{ width: displayWidth / 6.5 }}>생년월일 :</Text>
            <TextInput
                style={{
                     width: "65%",
        height: Platform.OS === "android" ? 40 : 30,
        borderBottomWidth: 1,
        marginLeft: 20,
                }}
                value={text}
                onChangeText={(text) => { setText(text) }}
            />
            </View>
            <View style={{width:"35%"}}>
             
            <DropDownPicker
           
            
            
            style={{width:displayWidth/4,marginLeft:20}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="성별"
            theme="DARK"
        />   
        </View>
        </View>
        )
    }

    return {
        onClickSignIn,
        onClickSignUp,
        InputType,
        Mbti,
        Birth
    }


}
const styles = StyleSheet.create({
    textInputSt: {
        width: "65%",
        height: Platform.OS === "android" ? 40 : 30,
        borderBottomWidth: 1,
        marginLeft: 20,

    }
})