import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useLanding } from "../use-landing";


export default () => {
    const [iconVisible, setIconVisible] = useState(true);
    const [imageSelect, setImageSelect] = useState(false);
    const [photo, setPhoto] = useState('')

    const pickImage = async () => {
        const result = await launchImageLibrary({
            mediaType: "photo"
        });
        const localUri = result.assets[0].uri;
        const uriPath = localUri.split("//").pop();
        const imageName = localUri.split("/").pop();
        setPhoto("file://" + uriPath);
        console.log(photo)
        setIconVisible(!iconVisible)
        setImageSelect(true);

    }

    const {
        CustomIcon,
    } = useLanding();
    // You can also use as a promise without 'callback':

    return (
        <TouchableOpacity
            style={{
                borderWidth: 1,
                alignItems: "center",
                width: 150,
                height: 150,
                justifyContent: "center",
                marginVertical: 45,
                alignContent: "center",
                borderRadius: 75,
                backgroundColor: "gray",
            }}
            onPress={pickImage}>
            {
                iconVisible ? <CustomIcon name="plus" size={14} /> :
                    <Image
                        style={{ width: 150, height: 150, marginVertical: 45, borderRadius: 75, }}
                        source={{ uri: photo }}
                    ></Image>
            }




        </TouchableOpacity>
    )
}