import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'TextComponent' in Portuguese

export default function ForecastCard(props) {
  const containerStyle = {
    backgroundColor: props.status === 1 ? "#E2DEDD" : "#427BFF",
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TextComponent text={props.txtHour} size={30} color={props.corH} bold='normal' />
      <Image source={{ uri: props.imgWeather }} style={{ width: 30, height: 30 }} />
      <TextComponent text={props.txtTemperature} size={15} color={props.corT} bold='bold' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    marginRight: 15,
    height: '100%',
    borderWidth: 1,
    borderColor: '#0000002c',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-evenly',
  },
});
