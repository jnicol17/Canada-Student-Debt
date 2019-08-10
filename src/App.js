import React from 'react';
import Highcharts from 'highcharts'
import mapData from './data/mapData.js'
import MapChart from './components/Map.jsx'
import './App.css';

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

var data = [
    ['ca-5682', 0],
    ['ca-bc', 1],
    ['ca-nu', 2],
    ['ca-nt', 3],
    ['ca-ab', 4],
    ['ca-nl', 5],
    ['ca-sk', 6],
    ['ca-mb', 7],
    ['ca-qc', 8],
    ['ca-on', 9],
    ['ca-nb', 10],
    ['ca-ns', 11],
    ['ca-pe', 12],
    ['ca-yt', 13]
];

const options = {

  title: {
    text: "Canadian Student Debt by Province"
  },
  plotOptions: {
    map: {
      states: {
        hover: {
          color: "#EEDD66"
        }
      }
    }
  },
  colorAxis: {
    min: 0,
    minColor: "#E6E7E8",
    maxColor: "#005645"
  },
  legend: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
  },

  subtitle: {
    text: "Student Debt",
    floating: true,
    align: "center",
    verticalAlign: "bottom",
    y: -50,
    style: {
      fontSize: "16px"
    }
  },
  series: [
    {
      mapData: mapData,
      data: data,
      name: "{data}",
      dataLabels: {
        enabled: false,
        format: "{point.name}"
      }
    }
  ],
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom"
    }
  }
};


function App() {
  return ( 
    <div>
      <MapChart options={options} highcharts={Highcharts} />
    </div>
    )
}

export default App;