import mapData from './mapData.js'

const studentDebt2015 = [
	['ca-5682', 0],
	['ca-bc', 122],
	['ca-nu', 222],
	['ca-nt', 322],
	['ca-ab', 422],
	['ca-nl', 522],
	['ca-sk', 622],
	['ca-mb', 722],
	['ca-qc', 822],
	['ca-on', 922],
	['ca-nb', 1022],
	['ca-ns', 1122],
	['ca-pe', 1222],
	['ca-yt', 1322]
]

const studentDebt2015Options = {
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
      data: studentDebt2015
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

export default studentDebt2015Options;