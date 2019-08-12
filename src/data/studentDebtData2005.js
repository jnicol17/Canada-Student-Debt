import mapData from './mapData.js'

const studentDebt2005 = [
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

const studentDebt2005Options = {
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
      data: studentDebt2005
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

export default studentDebt2005Options;