import { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { client } from "../../../../server/client"
import Icon from "react-native-vector-icons"
const {userData} = client(); 

export default ({navigation}) => {
    useEffect(()=>{
        console.log(userData.image)
    },[])
    
    return (
        
        <View 
        style={{ flex: 1, alignItems:"center" }}>
            <Pressable style={{width:"100%", alignItems:"flex-end", paddingTop:10, paddingRight:10}}
                onPress={()=>{navigation.navigate('UserFix')}}
            ><Text>수정버튼</Text></Pressable>
            <UserImage userUri={userData.image}/>
            <UserInfo title ={"이름"} text = {userData.name}/>
            <UserInfo title ={"나이"} text = {userData.age}/>
            <UserInfo title ={"MBTI"} text = {userData.mbti}/>
            <UserMessage text = {userData.message}/>
        </View>
    )
   

}
const UserImage = ({userUri}) => {
    return(
        <View>
        <Image
        style={{backgroundColor:"gray",width:250,height:250,borderRadius:30,marginVertical:30,
        borderWidth:1
    }}
         source={{uri:userUri}}></Image>
        </View>
    )
}
const UserInfo = ({title,text}) => {
    return(
        <View 
        style ={styles.info}>
        <Text style={{marginRight:30}}>{title}</Text>
        <Text>{text}</Text>
    </View>
    )
    
}
const UserMessage = ({text}) =>{
    return(
        <View style={styles.messageBox}>
            <Text>
                {text}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    info:{
        flex:0.15,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        height:20,
        
        width:"80%"
    },
    messageBox:{
        flex:0.55,
        borderWidth:1,
        backgroundColor:"lightgrey",
        borderRadius:20,
        width:"80%",
        padding:10,
    }
})