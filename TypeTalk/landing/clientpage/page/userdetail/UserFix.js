import { Button, Text, View } from "react-native"

export default ({navigation}) => {
    return(
        <View>
            <Text>수정</Text>
            <Button onPress={()=>{navigation.pop()}} title={"back"}></Button>
        </View>
    )
}