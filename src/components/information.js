import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'TextComponent' in Portuguese
import Icon from 'react-native-vector-icons/Feather';

export default function InformationToday(props) {
    return (
        <View style={[styles.container, { backgroundColor: props.color, borderLeftWidth: props.borderLeft }]}>
            <View><Icon name={props.icon} size={30} color='#ffff' /></View>
            <View style={styles.infoContainer}>
                <TextComponent text={props.typeText} fontWeight='row' fontSize={13} color='#f0f8ffa6' />
                <TextComponent text={props.valueText} fontWeight='bold' fontSize={13} color='#ffff' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f0f8ff',
        borderLeftWidth: 1,
        borderLeftColor: '#f0f8ff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    infoContainer: {
        marginLeft: 10,
        width: '45%'
    }
});

