import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import ProfileImage from "./ProfileImage";

export default ({ navigation }) => {
    const left = 10;
    const [idText, setIdText] = useState('')
    const [pwText, setPwText] = useState('')
    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [mbti,setMbti] = useState('')
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
                <View
                    style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                    <Text style={{ width: Platform.OS === "android" ? 60 : 57 }}>이름 :</Text>
                    <TextInput
                        style={styles.textInputSt}
                        value={name}
                        onChangeText={(name) => { setName(name) }}
                    />
                </View>
                <View
                    style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                    <Text style={{ width: Platform.OS === "android" ? 60 : 57 }}>생년월일 :</Text>
                    <TextInput
                        style={styles.textInputSt}
                        value={birth}
                        onChangeText={(birth) => { setBirth(birth) }}
                    />
                </View>
                <View
                    style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                    <Text style={{ width: Platform.OS === "android" ? 60 : 57 }}>아이디 :</Text>
                    <TextInput
                        style={styles.textInputSt}
                        value={idText}
                        onChangeText={(idText) => { setIdText(idText) }}
                    />
                </View>
                <View
                    style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                    <Text style={{ width: Platform.OS === "android" ? 60 : 57 }}>비밀번호 :</Text>
                    <TextInput
                        style={styles.textInputSt}
                        value={pwText}
                        onChangeText={(pwText) => { setPwText(pwText) }}
                    />
                </View>
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