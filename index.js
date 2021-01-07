        //all city hospital bed amount
		var countyHospitalBed = {連江縣:0, 金門縣:0, 宜蘭縣:0, 彰化縣:0, 南投縣:0, 雲林縣:0, 屏東縣:0,臺東縣:0,花蓮縣:0,澎湖縣:0, 基隆市:0, 新竹市:0, 臺北市:0, 新北市:0, 臺中市:0, 臺南市:0, 桃園市:0, 苗栗縣:0,新竹縣:0, 嘉義市:0, 嘉義縣:0, 高雄市:0};
		var countyHospitalBedUsage = {連江縣:0, 金門縣:0, 宜蘭縣:0, 彰化縣:0, 南投縣:0, 雲林縣:0, 屏東縣:0,臺東縣:0,花蓮縣:0,澎湖縣:0, 基隆市:0, 新竹市:0, 臺北市:0, 新北市:0, 臺中市:0, 臺南市:0, 桃園市:0, 苗栗縣:0,新竹縣:0, 嘉義市:0, 嘉義縣:0, 高雄市:0};
		var countyHospitalBedLoadRate = {連江縣:0, 金門縣:0, 宜蘭縣:0, 彰化縣:0, 南投縣:0, 雲林縣:0, 屏東縣:0,臺東縣:0,花蓮縣:0,澎湖縣:0, 基隆市:0, 新竹市:0, 臺北市:0, 新北市:0, 臺中市:0, 臺南市:0, 桃園市:0, 苗栗縣:0,新竹縣:0, 嘉義市:0, 嘉義縣:0, 高雄市:0};
		// console.log(typeof(countyHospitalBed.連江縣));
		// console.log(typeof(countyHospitalBed.金門縣));
		// console.log(countyHospitalBedLoadRate);
		//read hospital bed json file
        function readTextFile(file, callback) {
    	var rawFile = new XMLHttpRequest();
    	rawFile.overrideMimeType("application/json");
    	rawFile.open("GET", file, true);
    	rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        	}
    	}
    	rawFile.send(null);
		}
		readTextFile("https://raw.githubusercontent.com/scientia-potentia-est-tw/Taiwan-Hospital-Bed-Analysis/gh-pages/data.json", function(text){
			var HospitalBedData = JSON.parse(text);
			// console.log(typeof(HospitalBedData[0].info["占床數"]));
			for(let amount in HospitalBedData){
				// console.log(typeof(HospitalBedData[amount].info["總數"]));
				//count taiwan all hospital bed
				//count all county and city hospital bed
				// console.log(HospitalBedData[amount].city);
				switch(HospitalBedData[amount].city){
					case "連江縣":
						countyHospitalBed.連江縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.連江縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "金門縣":
						countyHospitalBed.金門縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.金門縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "宜蘭縣":
						countyHospitalBed.宜蘭縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.宜蘭縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "彰化縣":
						countyHospitalBed.彰化縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.彰化縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "南投縣":
						countyHospitalBed.南投縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.南投縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "雲林縣":
						countyHospitalBed.雲林縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.雲林縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "屏東縣":
						countyHospitalBed.屏東縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.屏東縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "台東縣":
						countyHospitalBed.臺東縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.臺東縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "花蓮縣":
						countyHospitalBed.花蓮縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.花蓮縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "澎湖縣":
						countyHospitalBed.澎湖縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.澎湖縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "基隆市":
						countyHospitalBed.基隆市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.基隆市 += HospitalBedData[amount].info["占床數"];
						break;
					case "新竹市":
						countyHospitalBed.新竹市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.新竹市 += HospitalBedData[amount].info["占床數"];
						break;
					case "臺北市":
						countyHospitalBed.臺北市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.臺北市 += HospitalBedData[amount].info["占床數"];
						// console.log(countyHospitalBed."臺北市")
						break;
					case "新北市":
						countyHospitalBed.新北市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.新北市 += HospitalBedData[amount].info["占床數"];
						break;
					case "臺中市":
						countyHospitalBed.臺中市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.臺中市 += HospitalBedData[amount].info["占床數"];
						break;
					case "臺南市":
						countyHospitalBed.臺南市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.臺南市 += HospitalBedData[amount].info["占床數"];
						break;
					case "桃園市":
						countyHospitalBed.桃園市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.桃園市 += HospitalBedData[amount].info["占床數"];
						break;
					case "苗栗縣":
						countyHospitalBed.苗栗縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.苗栗縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "新竹縣":
						countyHospitalBed.新竹縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.新竹縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "嘉義市":
						countyHospitalBed.嘉義市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.嘉義市 += HospitalBedData[amount].info["占床數"];
						break;
					case "嘉義縣":
						countyHospitalBed.嘉義縣 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.嘉義縣 += HospitalBedData[amount].info["占床數"];
						break;
					case "高雄市":
						countyHospitalBed.高雄市 += HospitalBedData[amount].info["總數"];
						countyHospitalBedUsage.高雄市 += HospitalBedData[amount].info["占床數"];
						break;
					default:
						break;
				}
			}
			//count each county and city hospital bed load rate
			countyHospitalBedLoadRate.連江縣 = Math.round((countyHospitalBedUsage.連江縣*100) / countyHospitalBed.連江縣);
			countyHospitalBedLoadRate.金門縣 = Math.round((countyHospitalBedUsage.金門縣*100) / countyHospitalBed.金門縣);
			countyHospitalBedLoadRate.宜蘭縣 = Math.round((countyHospitalBedUsage.宜蘭縣*100) / countyHospitalBed.宜蘭縣);
			countyHospitalBedLoadRate.彰化縣 = Math.round((countyHospitalBedUsage.彰化縣*100) / countyHospitalBed.彰化縣);
			countyHospitalBedLoadRate.南投縣 = Math.round((countyHospitalBedUsage.南投縣*100) / countyHospitalBed.南投縣);
			countyHospitalBedLoadRate.雲林縣 = Math.round((countyHospitalBedUsage.雲林縣*100) / countyHospitalBed.雲林縣);
			countyHospitalBedLoadRate.屏東縣 = Math.round((countyHospitalBedUsage.屏東縣*100) / countyHospitalBed.屏東縣);
			countyHospitalBedLoadRate.臺東縣 = Math.round((countyHospitalBedUsage.臺東縣*100) / countyHospitalBed.臺東縣);
			countyHospitalBedLoadRate.花蓮縣 = Math.round((countyHospitalBedUsage.花蓮縣*100) / countyHospitalBed.花蓮縣);
			countyHospitalBedLoadRate.澎湖縣 = Math.round((countyHospitalBedUsage.澎湖縣*100) / countyHospitalBed.澎湖縣);
			countyHospitalBedLoadRate.基隆市 = Math.round((countyHospitalBedUsage.基隆市*100) / countyHospitalBed.基隆市);
			countyHospitalBedLoadRate.新竹市 = Math.round((countyHospitalBedUsage.新竹市*100) / countyHospitalBed.新竹市);
			countyHospitalBedLoadRate.臺北市 = Math.round((countyHospitalBedUsage.臺北市*100) / countyHospitalBed.臺北市);
			countyHospitalBedLoadRate.新北市 = Math.round((countyHospitalBedUsage.新北市*100) / countyHospitalBed.新北市);
			countyHospitalBedLoadRate.臺中市 = Math.round((countyHospitalBedUsage.臺中市*100) / countyHospitalBed.臺中市);
			countyHospitalBedLoadRate.臺南市 = Math.round((countyHospitalBedUsage.臺南市*100) / countyHospitalBed.臺南市);
			countyHospitalBedLoadRate.桃園市 = Math.round((countyHospitalBedUsage.桃園市*100) / countyHospitalBed.桃園市);
			countyHospitalBedLoadRate.苗栗縣 = Math.round((countyHospitalBedUsage.苗栗縣*100) / countyHospitalBed.苗栗縣);
			countyHospitalBedLoadRate.新竹縣 = Math.round((countyHospitalBedUsage.新竹縣*100) / countyHospitalBed.新竹縣);
			countyHospitalBedLoadRate.嘉義市 = Math.round((countyHospitalBedUsage.嘉義市*100) / countyHospitalBed.嘉義市);
			countyHospitalBedLoadRate.嘉義縣 = Math.round((countyHospitalBedUsage.嘉義縣*100) / countyHospitalBed.嘉義縣);
			countyHospitalBedLoadRate.高雄市 = Math.round((countyHospitalBedUsage.高雄市*100) / countyHospitalBed.高雄市);
			// console.log(countyHospitalBedUsage."臺北市");
			var taiwanAllHospitalBedAmount = 0;
			var taiwanAllHospitalBedUsage = 0;
			for(var i=0;i<22;i++){
				// console.log(countyHospitalBedLoadRate[Object.keys(countyHospitalBedLoadRate)[i]]);
				// Object.values(countyHospitalBedLoadRate)[i] = Object.values(countyHospitalBedUsage)[i] / Object.values(countyHospitalBed)[i];
				// console.log(Object.values(countyHospital	BedLoadRate)[i]);
				// console.log("countyHospitalBedUsage:"+Object.values(countyHospitalBedUsage)[i]);
				// console.log("countyHospitalBed:"+Object.values(countyHospitalBed)[i]);
				taiwanAllHospitalBedAmount += Object.values(countyHospitalBed)[i];
				taiwanAllHospitalBedUsage += Object.values(countyHospitalBedUsage)[i];
				// console.log((Object.values(countyHospitalBedUsage)[i] / Object.values(countyHospitalBed)[i]));
			}
			// console.log("countyHospitalBedLoadRate:"+Object.values(countyHospitalBedLoadRate)[12]);
			// console.log(countyHospitalBedLoadRate."臺北市");
			// console.log(typeof(usageBed));
			//count taiwan hospital bed load rate
			// console.log(typeof(countyHospitalBedUsage.連江縣));
			// console.log(typeof(countyHospitalBed.連江縣));
			// console.log((countyHospitalBedUsage.連江縣 / countyHospitalBed.連江縣)*100);
			// console.log(countyHospitalBedLoadRate.金門縣);
			var taiwanAllHospitalBedLoadRate = Math.round((taiwanAllHospitalBedUsage*100) / taiwanAllHospitalBedAmount) + "%";
			$("#allBedLoadRate").html(taiwanAllHospitalBedLoadRate);
			// console.log("Taipei usage bed:"+countyHospitalBedUsage."臺北市");
			})
		countyMap();
		
		
        /* 縮放、滑動 */
        /* 
	        利用D3.js設計的Zoom Behavior，實現滑鼠滾輪滾動可地圖放大縮小效果，先宣告zoom行為，接著用call來呼叫zoom的行為。
	        d3.behavior.zoom(): 宣告，這裡使用了幾個參數
			translate: 移動距離
			scaleExtent: 縮放最大值與最小值
			scale: 縮放大小比例
		*/
		var zoom = d3.behavior.zoom()
		.translate([0, 0])
		.scaleExtent([1, 10])
		.scale(1)
		.on("zoom", zoomed);
		function zoomed() {
			d3.select("svg").selectAll("path").attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
			d3.select("svg").selectAll("image").attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
		}

		function countyMap()
		{
			/* 放置你的TopoJSON路徑 */
			d3.json("https://raw.githubusercontent.com/scientia-potentia-est-tw/Taiwan-Hospital-Bed-Analysis/gh-pages/taiwan.json?token=260db515f58344832d1331a19e4b01b82ec50cdc", function(error, map) {
				if (error) return console.error(error);
				/* 
					center: 設定地圖中心經緯度
					scale: 設定地圖大小
					translate: 設定地圖在svg上的中心位置
					on: 可以設定事件觸發，可設定參數有mousedown、mouseup、click、dblclick、mouseover、mouseout、mouseenter、mouseleave
					call(zoom): 呼叫zoom進行放大縮小滑動
				*/
					projection = d3.geo.mercator().center([121,24,5]).scale(9000).translate([500,400]);
					/* 將資料轉換成SVG Path標籤的轉換函式 */
					path = d3.geo.path().projection(projection);
					/* 將資料中的特徵取出，map為JSON檔的資料，後方則是在JSON中，要取出特徵的部分 */
					features = topojson.feature(map, map.objects.County_WGS84).features;
					/* 利用D3c.js畫出svg */
					d3.select("svg").selectAll("path").data(features).enter().append("path").attr({
						d: path,
						fill: "#9EF89E",
						class: "area"
					}).on({
	            	/* 
	            		移入時，將選取到的地區(SVG PATH tag)加入css，計算滑鼠位置，將div#mouseIn座標設定到滑鼠位置
	            		移出時，將選取到的地區移除css，將div#mouseIn隱藏
	            	*/
	            		"mouseover": function(d){
	            			d3.select(this).classed("active", true);
	            			var x = d3.mouse(this)[0];
	            			var y = d3.mouse(this)[1];
	            			$('#mouseInf').css({ "top": (y) + "px", "left": (x) + "px" }).show("fast");
	            			$('#mouseInf').text(d.properties.C_Name);
	            		},
	            		"mouseout":  function(){
	            			d3.select(this).classed("active", false);
	            			$('#mouseInf').hide();
	            		},
						"click": function(d){
							$('#selectRegionName').text(d.properties.C_Name);
							// var C_Name = d.properties.C_Name;
							// console.log(C_Name);
							// console.log(countyHospitalBedLoadRate[d.properties.C_Name]);
							$('#selectRegionBedLoadRate').text(countyHospitalBedLoadRate[d.properties.C_Name]+"%");
						},
	            	})
	            	.call(zoom);

					/* 上色 */
					/* 設定各縣市的數值 */
					var dataObject = {'連江縣':countyHospitalBedLoadRate.連江縣,'金門縣':countyHospitalBedLoadRate.金門縣,'宜蘭縣':countyHospitalBedLoadRate.宜蘭縣,'彰化縣':countyHospitalBedLoadRate.彰化縣,'南投縣':countyHospitalBedLoadRate.南投縣,'雲林縣':countyHospitalBedLoadRate.雲林縣,'屏東縣':countyHospitalBedLoadRate.屏東縣,'臺東縣':countyHospitalBedLoadRate.臺東縣,'花蓮縣':countyHospitalBedLoadRate.花蓮縣,'澎湖縣':countyHospitalBedLoadRate.澎湖縣,'基隆市':countyHospitalBedLoadRate.基隆市,'新竹市':countyHospitalBedLoadRate.新竹市,'桃園市':countyHospitalBedLoadRate.桃園市,'苗栗縣':countyHospitalBedLoadRate.苗栗縣,'新竹縣':countyHospitalBedLoadRate.新竹縣,'嘉義市':countyHospitalBedLoadRate.嘉義市,'嘉義縣':countyHospitalBedLoadRate.嘉義縣,'臺北市': countyHospitalBedUsage.臺北市,'新北市': countyHospitalBedLoadRate.新北市,'臺南市': countyHospitalBedLoadRate.臺南市,'高雄市': countyHospitalBedLoadRate.高雄市,'臺中市': countyHospitalBedLoadRate.臺中市};
					/* 將各縣市的數值(parameter)寫入features裡面，寫法範例，可自行更改 */
					for(item=features.length - 1; item >= 0; item-- ) { 
						var site = features[item].properties.C_Name;
						var parameter = dataObject[site];
						if(typeof parameter == 'undefined'){
							features[item].properties.parameter = Math.floor((Math.random() * 100) + 1);
						}else{
							features[item].properties.parameter = parameter;
						}	
					}
					/* 
						domain: 設定數值最低最高的範圍
						range: 設定最低最高的對應的顏色
					*/
					var color = d3.scale.linear().domain([1,100]).range(["#9EF89E","#FF3D3D"]);
					/* 利用D3c.js畫出svg，顏色依照features裡的parameter參數 */
					d3.select("svg").selectAll("path").data(features)
					.attr({
						d: path,
						fill: function(d) {
							return color(d.properties.parameter);
						},
						class: "area"
					})

				});
				
		}
		