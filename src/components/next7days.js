import React, { useState, useEffect } from 'react';
import DayRow from '../components/DayRow.js'; // Assuming 'LinhaDia' means 'DayRow' in Portuguese
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

import api2, { api } from '../services/apiDaily';

function GetDayRow(props) {
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

  function unixToWeekday(unix) {
    var timestamp = new Date(unix * 1000);
    var formatted = timestamp;
    var day = formatted.getDay();
    return weekdays[day];
  }

  function unixToDate(unix) {
    var timestamp = new Date(unix * 1000);
    var formatted = timestamp;
    var day = formatted.getDate();
    var month = formatted.getMonth();
    const date = ` / ${day} ${months[month]}`;
    return date;
  }

  return (
    <DayRow
      x={props.x}
      imgTempo={`http://openweathermap.org/img/wn/${data.list ? data.list[props.x].weather[0].icon : null}@4x.png`}
      day={unixToWeekday(data.list ? data.list[props.x].dt : null)}
      date={unixToDate(data.list ? data.list[props.x].dt : null)}
      main={`${Math.round(data.list ? data.list[props.x].temp.max : null)}º`}
      secondary={`${Math.round(data.list ? data.list[props.x].temp.min : null)}º`}
      size1={21}
      size2={16}
      color1='#E4EDFF'
      color2='#9EBBFF'
    />
  );
}

export default function NextDays() {
  return (
    <>
      <GetDayRow x={1} />
      <GetDayRow x={2} />
      <GetDayRow x={3} />
      <GetDayRow x={4} />
      <GetDayRow x={5} />
      <GetDayRow x={6} />
      <GetDayRow x={7} />
    </>
  );
}
