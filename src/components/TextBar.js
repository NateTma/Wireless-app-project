import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'Text' in Portuguese
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function TextBar({}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextComponent text='Today' bold='bold' size={17} color='#232323' />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Next 7 days')}>
          <TextComponent text='Next 7 days' bold='bold' size={17} color='#747474' />
        </TouchableOpacity>
        <Icon name="chevron-right" size={17} color='#747474' style={{ paddingLeft: 10 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
