import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodayStatus from './DayBlock.js'; //check here 
import InfoBlock from "./InfoBlock.js"; //check here 
import TextBar from '../components/TextBar.js'; 

export default function TodayWeather(props) {
    return (
        <>
            <View style={styles.container}>
                <TodayStatus type={props.activeCard} />
                <InfoBlock type={props.activeCard} />
            </View>
            <TextBar />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: '60%',
        backgroundColor: '#427BFF',
        borderWidth: 2,
        borderColor: '#427BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
})
