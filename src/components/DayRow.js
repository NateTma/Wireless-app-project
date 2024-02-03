import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherIcon from './NextDaysImage.js'; // Assuming 'IconeProxDias' means 'WeatherIcon' in Portuguese
import DateInfo from './DateInfo.js'; // Assuming 'Data' means 'DateInfo' in Portuguese
import Temperature from './Temperature.js'; // Assuming 'Temperatura' means 'Temperature' in Portuguese

export default function DayRow(props) {
    return (
        <View style={styles.container}>
            <View style={styles.div2}>
                <View style={styles.div1}><WeatherIcon imgTempo={props.imgTempo} /></View>
                <View style={styles.div2}><DateInfo day={props.day} date={props.date} size1={16} size2={14} color1='#E6EEFF' color2='#A0BDFF' /></View>
                <View style={styles.div3}><Temperature main={props.main} secondary={props.secondary} size1={props.size1} size2={props.size2} color1={props.color1} color2={props.color2} /></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '68%',
        justifyContent: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15,
    },
    div1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '25%',
    },
    div2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '83%',
    },
    div3: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '68%',
    }
});
