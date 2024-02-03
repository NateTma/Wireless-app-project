import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextComponent from '../components/TextComponent.js';
import TextBarScreen2 from '../components/TextBarScreen2.js';
import Next7days from '../components/next7days.js'; //check here



export default function NextDaysScreen() {
   const time = 1662904800 * 1000;
   const objDate = new Date(time);
   const humanDateFormat = objDate.toLocaleString();

   const time2 = 1662991200 * 1000;
   const objDate2 = new Date(time2);
   const humanDateFormat2 = objDate2.toLocaleString();




    
    return (
        <View style = {styles.container}>
            <View style={styles.div1}>
            <TextBarScreen/>
            </View>
            <View style={styles.div2}>
            <TextComponent text='Next 7 days' fontWeight='bold' size={20} color='#D6E3FF'/>
            </View>
            <View style = {styles.div3}>
             <Next7days/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#427BFF',
        alignItems: 'center'

    },
    div1: {
        width: '85%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginTop: 40,
        height: '12%'
       
    },div2: {
        width: '82%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 14,
        height: '8%'
       
    },
    div3: {
        width: '87%',
        alignItems: 'flex-start',
        height: '10%',
        paddingLeft: 5
    }
    
})