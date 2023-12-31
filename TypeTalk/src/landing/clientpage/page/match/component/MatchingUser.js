import { Image, ImageBackground, Pressable, Text, View } from "react-native"
import { useSelector } from "react-redux"
import Icon from 'react-native-vector-icons/AntDesign'
import { UserImage } from "../../userdetail/UserDetail"
export default ({navigation}) => {

    let user = useSelector((state) => state.list.arr)
    const MatButton = ({ text,onPressFx }) => {
        return (
            <Pressable
                onPress={()=>{onPressFx()}}
                style={{
                    marginTop:20,
                    marginLeft:text=="close"?20:40,
                    borderWidth:1,
                    borderRadius:text==="close"?10:0,
                    height:"50%",
                    justifyContent:"center",
                    width:text==="close"?"10%":"60%",
                    alignItems:"center"
                }}>
                {
                    text === "대화하기" ?
                        <Text style={{fontWeight:"bold",fontSize:22,}}>대화하기</Text> :
                        <Icon name="close" />


                }
            </Pressable>
        )

    }
    const UserProfile =() => {
        return(
            <ImageBackground
            style={{
                width: "100%",
                height: "100%",
                flexDirection: "column-reverse",
                alignItems: "flex-end"
            }}
            resizeMode="cover"
            
            aria-hidden={true}
            source={{ uri: user[0].image }}>
            <Text
                style={{
                    paddingLeft: 10,
                    paddingTop: 10,
                    width: "100%",
                    height: "28%",
                    backgroundColor: '#000000c0',
                    borderWidth: 0,
                    color: 'white'
                }}>

                {user[0].name}    {user[0].mbti}
                {'\n\n'}
                {user[0].message}
            </Text>
        </ImageBackground>

        )
    }
    const onPressTalk=()=>{

    }
    const onPressCloseUser=()=>{
        navigation.navigate('Match')
    }
    return (
        <View
            style={{flex: 1,borderWidth: 1,}}>
            <View
                style={{flex: 0.85,borderWidth: 1,}}>
            <UserProfile/>
            </View>
            <View style={{flexDirection: 'row',flex: 0.15,borderWidth: 1}}>
                {/*버튼 영역 */}
                <MatButton text={'대화하기'} onPressFx={onPressTalk()}/>
                <MatButton 
                text={'close'} onPressFx={onPressCloseUser}/>
            </View>
        </View>
    )
}