import { useState } from "react"
import { Pressable, Text, View,Dimensions } from "react-native"
import { useMatch } from "../../../../hooks/useMatch"

export default ({mbti,id,bgColor,onPressMbti}) =>{

   
    
    return(
        <Pressable style={{
            borderWidth:1,
            flex:1,
            width:"25%",
            height:height/7.5,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:10,
            marginRight:id%4===0?0:5,
            marginBottom:5,
            backgroundColor:bgColor
            
        }}
        
        onPress={()=>{ onPressMbti(id)}}
        >
            <View style={{height:"70%",width:"100%",alignItems:"center"}}>
                <Text>IMG</Text>
            </View>
            <View style={{height:"30%",borderTopWidth:1,width:"100%",alignItems:"center"}}>
                <Text>{mbti}</Text>
            </View>
        </Pressable>
    )
    
}