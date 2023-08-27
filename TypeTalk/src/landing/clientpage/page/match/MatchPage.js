import { useState } from "react";
import { Button, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useMatch } from "../../../hooks/useMatch"
import MatchButton from "./component/MatchButton";
import Mbti from "./component/Mbti";

export default ({ navigation }) => {
    const {
        mbtiList,
        onPressMbti
    } = useMatch();
    const height = Dimensions.get("screen").height
    const [list,setList] = useState(mbtiList)
    const [selectedMbti,setSelectedMbti] = useState({})
    const handleButtonClick = (id) => {
        const updatedButtons = mbtiList.map(item => ({
          ...item,
          clicked: item.id === id,
          
        }));
        setList(updatedButtons);
        updateSelectedMbti()
     
      };
    const updateSelectedMbti =() => {
        if(list.find(item=>item.clicked)){
           setSelectedMbti(list.find(item=>item.clicked))
        
        }
        console.log('selectedMbti',selectedMbti)
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 28, fontWeight: "bold", margin: 10 }}>TypeTalk</Text>
            </View>
            <View style={{
                flex: 0.75,
                borderWidth: 1,

            }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={list}
                    renderItem={({ item }) =>

                        <Pressable style={{
                            borderWidth: 1,
                            flex: 1,
                            width: "25%",
                            height: height / 7.5,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginRight: item.id % 4 === 0 ? 0 : 5,
                            marginBottom: 5,
                            backgroundColor: item.clicked ? 'lightgray' : 'white'

                        }}

                            onPress={() => { handleButtonClick(item.id)}}
                        >
                            <View style={{ height: "70%", width: "100%", alignItems: "center",justifyContent:"center" }}>
                                <Image 
                                    style={{
        
                                        width:60,
                                        height:60,
                                        

                                    }}
                                source={{uri:item.image}}/>
                            </View>
                            <View style={{ height: "30%", borderTopWidth: 1, width: "100%", alignItems: "center" }}>
                                <Text>{item.mbti}</Text>
                            </View>
                        </Pressable>

                    }
                    numColumns={4}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}

                />
            </View>
            <View style={styles.footer}>
                <MatchButton navigation={navigation}  selectedMbti={selectedMbti.mbti}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        borderWidth: 1,
    },

    footer: {
        flex: 0.15,
        borderWidth: 1,

        alignItems: "center"
    }
})