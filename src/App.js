import React from 'react';
import Highcharts from 'highcharts'
import mapData from './data/mapData.js'
import MapChart from './components/Map.jsx'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

var testData = [
    [    
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
    ], 
 [    
      ['ca-5682', 0],
      ['ca-bc', 21],
      ['ca-nu', 22],
      ['ca-nt', 23],
      ['ca-ab', 24],
      ['ca-nl', 25],
      ['ca-sk', 26],
      ['ca-mb', 27],
      ['ca-qc', 28],
      ['ca-on', 29],
      ['ca-nb', 210],
      ['ca-ns', 211],
      ['ca-pe', 212],
      ['ca-yt', 213]
    ],
    [
      ['ca-5682', 0],
      ['ca-bc', 31],
      ['ca-nu', 32],
      ['ca-nt', 33],
      ['ca-ab', 34],
      ['ca-nl', 35],
      ['ca-sk', 36],
      ['ca-mb', 37],
      ['ca-qc', 38],
      ['ca-on', 39],
      ['ca-nb', 310],
      ['ca-ns', 311],
      ['ca-pe', 312],
      ['ca-yt', 313]
    ]
];

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      currentYear: 2005,
      currentYearIndex: 0,
      options: {
       chart: {
          backgroundColor: '#fffaaa',
          height: (9 / 16 * 100) + '%', //16:9 ratio
        },
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
        tooltip: {
          headerFormat: '',
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
          y: -45,
          style: {
            fontSize: "16px"
          }
        },
        series: [
          {
            mapData: mapData,
            data: testData[0]
          }
        ],
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom"
          },
          enableButtons: true,
          enableDoubleClickZoom: false,
          enableDoubleClickZoomTo: false,
          enableMouseWheelZoom: false
        }
      }
    }
  }

  setYear = (index, year) => {

    // PROBLEM COPYING ARRAY HERE
    let copy = JSON.parse(JSON.stringify(this.state.options))
    console.log(copy)
    console.log(testData)
    copy.series[0].data = testData[index]

    this.setState({
      currentYearIndex: index,
      currentYear: year,
      options: copy
    })
    /**
    currentYearIndex = index;
    currentYear = year;
    console.log(currentYearIndex)
    */
  }

  render() {
    return (
      <div>
        <h3>Select a Year:</h3>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
            <ToggleButton value={0} onClick={() => {this.setYear(0, 2005)}}>2005</ToggleButton>
            <ToggleButton value={1} onClick={() => {this.setYear(1, 2010)}}>2010</ToggleButton>
            <ToggleButton value={2} onClick={() => {this.setYear(2, 2015)}}>2015</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        <MapChart options={this.state.options} highcharts={Highcharts} />
    </div>
    );
  }

}

export default App;