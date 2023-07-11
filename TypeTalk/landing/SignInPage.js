import { useState } from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import { useLanding } from "./use-landing";


export default ({ navigation }) => {
    const left = 10;
    const [idText,setIdText] = useState('')
    const [pwText,setPwText] = useState('')
    const {
        onClickSignIn,
        onClickSignUp
    } = useLanding();
    return (
        <>
            <View
                style={{
                    backgroundColor: "#63B28C",
                    flex: 1,
                    paddingHorizontal: left,
                    alignItems:"center"
                }}>
                 <View
                    style={{flexDirection: "row", marginTop: 20}}>
                    <Text style={{width: 50}}>아이디</Text>
                    <TextInput
                     style={styles.textInputSt}
                     onChangeText={setIdText(idText)}
                     />
                </View>

                <View
                    style={{flexDirection: "row", marginTop: 20}}>
                    <Text style={{width: 50}}>비밀번호</Text>
                    <TextInput
                     style={styles.textInputSt}
                     onChangeText={setPwText(pwText)}
                     />
                </View>
                <TouchableOpacity
                    style={{
                        width:"50%",
                        alignItems:"center",
                        borderWidth:1,
                        backgroundColor:"grey",
                        marginTop:30
                    }}
                    onPress ={onClickSignIn(idText,pwText)}
                >
                    <Text>login</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    textInputSt: {
        width: "70%",
        height: 30,
        borderBottomWidth: 1,
        marginLeft: 20
    }
})