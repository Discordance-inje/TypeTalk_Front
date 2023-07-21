import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Alert
} from "react-native"

export default ({ navigation }) => {
    const onPressLogOut = () =>
        Alert.alert('알림', '로그아웃을 하시겠습니까?', [
            {
                text: '예',
                onPress: () => {navigation.navigate('Home')},
                style: 'cancel',
            },
            { text: '아니오', onPress: () => console.log('OK Pressed') },
        ]);

    const LogOut = () => {
        return (
            <Pressable
                style={styles.layout}
                onPress={onPressLogOut}
            >
                <Text style={styles.txtSt}>
                    로그아웃
                </Text>
            </Pressable>
        )
    }

    return (
        <View style={{ flex: 1, borderWidth: 1 }}>
            <LogOut />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 0.1,
        borderWidth: 1,
        justifyContent: "center",

    },
    txtSt: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 20
    }
})