import { useCallback, useEffect } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { useMatch } from "../../../hooks/useMatch"

export default ({navigation}) => {
    const user = useSelector((state)=> state.list.arr)
    const {
        mbtiList
    } = useMatch()
    const image = mbtiList.find(item=>item.mbti == user[0].mbti).image
    const mbtiText = mbtiList.find(item=>item.mbti == user[0].mbti).text
    
    const onPressTestButton = () => {
        navigation.navigate('Test')
    }
    
    return(
        <View style={{flex:1}}>
            <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        <Text style={styles.boldText}>{user[0].name}</Text>
                     님의 mbti는 
                      <Text style={styles.boldText}> {user[0].mbti}</Text> 입니다.</Text>
                </View>
                <View style={styles.mbtiField}>
                <Image source={{uri:image}}
                    style={{width:250,height:250}}
                />
                </View>
                <View style={styles.mbtiText}>
                    <Text style={{textAlign:"center",fontSize:18,fontWeight:"600"}}>{mbtiText}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable 
                    style ={{
                        width:100,
                        height:50,
                        borderWidth:1,
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    onPress={onPressTestButton}
                ><View>
                    <Text>
                        검사하기
                    </Text>
                    </View></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:4,
        borderWidth:1
    },
    footer:{
        flex:0.8,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        flex:1,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center"
    },
    titleText:{
        fontSize:16,
        
    },
    boldText:{
        fontSize:16,
        fontWeight:"bold"
    },
    mbtiField:{
        flex:7,
        borderWidth:1,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    mbtiText:{
        flex:2,
        borderWidth:1
    }

})