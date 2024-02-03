import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'TextComponent' in Portuguese
import { local } from '../services/localization'; // Assuming 'localizacao' means 'localization' in Portuguese

export default function Location(props) {
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();

  useEffect(() => {
    (async function () {
      await local()
        .then((response) => response)
        .then((data) => {
          setCity(data[0].city !== null ? data[0].city : data[0].subregion);
          setDistrict(data[0].district !== null ? data[0].district : data[0].city);
        });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        <TextComponent
          text={district !== undefined ? `${district}, ` : null}
          bold='normal'
          size={props.size1}
          color={props.color1}
        />
        <TextComponent text={city} bold='normal' size={props.size2} color={props.color2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '2%',
    display: 'flex',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
});
