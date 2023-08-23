import { DarkTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, DimensionValue, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/AntDesign"
import { useDispatch } from "react-redux";
import { setLoginUser } from "../redux/action/manageUser";

export const useLanding = () => {
        
    const left = 10;
    const displayHeight = Dimensions.get('window').height;
    const displayWidth = Dimensions.get('window').width;
    
    const onClickSignIn = ({id, pw}) => {
        /*
            true 면 메인으로 이동
            false면 retry
        */
        
        
        console.log(id, pw)
        //

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
    const CustomIcon = ({name, size, color}) => {
        return(
            <Icon name={name} size ={size} color={color}/>
        )
    }
    return {
        onClickSignIn,
        onClickSignUp,
        InputType,
        Mbti,
        Birth,
        CustomIcon,
      
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