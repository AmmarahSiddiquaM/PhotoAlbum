import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Album from '../../screens/Album';
import Wishlist from '../../screens/Wishlist'
import { AlbumStackNavigationContext } from '../context/context'

const Tab = createBottomTabNavigator();

const AlbumUrl = 'https://cdn.onlinewebfonts.com/svg/img_75779.png';
const HeartOutline = 'https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png';
const HeartFilled = 'https://img.icons8.com/windows/452/filled-heart.png';

const BottomTab = ({navigation}) => {
    return (
        <AlbumStackNavigationContext.Provider value={navigation}>
            <Tab.Navigator initialRouteName="Albums" tabBarOptions={{
                activeTintColor: 'white',
                style: {
                    backgroundColor: 'black',
                    paddingTop: 5
                }
            }}>
                <Tab.Screen name="Albums" component={Album} options={{
                    tabBarIcon: ({focused}) => <Image style={focused?{...styles.icon,tintColor:'orange'}:{...styles.icon,tintColor:'white'}} source={{uri:AlbumUrl}} />
                }}/>
                <Tab.Screen name="Wishlist" component={Wishlist} options={{
                    tabBarIcon: ({focused}) => <Image style={focused?{...styles.icon,tintColor:'orange'}:{...styles.icon,tintColor:'white'}} source={focused ? {uri:HeartFilled}: {uri:HeartOutline}} />
                }}/>
            </Tab.Navigator>
        </AlbumStackNavigationContext.Provider>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    icon:{
        height: 30,
        width: 30,
        resizeMode: 'contain',
        tintColor: 'black',       
    }
})
