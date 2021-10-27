import React, { useState, useEffect } from 'react'
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
import Bar from './components/Bar.jsx';
import Select from './components/Select.jsx';

function App (props) {
  const [arr, setArr] = useState([]);
  const statistic = [
    {
      name: "adult",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "kid",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "old",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "young",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "undefined",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ];

  useEffect(() => {
		getResultArray ([]);
	}, [])
  
  function getResultArray (arr) {
    let stat = statistic.slice();

    if (arr.length === 0) {
      props.devices.forEach((device) => {
        device.o.forEach((dateStat) => {
          getData(dateStat.n, dateStat.o, stat);
        })
      });
    } else {
      arr.forEach((id) => {
        props.devices.find((device) => device.n === id)
         .o.forEach((dateStat) => {
           getData(dateStat.n, dateStat.o, stat);
        });
      })
    }

    setArr(stat);
  }

  function getData (strDate, arr, stat) {
    let date = new Date(strDate);
    let dataIndex = date.getDay();
    
    arr.forEach((age) => {
      let statIndex = stat.findIndex(ageStat => ageStat.name === age.n);

      stat[statIndex].data[dataIndex] += age.v;
    })
  }

  function getDevicesArray (devicesArr) {
    getResultArray(devicesArr);
  }
  

  return (
    <div>
      <Select
        getDevicesArray={getDevicesArray}
        devices={props.devices}
      />
  
      <Bar statistic={arr} />
    </div>
  );
}

export default App;