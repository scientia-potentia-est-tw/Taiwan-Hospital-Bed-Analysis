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
                    if (HospitalBedData[item].info["總數"] == 0) {
                        hospitalLoadRate = 0;
                    } else {
                        hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    }
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
                    if (HospitalBedData[item].info["總數"] == 0) {
                        hospitalLoadRate = 0;
                    } else {
                        hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                    }
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
function barchart(data) {
    $("#barchart").html("");
    // var data = [{
    //         "name": "Apples",
    //         "value": 20,
    //     },
    //     {
    //         "name": "Bananas",
    //         "value": 12,
    //     },
    //     {
    //         "name": "Grapes",
    //         "value": 19,
    //     },
    //     {
    //         "name": "Lemons",
    //         "value": 5,
    //     },
    //     {
    //         "name": "Limes",
    //         "value": 16,
    //     },
    //     {
    //         "name": "Oranges",
    //         "value": 26,
    //     },
    //     {
    //         "name": "Pears",
    //         "value": 80,
    //     }
    // ];
    console.log(data);

    // console.log("Taipei:" + TaipeiCityAllHospital);
    // console.log(TaipeiCityAllHospital);

    //sort bars based on value
    data = data.sort(function (a, b) {
        return d3.ascending(a.value, b.value);
    })
    //set up svg using margin conventions - we'll need plenty of room on the left for labels
    var margin = {
        top: 15,
        right: 25,
        bottom: 15,
        left: 240
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
        .domain([0, d3.max(data, function (d) {
            return d.value;
        })]);

    var y = d3.scale.ordinal()
        .rangeRoundBands([height, 0], .1)
        .domain(data.map(function (d) {
            return d.name;
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
        .data(data)
        .enter()
        .append("g")

    //append rects
    bars.append("rect")
        .attr("class", "bar")
        .attr("y", function (d) {
            return y(d.name);
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
            return y(d.name) + y.rangeBand() / 2 + 4;
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
            console.log(LianjiangCountyAllHospital);
            var data = [];
            barchart(data);
            break;
        case "金門縣":
            console.log(KinmenCountyAllHospital);
            var data = [];
            barchart(data);
            break;
        case "宜蘭縣":
            console.log(YilanCountyAllHospital);
            var data = [{
                "name": "財團法人羅許基金會羅東博愛醫院",
                "value": 0
            }]
            barchart(data);
            break;
        case "彰化縣":
            console.log(ChanghuaCountyAllHospital);
            var data = [{
                "name": "秀傳醫療社團法人秀傳紀念醫院",
                "value": 25
            }, {
                "name": "彰化秀傳紀念醫院",
                "value": 25
            }]
            barchart(data);
            break;
        case "南投縣":
            console.log(NantouCountyAllHospital);
            var data = [];
            barchart(data);
            break;
        case "雲林縣":
            console.log(YunlinCountyAllHospital);
            var data = [{
                "name": "國立臺灣大學醫學院附設醫院雲林分院",
                "value": 0
            }, {
                "name": "天主教若瑟醫療財團法人若瑟醫院",
                "value": 0
            }]
            barchart(data);
            break;
        case "屏東縣":
            console.log(PingtungCountyAllHospital);
            var data = [{
                "name": "屏基醫療財團法人屏東基督教醫院",
                "value": 25
            }]
            barchart(data);
            break;
        case "台東縣":
            console.log(TaitungCountyAllHospital);
            var data = [{
                "name": "衛生福利部臺東醫院",
                "value": 100
            }]
            barchart(data);
            break;
        case "花蓮縣":
            console.log(HualienCountyAllHospital);
            var data = [{
                "name": "臺灣基督教門諾會醫療財團法人門諾醫院",
                "value": 36
            }]
            barchart(data);
            break;
        case "澎湖縣":
            console.log(PenghuCountyAllHospital);
            var data = [];
            barchart(data);
            break;
        case "基隆市":
            console.log(KeelungCityAllHospital);
            var data = [];
            barchart(data);
            break;
        case "新竹市":
            console.log(HsinchuCityAllHospital);
            var data = [{
                "name": "國立臺灣大學醫學院附設醫院新竹分院",
                "value": 71
            }]
            barchart(data);
            break;
        case "臺北市":
            console.log(TaipeiCityAllHospital);
            // console.log("enter");
            var data = [{
                    "name": "國立臺灣大學醫學院附設醫院",
                    "value": 80,
                },
                {
                    "name": "三軍總醫院",
                    "value": 44,
                },
                {
                    "name": "臺北榮民總醫院",
                    "value": 100,
                },
                {
                    "name": "馬偕紀念醫院",
                    "value": 0,
                },
                {
                    "name": "新光吳火獅紀念醫院",
                    "value": 100,
                },
                {
                    "name": "基督復臨安息日會醫療財團法人臺安醫院",
                    "value": 33,
                },
                {
                    "name": "三軍總醫院松山分院附設民眾診療服務處",
                    "value": 0,
                }
            ];
            barchart(data);
            break;
        case "新北市":
            console.log(NewTaipeiCityAllHospital);
            var data = [{
                    "name": "行天宮醫療志業醫療財團法人恩主公醫院",
                    "value": 50
                },
                {
                    "name": "衛生福利部臺北醫院",
                    "value": 0
                },
                {
                    "name": "衛生福利部雙和醫院",
                    "value": 100
                }
            ];
            barchart(data);
            break;
        case "臺中市":
            console.log(TaichungCityAllHospital);
            var data = [{
                "name": "童綜合醫院",
                "value": 50
            }, {
                "name": "佛教慈濟綜合醫院臺中分院",
                "value": 0
            }, {
                "name": "國軍臺中總醫院附設民眾診療服務處",
                "value": 100
            }, {
                "name": "光田醫療社團法人光田綜合醫院",
                "value": 50
            }, {
                "name": "仁愛醫療財團法人台中仁愛醫院",
                "value": 0
            }, {
                "name": "衛生福利部臺中醫院",
                "value": 100
            }, {
                "name": "林新醫療社團法人林新醫院",
                "value": 0
            }]
            barchart(data);
            break;
        case "臺南市":
            console.log(TainanCityAllHospital);
            var data = [{
                "name": "奇美醫院",
                "value": 67
            }, {
                "name": "郭綜合醫院",
                "value": 50
            }]
            barchart(data);
            break;
        case "桃園市":
            console.log(TaoyuanCityAllHospital);
            var data = [{
                "name": "敏盛綜合醫院經國總院",
                "value": 0
            }]
            barchart(data);
            break;
        case "苗栗縣":
            console.log(MiaoliCountyAllHospital);
            var data = [];
            barchart(data);
            break;
        case "新竹縣":
            console.log(HsinchuCountyAllHospital);
            var data = [{
                "name": "東元醫療社團法人東元綜合醫院",
                "value": 50
            }]
            barchart(data);
            break;
        case "嘉義市":
            console.log(ChiayiCityAllHospital);
            var data = [{
                "name": "戴德森醫療財團法人嘉義基督教醫院",
                "value": 80
            }]
            barchart(data);
            break;
        case "嘉義縣":
            console.log(ChiayiCountyAllHospital);
            var data = [];
            barchart(data);
            break;
        case "高雄市":
            console.log(KaohsiungCityAllHospital);
            var data = [{
                "name": "高雄醫學大學附設中和紀念醫院",
                "value": 73
            }]
            barchart(data);
            break;
        default:
            break;
    }
});

function start() {
    readJsonFile();
}

window.addEventListener("load", start, false);