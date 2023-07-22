
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

export default () => {
    
    return(
        <View style={{flex:1}}>
        <View style={styles.header}>
            <Text style={{marginLeft:20,fontSize:18,fontWeight:"bold"}}>채팅방</Text>
            <Pressable style={{marginRight:20}}>
                <Icon name="md-settings-sharp" size={15}/>
            </Pressable>
            
        </View>
        <ScrollView style={styles.content}>
        
        </ScrollView>
    </View>
    )
    
}

const styles = StyleSheet.create({
    header:{
        borderWidth:1,
        flex:0.1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    content:{
        borderWidth:1,
        flex:0.9
    }
})
