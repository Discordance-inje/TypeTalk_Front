import { useEffect, useState } from "react"
import { FlatList, Pressable, Text, TextInput, View } from "react-native"
import {getUniqueId } from "react-native-device-info"
import { useChat } from "../../../hooks/useChat.js"
import { Example } from "./Example.js"

export default ({ navigation: { navigate },route}) => {
    
    const [title,setTitle] = useState(user)
    const [text,setText] = useState('')
    const {
        userList,
        onPressSubmit,
        user
    } = useChat()
    const inputData =[
        {user:"",
        text:""}
    ]
    useEffect(()=>{
        setTitle(user)
        console.log(navigate.name)
    },[])
    return (
        <View style={{flex:1,width:"100%"}}>
            <View style={{flex:0.1,width:"100%",borderWidth:1}}><Text>{route.params.name}</Text></View>
            <Example/>
            {/*<FlatList style={{flex:0.8}}/>
            <View style={{flex:0.1,flexDirection:"row", borderWidth:1,width:"100%"} }>
                <TextInput
                    placeholder="메세지를 입력해주세요"
                    value={text}
                    onChangeText={()=>{setText(text)}}
                    style={{width:"80%",borderWidth:1,padding:10}}
                />
                <Pressable style={{width:"20%",borderWidth:1,justifyContent:"center",alignItems:"center"}}
                    onPress={()=>{onPressSubmit()}}
                >
                    <Text>전송</Text>
                </Pressable>
    </View>*/}
        </View>
    )
}