import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts'
import HighMaps from 'highcharts/highmaps';
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

const mapOptions = {
  chart: {
        map: 'countries/ca/ca-all',
        height: 200,
        width: 200
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ca/ca-all.js">Canada</a>'
    },

    

    colorAxis: {
        min: 0
    },

    series: [{
          mapData: mapData,
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
}

    const options = {

      title: {
        text: "HighMap Test"
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
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      subtitle: {
        text: "USA",
        floating: true,
        align: "right",
        y: 50,
        style: {
          fontSize: "16px"
        }
      },
      series: [
        {
          mapData: mapData,
          data: data,
          name: "USA",
          dataLabels: {
            enabled: true,
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
      <h2>Highmap</h2>
      <MapChart options={options} highcharts={Highcharts} />
    </div>
    )
}

export default App;