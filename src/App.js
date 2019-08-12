import React from 'react';
import Highcharts from 'highcharts'
import mapData from './data/mapData.js'
import studentDebt2005Options from './data/studentDebtData2005.js'
import studentDebt2010 from './data/studentDebtData2010.js'
import MapChart from './components/Map.jsx'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

class App extends React.Component {
  constructor (props){
    super(props);
    console.log(this.props.year)
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
            data: [
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
            ]
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
    let test = JSON.parse(JSON.stringify(this.state.options))
    console.log(this.state.options)
    console.log(test)
    let newSeries = {};
    newSeries.mapData = mapData;
    if (index === 1){
      newSeries.data = [
        ['ca-5682', 0],
        ['ca-bc', 11],
        ['ca-nu', 21],
        ['ca-nt', 31],
        ['ca-ab', 41],
        ['ca-nl', 51],
        ['ca-sk', 61],
        ['ca-mb', 71],
        ['ca-qc', 81],
        ['ca-on', 91],
        ['ca-nb', 101],
        ['ca-ns', 111],
        ['ca-pe', 121],
        ['ca-yt', 131]];
    }
    else {
      newSeries.data = [
        ['ca-5682', 0],
        ['ca-bc', 111],
        ['ca-nu', 211],
        ['ca-nt', 311],
        ['ca-ab', 411],
        ['ca-nl', 511],
        ['ca-sk', 611],
        ['ca-mb', 711],
        ['ca-qc', 811],
        ['ca-on', 911],
        ['ca-nb', 1011],
        ['ca-ns', 1111],
        ['ca-pe', 1211],
        ['ca-yt', 1311]];
    }
    test.series.pop()
    test.series.push(newSeries)
    console.log(test)
    this.setState({
      currentYearIndex: index,
      currentYear: year,
      options: test
    })
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