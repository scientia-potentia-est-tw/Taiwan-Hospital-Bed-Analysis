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

var LianjiangCountyAllHospitalInfo = [];
var KinmenCountyAllHospitalInfo = [];
var ChanghuaCountyAllHospitalInfo = [];
var NantouCountyAllHospitalInfo = [];
var YunlinCountyAllHospitalInfo = [];
var PingtungCountyAllHospitalInfo = [];
var YilanCountyAllHospitalInfo = [];
var TaitungCountyAllHospitalInfo = [];
var HualienCountyAllHospitalInfo = [];
var PenghuCountyAllHospitalInfo = [];
var KeelungCityAllHospitalInfo = [];
var HsinchuCityAllHospitalInfo = [];
var TaipeiCityAllHospitalInfo = [];
var NewTaipeiCityAllHospitalInfo = [];
var TaichungCityAllHospitalInfo = [];
var TainanCityAllHospitalInfo = [];
var TaoyuanCityAllHospitalInfo = [];
var MiaoliCountyAllHospitalInfo = [];
var HsinchuCountyAllHospitalInfo = [];
var ChiayiCityAllHospitalInfo = [];
var ChiayiCountyAllHospitalInfo = [];
var KaohsiungCityAllHospitalInfo = [];

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

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
    fetch('https://secure-oasis-97223.herokuapp.com/bedinfo.json')
        .then(response => {
            return response.json();
        }).then(HospitalBedData => {
            console.log(HospitalBedData);
            // var HospitalBedData = JSON.parse(text);
            var hospitalLoadRate;
            // console.log(HospitalBedData);
            for (let item in HospitalBedData) {
                // sconsole.log(HospitalBedData[item].hosp);
                if (isEmpty(HospitalBedData[item].info)) {
                    console.log("The " + HospitalBedData[item].hosp + " hospital info is empty");
                    continue;
                } else {
                    switch (HospitalBedData[item].city) {
                        case "連江縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            LianjiangCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            LianjiangCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "金門縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            KinmenCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            KinmenCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "宜蘭縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            YilanCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            YilanCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "彰化縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            ChanghuaCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            ChanghuaCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "南投縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            NantouCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            NantouCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "雲林縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            YunlinCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            YunlinCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "屏東縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            PingtungCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            PingtungCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "台東縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            TaitungCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            TaichungCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "花蓮縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            HualienCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            HualienCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "澎湖縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            PenghuCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            PenghuCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "基隆市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            KeelungCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            KeelungCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "新竹市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            HsinchuCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            HsinchuCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "台北市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            TaipeiCityAllHospital.push(element);
                            // TaipeiCityAllHospital.push({
                            //     "hosp": HospitalBedData[item].hosp,
                            //     "value": hospitalLoadRate
                            // });

                            // console.log(HospitalBedData[item].hosp, hospitalLoadRate);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            TaipeiCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "新北市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            NewTaipeiCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            NewTaipeiCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "台中市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            TaichungCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            TaichungCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "台南市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            TainanCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            TainanCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "桃園市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            TaoyuanCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            TaoyuanCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "苗栗縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            MiaoliCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            MiaoliCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "新竹縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            HsinchuCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            HsinchuCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "嘉義市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            ChiayiCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            ChiayiCityAllHospitalInfo.push(hospInfo);
                            break;
                        case "嘉義縣":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            ChiayiCountyAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            ChiayiCountyAllHospitalInfo.push(hospInfo);
                            break;
                        case "高雄市":
                            if (HospitalBedData[item].info["總數"] == 0) {
                                hospitalLoadRate = 0;
                            } else {
                                hospitalLoadRate = Math.round((HospitalBedData[item].info["占床數"] * 100) / HospitalBedData[item].info["總數"]);
                            }
                            var element = {};
                            element.label = HospitalBedData[item].hosp;
                            element.y = hospitalLoadRate;
                            element.indexLabel = hospitalLoadRate + "%";
                            KaohsiungCityAllHospital.push(element);
                            var hospInfo = {};
                            hospInfo.HospName = HospitalBedData[item].hosp;
                            hospInfo.totalBed = HospitalBedData[item].info["總數"];
                            hospInfo.usageBed = HospitalBedData[item].info["占床數"];
                            hospInfo.idleBed = HospitalBedData[item].info["空床數"];
                            KaohsiungCityAllHospitalInfo.push(hospInfo);
                            break;
                        default:
                            break;
                    }
                }
            }
            // console.log("Taipei:" + TaipeiCityAllHospital);
            // console.log(TaipeiCityAllHospital);
        });
}

// console.log(TaipeiCityAllHospital);
function chart(countyData, county) {
    if (typeof countyData !== 'undefined' && countyData.length > 0) {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,

            axisX: {
                interval: 1
            },
            axisY2: {

                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: county + "各大醫院負壓隔離病床負載率",
                maximum: 100,
                minimum: 0
            },
            data: [{

                indexLabelPlacement: "inside",
                indexLabelFontColor: "white",
                type: "bar",
                name: "hospital",
                axisYType: "secondary",
                color: "#014D65",
                dataPoints: countyData
            }]
        });
        chart.render();
    } else {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,

            title: {
                text: "該縣市無資料"
            },

            axisX: {
                interval: 1
            },
            axisY2: {
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: county + "各大醫院負壓隔離病床負載率",
                maximum: 100,
                minimum: 0
            },
            data: [{
                indexLabelPlacement: "inside",
                indexLabelFontColor: "white",
                type: "bar",
                name: "hospital",
                axisYType: "secondary",
                color: "#014D65",
                dataPoints: []
            }]
        });
        chart.render();
    }
}


$('#countyCitySelect').change(function () {
    // console.log($(this).val());
    var selectItem = document.getElementById("countyCitySelect");
    var selectItemValue = selectItem.options[selectItem.selectedIndex].value;
    // console.log(typeof (selectItemValue));
    switch (selectItemValue) {
        case "連江縣":
            console.log(LianjiangCountyAllHospital);
            chart(LianjiangCountyAllHospital, "連江縣");
            $("#hospitalInfo").html(LianjiangCountyAllHospitalInfo);
            break;
        case "金門縣":
            console.log(KinmenCountyAllHospital);
            chart(KinmenCountyAllHospital, "金門縣");
            break;
        case "宜蘭縣":
            console.log(YilanCountyAllHospital);
            chart(YilanCountyAllHospital, "宜蘭縣");
            break;
        case "彰化縣":
            console.log(ChanghuaCountyAllHospital);
            chart(ChanghuaCountyAllHospital, "彰化縣");
            break;
        case "南投縣":
            console.log(NantouCountyAllHospital);
            chart(NantouCountyAllHospital, "南投縣");
            break;
        case "雲林縣":
            console.log(YunlinCountyAllHospital);
            chart(YunlinCountyAllHospital, "雲林縣");
            break;
        case "屏東縣":
            console.log(PingtungCountyAllHospital);
            chart(PingtungCountyAllHospital, "屏東縣");
            break;
        case "台東縣":
            console.log(TaitungCountyAllHospital);
            chart(TaitungCountyAllHospital, "台東縣");
            break;
        case "花蓮縣":
            console.log(HualienCountyAllHospital);
            chart(HualienCountyAllHospital, "花蓮縣");
            break;
        case "澎湖縣":
            console.log(PenghuCountyAllHospital);
            chart(PenghuCountyAllHospital, "澎湖縣");
            break;
        case "基隆市":
            console.log(KeelungCityAllHospital);
            chart(KeelungCityAllHospital, "基隆市");
            break;
        case "新竹市":
            console.log(HsinchuCityAllHospital);
            chart(HsinchuCityAllHospital, "新竹市");
            break;
        case "臺北市":
            console.log(TaipeiCityAllHospital);
            // console.log("enter");
            chart(TaipeiCityAllHospital, "臺北市");
            console.log(TaipeiCityAllHospitalInfo);
            $("#hospitalInfo").html(TaipeiCityAllHospitalInfo);
            break;
        case "新北市":
            console.log(NewTaipeiCityAllHospital);
            chart(NewTaipeiCityAllHospital, "新北市");
            break;
        case "臺中市":
            console.log(TaichungCityAllHospital);
            chart(TaichungCityAllHospital, "台中市");
            break;
        case "臺南市":
            console.log(TainanCityAllHospital);
            chart(TainanCityAllHospital, "台南市");
            break;
        case "桃園市":
            console.log(TaoyuanCityAllHospital);
            chart(TaoyuanCityAllHospital, "桃園市");
            break;
        case "苗栗縣":
            console.log(MiaoliCountyAllHospital);
            chart(MiaoliCountyAllHospital, "苗栗縣");
            break;
        case "新竹縣":
            console.log(HsinchuCountyAllHospital);
            chart(HsinchuCountyAllHospital, "新竹縣");
            break;
        case "嘉義市":
            console.log(ChiayiCityAllHospital);
            chart(ChiayiCityAllHospital, "嘉義市");
            break;
        case "嘉義縣":
            console.log(ChiayiCountyAllHospital);
            chart(ChiayiCountyAllHospital, "嘉義縣");
            break;
        case "高雄市":
            console.log(KaohsiungCityAllHospital);
            chart(KaohsiungCityAllHospital, "高雄市");
            break;
        default:
            break;
    }
});

function start() {
    readJsonFile();
}

window.addEventListener("load", start, false);