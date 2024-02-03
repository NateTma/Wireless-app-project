import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherStatus from './DayBlock.js'; //check here // Assuming 'StatusHoje' means 'DayBlock' in Portuguese
import InfoBlock from "./InfoBlock.js"; //check here // Assuming 'BlocoInformacoes' means 'InformationBlock' in Portuguese
import TextBar from '../components/TextBar.js'; // Assuming 'BarraTexto' means 'TextBar' in Portuguese

export default function TodayWeather(props) {
    return (
        <>
            <View style={styles.container}>
                <WeatherStatus type={props.activeCard} />
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
