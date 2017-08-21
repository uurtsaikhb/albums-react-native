// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';


import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// create a component
const App = () => {
    return (
        <View style = {{ flex: 1}}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};
2
// render it to device
AppRegistry.registerComponent('albums', () => App);