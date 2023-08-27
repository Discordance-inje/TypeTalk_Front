import { useState, } from "react"
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { setUserMbti } from "../../../../redux/action/manageUser"
import { useMatch } from "../../../hooks/useMatch"
import { useTest } from "../../../hooks/useTest"

export default MbtiTest = ({ navigation }) => {
    const logopath = '/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/logo/7-removebg-preview.png'
    const [cnt, setCnt] = useState(1)
    const [result, setResult] = useState('')
    const user = useSelector((state) => state.list.arr)
    const userId = user[0].id
    const dispatch = useDispatch()
    const {
        sentenceList,
        onPressButton,
        setDefault,
        loadBar
    } = useTest()
    const {
        mbtiList
    } = useMatch()

    const onPressAsnwer = (positive) => {
        //setBarWidth(changBarState(cnt)+'%')
        //positive == ture || false
        console.log('cnt1',cnt)
        
        if (cnt <= 12) {
            setCnt(cnt + 1)
        }setResult(onPressButton({ cnt, positive }))
        console.log('cnt2',cnt)
        
    }
    const saveMyMbti = ({ result, userId }) => {
        if(userId == -1){
            dispatch(setUserMbti(result, userId))
            navigation.navigate('SignUp')    
            
        }
        else{
            dispatch(setUserMbti(result, userId))
            navigation.navigate('Client')
        }
       
        
    }
    const onPressSave = () => {

        Alert.alert('저장', '저장하시겠습니까?', [
            {
                text: '예', onPress: () => {
                    setDefault();
                    setCnt(0);
                    saveMyMbti({ result, userId })
                }
            },
            {
                text: '아니요',
                style: 'cancel',
            },
        ])
        //정보 업데이트 해야하노
    }
    const Sentence = () => {
        return (
            <>
                <View style={styles.titleBar}>
                    <View style={{
                        borderWidth: 1,
                        height: '100%',
                        backgroundColor: 'black',
                        width:loadBar+'%'
                    }}></View>
                </View>
                <View style={styles.content}>

                    <View style={styles.contentImage}>
                        <Text> 대충 이미지 들어갈 예정</Text>
                    </View>
                    <View style={styles.contentText}>
                        <Text style={{textAlign:"center",fontSize:17,fontWeight:"500"}}>{sentenceList[cnt].text}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Pressable style={styles.answerButton}
                        onPress={() => { onPressAsnwer(true) }}
                    >
                        <Text style={{fontWeight:"bold"}}> {sentenceList[cnt].answerPositive}</Text>
                    </Pressable>
                    <Pressable style={styles.answerButton}
                        onPress={() => { onPressAsnwer(false) }}
                    >
                        <Text style={{fontWeight:"bold"}}>  {sentenceList[cnt].answerNagative}</Text>
                    </Pressable>
                </View>
            </>
        )
    }
    const ResultContent = () => {
        const resultIconPath = mbtiList.find(item => item.mbti == result).image
        const resultText = mbtiList.find(item => item.mbti == result).text
        return (
            <View style={{ flex: 1.5 }}>
                <View style={{
                    flex: 3,
                    alignItems: "center",
                    alignContent: "center"
                }}>
                    <Image source={{ uri: resultIconPath }}
                        style={{ borderWidth: 1, width: "30%", height: 150 }}
                    ></Image>
                    <Text style={{ borderWidth: 1, fontSize: 18, }}>
                        당신은 {result} 입니다. {'\n'}
                    </Text>
                    <Text style={{ width: "80%", fontSize: 16, textAlign: "center", }}>{resultText}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Pressable
                        style={{
                            width: "80%",
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1
                        }}
                        onPress={() => { onPressSave() }}>
                        <Text>저장하기</Text>
                    </Pressable>
                </View>

            </View>
        )
    }
    console.log(cnt/12*100)
    return (
        
        <View style={{ flex: 1 }}>
            <View style={styles.title}>
                <Image source={{ uri: logopath }}
                    style={{ width: 300, height: 100 }}
                ></Image>
            </View>

            {cnt < 12 ? <Sentence /> : <ResultContent />}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        flex: 4,
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",

    },
    contentImage: {
        marginTop: 10,
        borderWidth: 1,
        width: '80%',
        height: '60%'
    },
    contentText: {
        marginTop: 10,
        borderWidth: 1,
        width: '80%',
        height: '30%',
        
    },
    footer: {
        flex: 1.5,
        borderWidth: 1,
        alignItems: "center"
    },
    answerButton: {
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        width: '80%',
        marginBottom: 10,
        height: 45
    },
    titleBar: {
        flex: 0.2,
        width: "80%",
        borderWidth: 1,
        marginLeft:'10%',
        alignItems: "flex-start",
        backgroundColor:'gray',
        
    },

})