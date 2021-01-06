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
			var totalBed = 0;
			var usageBed = 0;
			var allBedDataValue = 0;
			var allUsageBedValue = 0;
			var hospitalBedLoadRate = 0;
			// console.log(typeof(HospitalBedData[0].info["占床數"]));
			//count taiwan all bed
			for(let amount in HospitalBedData){
				allBedDataValue = parseInt(HospitalBedData[amount].info["總數"]);
				allUsageBedValue = parseInt(HospitalBedData[amount].info["占床數"]);
				// console.log(allUsageBedValue);
				if(!(isNaN(allBedDataValue))){
					// console.log(allBedDataValue);
					totalBed += allBedDataValue;
				}
				if(!(isNaN(allUsageBedValue))){
					// console.log(allUsageBedValue);
					usageBed += allUsageBedValue;
				}
			}
			// console.log(typeof(usageBed));
			//count taiwan hospital bed load rate
			hospitalBedLoadRate = (usageBed*100) / totalBed;
			$("#allBedLoadRate").html(hospitalBedLoadRate);
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
	            	})
	            	.call(zoom);

					/* 上色 */
					/* 設定各縣市的數值 */
					var dataObject = {'連江縣':0,'金門縣':0,'宜蘭縣':0,'彰化縣':0,'南投縣':0,'雲林縣':0,'屏東縣':0,'臺東縣':0,'花蓮縣':0,'澎湖縣':0,'基隆市':0,'新竹市':0,'桃園市':0,'苗栗縣':0,'新竹縣':0,'嘉義市':0,'嘉義縣':0,'臺北市': 0,'新北市': 0,'臺南市': 0,'高雄市': 0,'臺中市': 0};
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
		