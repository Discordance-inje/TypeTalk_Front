import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default () => {
    const [photo,setPhoto] = useState('')
const pickImage =async () =>{
    const result = await launchImageLibrary({
        mediaType:"photo"
    });
    const localUri = result.assets[0].uri;
    const uriPath = localUri.split("//").pop();
    const imageName = localUri.split("/").pop();
    setPhoto("file://"+uriPath);
    console.log(photo)
}
// You can also use as a promise without 'callback':

    return(
        <TouchableOpacity
            onPress={pickImage}>
            
            <Image 
                style={{backgroundColor:"gray",width:150,height:150,borderRadius:75,marginVertical:30}}
            source={{uri:photo}}
            ></Image>
           
        </TouchableOpacity>
    )
}