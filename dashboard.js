var LianjiangCountyAllHospital = [];
var KinmenCountyAllHospital = [];
var ChanghuaCountyAllHospital = [];
var NantouCountyAllHospital = [];
var YunlinCountyAllHospital = [];
var PingtungCountyAllHospital = [];
var YilanCountyAllHospital = [];
var TaitungCountyAllHospital = [];
var HualienCountyAllHospital = [];
var PenghuCountyAllHospital = [];
var KeelungCityAllHospital = [];
var HsinchuCityAllHospital = [];
var TaipeiCityAllHospital = [];
var NewTaipeiCityAllHospital = [];
var TaichungCityAllHospital = [];
var TainanCityAllHospital = [];
var TaoyuanCityAllHospital = [];
var MiaoliCountyAllHospital = [];
var HsinchuCountyAllHospital = [];
var ChiayiCityAllHospital = [];
var ChiayiCountyAllHospital = [];
var KaohsiungCityAllHospital = [];


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
//read json file
function readJsonFile() {
    readTextFile("https://raw.githubusercontent.com/scientia-potentia-est-tw/Taiwan-Hospital-Bed-Analysis/gh-pages/bedInfo.json", function (text) {
        var HospitalBedData = JSON.parse(text);
        var hospitalLoadRate;
        // console.log(HospitalBedData);
        for (let item in HospitalBedData) {
            // sconsole.log(HospitalBedData[item].hosp);
            switch (HospitalBedData[item].city) {
                case "連江縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    LianjiangCountyAllHospital.push(element);
                    break;
                case "金門縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    KinmenCountyAllHospital.push(element);
                    break;
                case "宜蘭縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    YilanCountyAllHospital.push(element);
                    break;
                case "彰化縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    ChanghuaCountyAllHospital.push(element);
                    break;
                case "南投縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    NantouCountyAllHospital.push(element);
                    break;
                case "雲林縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    YunlinCountyAllHospital.push(element);
                    break;
                case "屏東縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    PingtungCountyAllHospital.push(element);
                    break;
                case "台東縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    TaitungCountyAllHospital.push(element);
                    break;
                case "花蓮縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    HualienCountyAllHospital.push(element);
                    break;
                case "澎湖縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    PenghuCountyAllHospital.push(element);
                    break;
                case "基隆市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    KeelungCityAllHospital.push(element);
                    break;
                case "新竹市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    HsinchuCityAllHospital.push(element);
                    break;
                case "台北市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    TaipeiCityAllHospital.push(element);
                    // TaipeiCityAllHospital.push({
                    //     "hosp": HospitalBedData[item].hosp,
                    //     "value": hospitalLoadRate
                    // });

                    // console.log(HospitalBedData[item].hosp, hospitalLoadRate);
                    break;
                case "新北市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    NewTaipeiCityAllHospital.push(element);
                    break;
                case "台中市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    TaichungCityAllHospital.push(element);
                    break;
                case "台南市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    TainanCityAllHospital.push(element);
                    break;
                case "桃園市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    TaoyuanCityAllHospital.push(element);
                    break;
                case "苗栗縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    MiaoliCountyAllHospital.push(element);
                    break;
                case "新竹縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    HsinchuCountyAllHospital.push(element);
                    break;
                case "嘉義市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    ChiayiCityAllHospital.push(element);
                    break;
                case "嘉義縣":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    ChiayiCountyAllHospital.push(element);
                    break;
                case "高雄市":
                    hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    var element = {};
                    element.hosp = HospitalBedData[item].hosp;
                    element.value = hospitalLoadRate;
                    KaohsiungCityAllHospital.push(element);
                    break;
                default:
                    break;
            }
        }
        // console.log("Taipei:" + TaipeiCityAllHospital);
        // console.log(TaipeiCityAllHospital);
    });
}

// console.log(TaipeiCityAllHospital);
function barchart() {
    var data = [{
            "name": "Apples",
            "value": 20,
        },
        {
            "name": "Bananas",
            "value": 12,
        },
        {
            "name": "Grapes",
            "value": 19,
        },
        {
            "name": "Lemons",
            "value": 5,
        },
        {
            "name": "Limes",
            "value": 16,
        },
        {
            "name": "Oranges",
            "value": 26,
        },
        {
            "name": "Pears",
            "value": 30,
        }
    ];
    console.log(data);

    // console.log("Taipei:" + TaipeiCityAllHospital);
    console.log(TaipeiCityAllHospital);

    //sort bars based on value
    TaipeiCityAllHospital = TaipeiCityAllHospital.sort(function (a, b) {
        return d3.ascending(a.value, b.value);
    })
    //set up svg using margin conventions - we'll need plenty of room on the left for labels
    var margin = {
        top: 15,
        right: 25,
        bottom: 15,
        left: 60
    };

    var width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select("#barchart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scale.linear()
        .range([0, width])
        .domain([0, d3.max(TaipeiCityAllHospital, function (d) {
            return d.value;
        })]);

    var y = d3.scale.ordinal()
        .rangeRoundBands([height, 0], .1)
        .domain(TaipeiCityAllHospital.map(function (d) {
            return d.hosp;
        }));

    //make y axis to show bar names
    var yAxis = d3.svg.axis()
        .scale(y)
        //no tick marks
        .tickSize(0)
        .orient("left");

    var gy = svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)

    var bars = svg.selectAll(".bar")
        .data(TaipeiCityAllHospital)
        .enter()
        .append("g")

    //append rects
    bars.append("rect")
        .attr("class", "bar")
        .attr("y", function (d) {
            return y(d.hosp);
        })
        .attr("height", y.rangeBand())
        .attr("x", 0)
        .attr("width", function (d) {
            return x(d.value);
        });

    //add a value label to the right of each bar
    bars.append("text")
        .attr("class", "label")
        //y position of the label is halfway down the bar
        .attr("y", function (d) {
            return y(d.hosp) + y.rangeBand() / 2 + 4;
        })
        //x position is 3 pixels to the right of the bar
        .attr("x", function (d) {
            return x(d.value) + 3;
        })
        .text(function (d) {
            return d.value;
        });
}


$('#countyCitySelect').change(function () {
    // console.log($(this).val());
    var selectItem = document.getElementById("countyCitySelect");
    var selectItemValue = selectItem.options[selectItem.selectedIndex].value;
    // console.log(typeof (selectItemValue));
    switch (selectItemValue) {
        case "連江縣":
            //console.log("enter");
            break;
        case "金門縣":
            //console.log("enter");
            break;
        case "宜蘭縣":
            //console.log("enter")
            break;
        case "彰化縣":
            //console.log("enter");
            break;
        case "南投縣":
            //console.log("enter");
            break;
        case "雲林縣":
            //console.log("enter");
            break;
        case "屏東縣":
            //console.log("enter");
            break;
        case "台東縣":
            //console.log("enter");
            break;
        case "花蓮縣":
            //console.log("enter");
            break;
        case "澎湖縣":
            //console.log("enter");
            break;
        case "基隆市":
            //console.log("enter");
            break;
        case "新竹市":
            //console.log("enter");
            break;
        case "臺北市":
            console.log("enter");
            // var data = [{
            //         x: 1,
            //         w: Math.floor(Math.random() * 200)
            //     },
            //     {
            //         x: 2,
            //         w: Math.floor(Math.random() * 200)
            //     },
            //     {
            //         x: 3,
            //         w: Math.floor(Math.random() * 200)
            //     },
            //     {
            //         x: 4,
            //         w: Math.floor(Math.random() * 200)
            //     },
            //     {
            //         x: 5,
            //         w: Math.floor(Math.random() * 200)
            //     },
            // ];

            var s = d3.select('#barchart')
                .append('svg')
                .attr({
                    'width': 300,
                    'height': 300
                });
            break;
        case "新北市":
            //console.log("enter");
            break;
        case "台中市":
            //console.log("enter");
            break;
        case "台南市":
            //console.log("enter");
            break;
        case "桃園市":
            //console.log("enter");
            break;
        case "苗栗縣":
            //console.log("enter");
            break;
        case "新竹縣":
            //console.log("enter");
            break;
        case "嘉義市":
            //console.log("enter");
            break;
        case "嘉義縣":
            //console.log("enter");
            break;
        case "高雄市":
            //console.log("enter");
            break;
        default:
            break;
    }
});

function start() {
    readJsonFile();
    barchart();
}

window.addEventListener("load", start, false);