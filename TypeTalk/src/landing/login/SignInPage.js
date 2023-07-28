import { useState } from "react";
import { Platform, StyleSheet, Text, TextInput,  TouchableOpacity, View } from "react-native"
import { useLanding } from "../use-landing";


export default ({ navigation }) => {
    const left = 10;
    const [idText,setIdText] = useState('')
    const [pwText,setPwText] = useState('')
    const {
        onClickSignIn,
        onClickSignUp,
        InputType
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
                 
                <InputType title="아이디" text = {idText} setText ={setIdText}/>
                <InputType title="비밀번호" text = {pwText} setText ={setPwText}/>
                <TouchableOpacity
                    style={{
                        width:"50%",
                        alignItems:"center",
                        borderWidth:1,
                        backgroundColor:"grey",
                        marginTop:30
                    }}
                    onPress ={()=>{onClickSignIn(idText,pwText), navigation.navigate('Client') }}
                >
                    <Text>login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{}}
                        onPress={() =>{navigation.navigate('Home')}}>
                        <Text>홈으로</Text>
                    </TouchableOpacity>
            </View>
        </>
    )
}
