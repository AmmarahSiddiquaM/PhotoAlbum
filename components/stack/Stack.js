import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../bottomTab/BottomTab';
import Photos from '../../screens/Photos';

const AlbumStack = createStackNavigator();

const Stack = () => {
    return (
        <AlbumStack.Navigator initialRouteName="Album" screenOptions={{headerShown: false}}>
            <AlbumStack.Screen name="Album" component={BottomTab} />
            <AlbumStack.Screen name="Photos" component={Photos} />
        </AlbumStack.Navigator>
    )
}

export default Stack
