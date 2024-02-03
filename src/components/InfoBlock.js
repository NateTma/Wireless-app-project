import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import InformationToday from "./information.js"; // Assuming 'Informacoes' means 'Information' in Portuguese
import api2, { api } from "../services/apiOneCall";

export default function InfoBlock(props) {
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

  const dataType = props.type === 0 || props.type === 1 ? data.current : data.hourly[props.type];
  const dataTypeLoad = props.type === 0 || props.type === 1 ? data.current : data.hourly;

  var windSpeed = Math.round((dataTypeLoad ? dataType.wind_speed : null) * 3.6);
  var feelsLike = Math.round(dataTypeLoad ? dataType.feels_like : null);
  var uvIndex = dataTypeLoad ? dataType.uvi : null;
  var pressure = dataTypeLoad ? dataType.pressure : null;

  return (
    <View style={styles.container}>
      <InformationToday
        icon="wind"
        typeText="WIND"
        valueText={windSpeed + " Km/h"}
        borderLeft={0}
      />
      <InformationToday
        icon="thermometer"
        typeText="FEELS LIKE"
        valueText={feelsLike + " º"}
        borderLeft={1}
      />
      <InformationToday
        icon="sun"
        typeText="UV INDEX"
        valueText={uvIndex}
        borderLeft={0}
      />
      <InformationToday
        icon="activity"
        typeText="PRESSURE"
        valueText={pressure + " mbar"}
        borderLeft={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});

