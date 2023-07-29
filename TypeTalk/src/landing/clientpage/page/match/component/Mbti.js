import { Pressable, Text, View,Dimensions } from "react-native"

export default ({mbti,id}) =>{
    const height = Dimensions.get("screen").height
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
        }}
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