import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'TextComponent' in Portuguese

export default function Temperature(props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextComponent text={props.main} bold='normal' size={props.size1} color={props.color1} />
        <TextComponent text=" / " bold='normal' size={18} color='#A0BDFF' />
        <TextComponent text={props.secondary} bold='normal' size={props.size2} color={props.color2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
