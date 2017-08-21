import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

    const { header, imageStyle } = styles;
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;

    return (
        <Card>
            <CardSection>
                <View style = { header.imageView }>
                    <Image style = { header.image }
                           source = {{ uri: thumbnail_image }} />
                </View>
                <View style = { header.content }>
                    <Text style = { header.title }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style = { imageStyle }
                       source = {{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress = {() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    header: {
        imageView: {
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            height: 50,
            width: 50
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        content: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        }
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};


export default AlbumDetail;