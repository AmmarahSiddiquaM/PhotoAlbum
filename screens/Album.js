import Axios from 'axios'
import React,{ useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AlbumComponent from '../components/album/Album'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import { AlbumStackNavigationContext } from '../components/context/context'

const Album = () => {

    const [data, setData] = useState([]);

    const Navigation = useContext(AlbumStackNavigationContext);

    useEffect(() => {
        (async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/albums')
            setData(result.data);
            //console.log(result.data);
            //console.log(data);
        })()
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Albums</Text>
            <FlatList 
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => { 
                    return (<AlbumComponent id={item.id} title={item.title} navigation={Navigation}/>)
                    } 
                }
            />
        </View>
    )
}

export default Album

const styles = StyleSheet.create({
    heading:{
        fontSize: 25,
        fontWeight: "700",
        marginTop: 50,
        marginHorizontal: 20,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    }
})
