import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'TextComponent' in Portuguese

export default function DateInfo(props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextComponent text={props.day} bold='bold' size={props.size1} color={props.color1} />
        <TextComponent text={props.data} bold='normal' size={props.size2} color={props.color2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
