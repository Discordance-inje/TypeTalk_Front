import { useState } from "react";
import { Image, Platform, StyleSheet, Text, TextInput,  TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../redux/action/manageUser";
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

    const dispatch = useDispatch()
    const logoPath = '/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/logo/logo2.PNG'
    const login =(id)=>{ dispatch(setLoginUser(id))}
    return (
        <>
            <View
                style={{
                    backgroundColor: "#0080C8",
                    flex: 1,
                    paddingHorizontal: left,
                    alignItems:"center"
                }}>
                    <View
                style={{
                    backgroundColor:'white',
                    marginTop:50,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "38%",
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
                 <View style={{marginTop:50}}>
                <InputType title="아이디" text = {idText} setText ={setIdText}/>
                <InputType title="비밀번호" text = {pwText} setText ={setPwText}/>
                </View>
                <TouchableOpacity
                    style={{
                        width:"50%",
                        alignItems:"center",
                        borderWidth:1,
                        backgroundColor:"white",
                        marginTop:30,
                        height:34,
                        justifyContent:"center",
                        marginTop:50
                    }}
                    onPress ={()=>{onClickSignIn(idText,pwText), login(idText),navigation.navigate('Client') }}
                >
                    <Text style={{fontSize:16,fontWeight:"bold"}}>login</Text>
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
