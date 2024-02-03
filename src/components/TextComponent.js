import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function TextComponent(props) {
  return (
    <View>
      <Text style={[styles.text, { fontWeight: props.bold, fontSize: props.size, color: props.color }]}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
  },
});
