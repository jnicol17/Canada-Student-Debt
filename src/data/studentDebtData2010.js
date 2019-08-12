import mapData from './mapData.js'

const studentDebt2010 = [
	['ca-5682', 0],
	['ca-bc', 12],
	['ca-nu', 22],
	['ca-nt', 32],
	['ca-ab', 42],
	['ca-nl', 52],
	['ca-sk', 62],
	['ca-mb', 72],
	['ca-qc', 82],
	['ca-on', 92],
	['ca-nb', 102],
	['ca-ns', 112],
	['ca-pe', 122],
	['ca-yt', 132]
]

const studentDebt2010Options = {
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
      data: studentDebt2010
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

export default studentDebt2010Options;