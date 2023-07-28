import { useEffect, useState } from "react"
import { FlatList, Pressable, Text, TextInput, View } from "react-native"
import {getUniqueId } from "react-native-device-info"
import { useSelector } from "react-redux"
import { useChat } from "../../../hooks/useChat.js"
import { Example } from "./Example.js"

export default ({ navigation}) => {
    
    const title = useSelector((state)=> state.user.state)
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
    const test= () =>{
        console.log('---')
        console.log(title)
    
    }
    
    return (
        <View style={{flex:1,width:"100%"}}>
            <View style={{flex:0.1,width:"100%",borderWidth:1}}>
                <Pressable onPress={()=>{navigation.pop()}}>
                <Text>{title}</Text>
                </Pressable>
                </View>
            
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
    <Pressable onPress={()=>{test()}}>
                    <Text>adas</Text>
                </Pressable>
        </View>
    )
}