import React,{useState} from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const heartOutline = 'https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png';
const heartFilled = 'https://img.icons8.com/windows/452/filled-heart.png';

const Photo = ({id,title,uri}) => {

    const [favourite,setFavourite] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{borderTopLeftRadius:15, borderTopRightRadius:15}} style={styles.image} source={{uri:uri}}> 
                <TouchableWithoutFeedback onPress={() => setFavourite(!favourite)}>
                    <Image style={favourite?{...styles.icon,tintColor:'orange'}:{...styles.icon,tintColor:'white'}} source={favourite?{uri: heartFilled}:{uri: heartOutline}}/>
                </TouchableWithoutFeedback>
            </ImageBackground>
            <View style={styles.heading}>
                <Text numberOfLines={1} style={styles.font}>{title}</Text>
            </View>
        </View>
    )
}

export default Photo

const styles = StyleSheet.create({
    container:{
        height: 250,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    image:{
        height: 200,
        resizeMode: 'contain',
    },
    heading:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    font:{
        fontSize: 22,
        fontWeight: '500',
        marginHorizontal: 10,
    },
    icon:{
        height: 30,
        width: 30,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        margin: 20,
        tintColor: 'white'
    }
})
