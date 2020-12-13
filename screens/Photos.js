import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import axios from 'axios';
import Photo from '../components/photos/Photo'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Photos = ({route, navigation}) => {

    const {id} = route.params;

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/album/${id}/photos`)
            setData(result.data);
            console.log(result.data);
            //console.log(data);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.container__heading}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Image style={styles.icon} source={{uri:'https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png'}} />
                </TouchableWithoutFeedback>
                <Text style={styles.heading}>Photos</Text>
            </View>
            <TextInput style={styles.search} placeholder="Search by title" placeholderTextColor='grey'/>
            <FlatList 
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => { 
                    return (<Photo id={item.id} title={item.title} uri={item.thumbnailUrl}/>)
                    } 
                }
            />
        </View>
    )
}

export default Photos

const styles = StyleSheet.create({
    container__heading:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 50,
    },
    heading:{
        fontSize: 25,
        fontWeight: "700",
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    icon:{
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    search:{
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 5,
        marginBottom: 10,
        marginHorizontal: 20
    }
})
