import { useEffect, useState } from "react"
import { FlatList, Pressable, Text, TextInput, View } from "react-native"
import {getUniqueId } from "react-native-device-info"
import { useSelector } from "react-redux"
import { useChat } from "../../../hooks/useChat.js"
import Chatting from "./component/Chatting.js"
import { Example } from "./Example.js"

export default ({ navigation}) => {
    
    
    const talkingPartner = useSelector((state)=> state.list.arr)
    const [text,setText] = useState('')
    const {
        userList,
        onPressSubmit,
        user
    } = useChat()
    return (
        <View style={{flex:1,width:"100%"}}>
            <View style={{flex:0.1,width:"100%",borderWidth:1}}>
                <Pressable onPress={()=>{navigation.pop()}}>
                <Text style={{fontSize:24,
                    fontWeight:"bold",
                    marginLeft:10,marginTop:10}}>{talkingPartner[0].name}</Text>
                </Pressable>
                </View>
            
            <Example DATA={talkingPartner}/>
            
            
   
        </View>
    )
}