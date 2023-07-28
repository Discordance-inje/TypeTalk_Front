import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import ProfileImage from "./ProfileImage";
import { useLanding } from "../use-landing";

const left = 10;
const {
    InputType,
    Mbti,
    Birth
} = useLanding();
export default ({ navigation }) => {
    const [page, setPage] = useState(true)
    const [name, setName] = useState('')
    const [nickName, setNickName] = useState('')
    const [sex, setSex] = useState('')
    const [birth, setBirth] = useState('')
    const [mbti, setMbti] = useState('')
    return (
        <>
            {
                page ? <LogInfo page={page} setPage={setPage} /> :
                    <View
                        style={{
                            backgroundColor: "#63B28C",
                            flex: 1,
                            paddingLeft: left,
                            alignItems: "center"
                        }}>
                        <ProfileImage></ProfileImage>

                        <InputType title="이름" text={name} setText={setName} />
                        {/*<Birth text={birth} setText={setBirth}/>*/}
                        <InputType title="닉네임" text={nickName} setText={setNickName} />


                        <Mbti mbti={mbti} setMbti={setMbti}></Mbti>
                        <TouchableOpacity
                            style={{ alignItems: "center", justifyContent: "center", marginTop: 30, borderWidth: 1, width: 60, height: 30 }}
                            onPress={() => { navigation.navigate('SignIn') }}>
                            <Text>확인</Text>
                        </TouchableOpacity>
                    </View>

            }
        </>
    )
}
const LogInfo = ({ page, setPage }) => {
    const [idText, setIdText] = useState('')
    const [pwText, setPwText] = useState('')
    const [mail,setMail] = useState('')
    const [visible,setVisible] = useState(true)
    const MailView = () => {
        return(
            <>
                <InputType title="메일 입력해주세요" text={mail} setText={setMail} />
                <Button title="확인" onPress={() => { setVisible(!visible) }} />
            </>
        )
    }
    const IdPwView = () =>{
        return(
            <>
                <InputType title="아이디" text={idText} setText={setIdText} />
            <InputType title="비밀번호" text={pwText} setText={setPwText(!visible)} />
            <Button title="확인" onPress={() => { setPage(!page) }} />
            </>
            
        )
    }
    return (
        <View
            style={{
                backgroundColor: "#63B28C",
                flex: 1,
                paddingLeft: left,
                alignItems: "center"
            }}>
            {
                visible?<MailView/>:<IdPwView/>
            }
            
            
        </View>
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