import { useCallback, useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import ProfileImage from "./ProfileImage";
import { useLanding } from "../use-landing";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from "../../redux/action/manageUser";

const left = 10;
const {
    InputType,
    Birth
} = useLanding();
export default ({ navigation }) => {
    const [page, setPage] = useState(true)
    const [name, setName] = useState('')
    const [nickName, setNickName] = useState('')
    const [sex, setSex] = useState('')
    const [birth, setBirth] = useState('')
    const [mbti, setMbti] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.list.arr)
    
    const Mbti = ({ mbti, setMbti }) => { 
    
    useEffect(()=>{
        console.log('user',user)
        setMbti(user[0].mbti)
    },[user])
    return (
        <View
            style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
            <View style={{
                width: "40%",
                flexDirection: "row",
                height: Platform.OS === "android" ? 40 : 30,
                marginLeft:-157
            }}>
                <Text style={{ width: '80%' }}>mbti :</Text>
                <View style={{width:'50%',borderBottomWidth:1,marginLeft:-45}}>
                <Text
                    style={{
                        width: 60,
                        height: Platform.OS === "android" ? 40 : 30,
                        borderBottomWidth: 1,
                    }}
                    
                >{mbti}</Text>
                </View>
                
                <TouchableOpacity style={{
                    alignItems: "center",
                    width: 80,
                    borderWidth: 1,
                    justifyContent: "center",
                    marginLeft: left,
                    backgroundColor: "white",
                }}
                    onPress = {()=>{navigation.navigate('Test')}}
                ><Text>검사하기</Text></TouchableOpacity>
            </View>
        </View>
    )
}
    return (
        <>
            {
                page ? <LogInfo page={page} setPage={setPage} /> :
                    <View
                        style={{
                            backgroundColor: "#0080C8",
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
    const [mail, setMail] = useState('')
    const [visible, setVisible] = useState(true)
    const MailView = () => {
        return (
            <>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 125
                }}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>메일</Text>
                    <TextInput
                        style={styles.textInputSt}
                        placeholder={'메일을 입력해주세요'}
                        text={mail}
                        setText={setMail} />

                </View>

                <Pressable
                style={{marginTop:40}}
                 onPress={() => { setVisible(!visible) }}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}> 확인 </Text>
                </Pressable>
            </>
        )
    }
    const IdPwView = () => {
        return (
            <>
            <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 125
                }}></View>
                <View style={{flexDirection:"row",alignItems: "center",
                    justifyContent: "center",}}>
                <Text style={{fontSize:16,fontWeight:"bold",width:55}}>아이디</Text>
                
                <TextInput
                        style={styles.textInputSt}
                        placeholder={'아이디를 입력해주세요'}
                        text={idText}
                        setText={setIdText} />
                </View>
                <View style={{flexDirection:"row",alignItems: "center",
                    justifyContent: "center",marginTop:40,marginBottom:40}}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>비밀번호</Text>
                <TextInput
                        style={styles.textInputSt}
                        placeholder={'비밀번호를 입력해주세요'}
                        text={pwText}
                        setText={setPwText} />
                
                </View>
                
                <Pressable onPress={() => { setPage(!page) }}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}> 확인 </Text>
                </Pressable>
            </>

        )
    }
    return (
        <View
            style={{
                backgroundColor: "#0080C8",
                flex: 1,
                paddingLeft: left,
                alignItems: "center"
            }}>
            {
                visible ? <MailView /> : <IdPwView />
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