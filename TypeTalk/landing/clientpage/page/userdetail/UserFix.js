import { Button, Pressable, Text, View } from "react-native"
import { client } from "../../../../server/client";
import { useLanding } from "../../../use-landing";
import UserDetail, { UserInfo,UserMessage,UserImage } from "./UserDetail"
import { styles } from "./UserDetail"
const {CustomIcon} = useLanding();
const {userData} = client(); 
export default ({navigation}) => {
    return(
        <View
        style={{ flex: 1, alignItems:"center" }}>
            <View style={{flexDirection:"row",width:"100%", paddingHorizontal:30, justifyContent:"flex-end",paddingTop:10}}>
            
            <Pressable style={{marginRight:10}}
                onPress={()=>{navigation.pop()}}    
            >
            <CustomIcon name = "check" size={20}/>    
            </Pressable>
            <Pressable
                style={{}}
                onPress={()=>{navigation.pop()}}
            >
            
            <CustomIcon name = "close" size={20}/>
            </Pressable>
            </View>
            
            <UserImage userUri={userData.image}/>
            
            <UserInfo title ={"이름"} text = {userData.name} fix={true}/> 
            <UserInfo title ={"나이"} text = {userData.age} fix={true}/>
            <UserInfo title ={"MBTI"} text = {userData.mbti} fix={true}/>
            <UserMessage text = {userData.message}/>
            <Pressable
                style={{
                  borderBottomWidth:1
                }}
                onPress={()=>{navigation.navigate('Account')}}
            ><Text style={{marginHorizontal:10,marginTop:10,fontSize:15,textDecorationStyle:"solid"}}>계정관리</Text></Pressable>
        </View>
    )
}