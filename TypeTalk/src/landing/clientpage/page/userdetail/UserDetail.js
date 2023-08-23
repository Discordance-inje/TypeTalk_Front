import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { client } from "../../../../server/client"
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from "react-redux";



export default ({navigation}) => {
    const userData = useSelector((state)=>state.list.arr);

    useEffect(()=>{
        console.log(userData)
    },[])
    
    return (
        
        <View 
        style={{ flex: 1, alignItems:"center" }}>
            <Pressable style={{width:"100%",
             alignItems:"flex-end",
              paddingTop:10,
              paddingRight:20}}
                onPress={()=>{navigation.navigate('UserFix')}}
            ><Icon name="setting" size ={25}/></Pressable>
            <UserImage userUri={userData[0].image}/>
            <UserInfo title ={"이름"} text = {userData[0].name} fix={false}/>
            {/*<UserInfo title ={"나이"} text = {userData.age}/>*/}
            <UserInfo title ={"MBTI"} text = {userData[0].mbti}/>
            <UserMessage text = {userData[0].message}/>
        </View>
    )
   

}
const UserImage = ({userUri}) => {
    return(
        <View>
        <Image
        style={{backgroundColor:"gray",width:250,height:250,borderRadius:30,marginVertical:5,
        borderWidth:1
    }}
         source={{uri:userUri}}></Image>
        </View>
    )
}

const UserInfo = ({title,text,fix}) => {
    const [visible,setVisible] = useState(false)
    useEffect(()=>{
        fix?setVisible(true):null
    },[])
    return(
        <View 
        style ={styles.info}>
        <Text style={{width:"20%"}}>{title}</Text>
        <Text style={{
            paddingLeft:5, 
            width:"50%",
            borderWidth:fix?1:0,
            backgroundColor:fix?"lightgrey":null
        }}>{text}</Text>
        
        {
            
            visible?<Pressable 
            style={{marginLeft:20}}
            
            ><Icon name="edit" size={18}  /></Pressable>:null
        }
        
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
        flex:0.13,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        height:20,
        
        width:"80%"
    },
    messageBox:{
        flex:0.15,
        marginTop:10,
        borderWidth:1,
        backgroundColor:"lightgrey",
        borderRadius:20,
        width:"80%",
        padding:10,
        marginBottom:40
        
    }
})

export {styles,UserInfo,UserImage,UserMessage}