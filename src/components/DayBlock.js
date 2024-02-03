import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TextComponent from './TextComponent.js'; // Assuming 'Texto' means 'TextComponent' in Portuguese
import api2, { api } from "../services/apiOneCall";

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function TodayStatus(props) {

  function unixToWeekday(unix) {
    var timestamp = new Date(unix * 1000);
    var day = timestamp.getDay();
    return (weekdays[day]);
  }

  function unixToDate(unix) {
    var timestamp = new Date(unix * 1000);
    var day = timestamp.getDate();
    var month = timestamp.getMonth();
    const date = `${day} ${months[month]}`;
    return (date);
  }

  function unixToHours(unix) {
    var timestamp = new Date(unix * 1000);
    var hours = String(timestamp.toLocaleTimeString());
    return (hours.slice(0, 5));
  }

  const [data, setData] = useState({});
  const [url, setUrl] = useState(api);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  useEffect(() => {
    (async function () {
      setUrl(
        await api2()
          .then((response) => response)
          .then((data) => {
            return data;
          })
      );
    })();
  }, []);

  fetch(url).then(res => res.json()).then(data => {
    setData(data);
  });

  const dataTypeLoad = props.type === 0 || props.type === 1 ? data.current : data.hourly;
  const dataType = props.type === 0 || props.type === 1 ? data.current : data.hourly[props.type];
  var temperature = Math.round(dataTypeLoad ? dataType.temp : null);
  var weather = dataTypeLoad ? dataType.weather[0].main : null;
  var weatherIcon = dataTypeLoad ? dataType.weather[0].icon : null;
  const img = { uri: 'http://openweathermap.org/img/wn/' + weatherIcon + '@4x.png' };

  return (
    <View style={styles.container}>
      <View style={styles.divContainer}>
        <Image style={styles.imgWeatherDay} source={img} />
        <TextComponent text={weather} bold="bold" size={24} color='#ffff' />
        <TextComponent text={`${unixToWeekday(dataType.dt)}, ${unixToDate(dataType.dt)}`} bold="bold" size={13} color='#8DB2FB' />
        <TextComponent text={unixToHours(dataType.dt)} bold="bold" size={13} color='#8DB2FB' />
      </View>
      <View style={styles.divContainer}>
        <TextComponent text={temperature} bold="bold" size={80} color='#ffff' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '70%',
  },
  divContainer: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgWeatherDay: {
    width: 100,
    height: 100,
  },
});

