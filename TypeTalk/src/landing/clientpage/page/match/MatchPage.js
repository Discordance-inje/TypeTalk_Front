import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import { useMatch } from "../../../hooks/useMatch"
import MatchButton from "./component/MatchButton";
import Mbti from "./component/Mbti";

export default ({navigation}) =>{
    const{
        mbtiList
    } = useMatch();
    const [align,setAlign] =useState('row')
    console.log (mbtiList)
    return(
        <View style={{flex:1}}>
            <View style={styles.header}>
                <Text style={{fontSize:28,fontWeight:"bold",margin:10}}>TypeTalk</Text>
            </View>
            <View style={{
                 flex:0.75,
                 borderWidth:1,
                 
            }}>
                <FlatList
                    style={{flex:1}}
                    data={mbtiList}
                    renderItem={({item})=>
                        <Mbti mbti={item.mbti} id={item.id}/>
                    }
                    numColumns={4}
                    keyExtractor={item=> item.id}
                    scrollEnabled={false}
                />
            </View>
            <View style={styles.footer}>
                    <MatchButton navigation={navigation}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        flex:0.1,
        borderWidth:1,
    },
   
    footer:{
        flex:0.15,
        borderWidth:1,
        
        alignItems:"center"
    }
})