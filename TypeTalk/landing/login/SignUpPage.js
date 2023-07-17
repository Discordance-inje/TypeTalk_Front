import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import ProfileImage from "./ProfileImage";
import { useLanding } from "../use-landing";

export default ({ navigation }) => {
    const left = 10;
    const [idText, setIdText] = useState('')
    const [pwText, setPwText] = useState('')
    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [mbti,setMbti] = useState('')
    const {
        InputType
    } =useLanding();
    return (
        <>
            <View
                style={{
                    backgroundColor: "#63B28C",
                    flex: 1,
                    paddingLeft: left,
                    alignItems: "center"
                }}>
                <ProfileImage></ProfileImage>
                <InputType title="이름" text={name} setText={setName}/>
                <InputType title="생년월일" text={birth} setText={setBirth}/>
                <InputType title="아이디" text={idText} setText={setIdText}/>
                <InputType title="비밀번호" text={pwText} setText={setPwText}/>
                <View
                    style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                    <Text style={{ width: Platform.OS === "android" ? 60 : 57 }}>mbti :</Text>
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
                <TouchableOpacity
                    style={{alignItems:"center",justifyContent:"center", marginTop:30, borderWidth:1,width:60,height:30}}
                        onPress={() =>{navigation.navigate('SignIn')}}>
                        <Text>확인</Text>
                    </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    textInputSt: {
        width: "65%",
        height: Platform.OS === "android" ? 40 : 30,
        borderBottomWidth: 1,
        marginLeft: 20,

    }
})