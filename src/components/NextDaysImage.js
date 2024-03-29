import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'TextComponent' in Portuguese

export default function WeatherIcon(props) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.imgWTempo}} style={{ width: 50, height: 50 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
});
