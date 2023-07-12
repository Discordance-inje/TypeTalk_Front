import { useState } from "react";
import { Platform, StyleSheet, Text, TextInput,  TouchableOpacity, View } from "react-native"
import { useLanding } from "./use-landing";


export default ({ navigation }) => {
    const left = 10;
    const [idText,setIdText] = useState('')
    const [pwText,setPwText] = useState('')
    const {
        onClickSignIn,
        onClickSignUp
    } = useLanding();
    const moveMain =() =>{
        navigation.navigate('MainPage')
    }
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
                    style={{flexDirection: "row", marginTop: 20, alignItems:"center"}}>
                    <Text style={{width:Platform.OS === "android"? 60:57}}>아이디 :</Text>
                    <TextInput
                     style={styles.textInputSt}
                     value={idText}
                     onChangeText={(idText)=>{setIdText(idText)}}
                     />
                </View>

                <View
                    style={{flexDirection: "row", marginTop: 20,alignItems:"center"}}>
                    <Text style={{width:Platform.OS === "android"? 60:57}}>비밀번호 :</Text>
                    <TextInput
                     style={styles.textInputSt}
                     value={pwText}
                     onChangeText={(pwText)=>{setPwText(pwText)}}
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
                    onPress ={()=>{onClickSignIn(idText,pwText) ,moveMain()}}
                >
                    <Text>login</Text>
                </TouchableOpacity>
                <Text>{idText}sds</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    textInputSt: {
        width: "65%",
        height: Platform.OS === "android"? 40:30,
        borderBottomWidth: 1,
        marginLeft: 20,
        
    }
})