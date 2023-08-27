
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { client } from "../../../../server/client"
import { useChat } from "../../../hooks/useChat";

export default ({navigation:{navigate}}) => {
    const { testUser } = client();
    const UserChatProfile = ({ name, image,lastChat }) => {
        const { onPressSelectedList } = useChat();
        return (
            <Pressable
                style={{
                    flexDirection: "row",
                    flex: 0.8,
                    marginBottom: 10,
                    width: "100%",
                    
                }}
                onPress={()=>{navigate('ChatRoom'),onPressSelectedList({name}) }}>
                <View style={{ width: "20%",}}>
                    {/* user image area*/}
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                        }}
                        source={{ uri: image }} />
                </View>
                <View style={{ width: "80%" }}>
                    <Text style={{fontWeight:"bold",fontSize:14}}>{name}</Text>
                    <Text>{lastChat}</Text>
                </View>
    
            </Pressable>
        )
    
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "bold" }}>채팅방</Text>
                <Pressable style={{ marginRight: 20 }}>
                    <Icon name="md-settings-sharp" size={15} />
                </Pressable>

            </View>
            <FlatList
                style={{ flex: 1, borderWidth: 1, padding: 20 }}
                data={testUser}

                renderItem={({ item }) => <UserChatProfile name={item.name} image={item.image} />}
                keyExtractor={item => item.id}

            />

        </View>
    )

    
}


const styles = StyleSheet.create({
    header: {
        borderWidth: 1,
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    content: {
        borderWidth: 1,
        flex: 0.9
    }
})
