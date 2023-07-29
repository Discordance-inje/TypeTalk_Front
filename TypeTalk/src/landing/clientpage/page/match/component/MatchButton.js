import { useState } from "react";
import { Pressable, Text } from "react-native"
import { useDispatch } from "react-redux"
import { getUserData } from "../../../../../redux/action/manageUser";


export default ({navigation}) => {
    const [ranId,setRanId] =useState(1)
    
    const num = () => {
        const max =3
        const min =1
        return(
            Math.floor(Math.random()*(3-1)+1)
        )
    }
    const dispatch =useDispatch();
    const onPressMatchButton =() => {
        
        console.log(num(),"rannum-=--=--=-=-=-=-==")
        dispatch(getUserData(num()))
    }
    //랜덤 난수 발생 시키기
    //Math.floor(Math.random()*(max-min)*min)
    return(        
        <Pressable
            style={{
                borderWidth:1,
                backgroundColor:null,
                alignItems:"center",
                width:"35%",
                marginTop:20
            }}
            onPress={()=>{navigation.navigate('Matching'), onPressMatchButton()}}
        >
            <Text
                style={{
                    fontWeight:"bold",
                    fontSize: 20
                }}
            >
                매칭
            </Text>
        </Pressable>
        
    )
}