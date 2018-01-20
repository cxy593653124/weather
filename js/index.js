/*
* @Author: 15985_000
* @Date:   2018-01-19 11:17:36
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-20 15:50:10
*/
var weather;
var city;
//请求太原天气情况
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		// console.log(weather);
	}
})

//请求城市
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		city=obj.data;
		// console.log(city);
	}
})

// 渲染数据
function update(){
	var cityname=document.getElementsByClassName("header")[0];
	cityname.innerHTML=weather.city_name;
	// 当前温度
	var current_temperature=document.getElementsByClassName("wendu")[0];
	current_temperature.innerHTML=weather.current_temperature+"°";
	//获取当前天气
	var day_condition=document.getElementsByClassName("tianqi")[0];
	day_condition.innerHTML=weather.day_condition; 
	//今天最高温
	var dat_high_temperature=document.getElementById("dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature; 
	// 最低温
	var dat_low_temperature=document.getElementById("dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature;
	// 渲染今天天气
	var dat_condition=document.getElementById("dat_condition");
	dat_condition.innerHTML=weather.dat_condition;
	// 今天icon
	var dat_weather_icon_id=document.getElementById("dat_weather_icon_id");
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png);`;
	//明天icon
	var tomorrow_weather_icon_id=document.getElementById("tomorrow_weather_icon_id");
	tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png);`;
	// 明天最高温最低温
	var tomorrow_high_temperature=document.getElementById("tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature; 
	// 最低温
	var tomorrow_low_temperature=document.getElementById("tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature;

	//
	for(var i in weather.hourly_forecast){
		//创建父元素
		var now=document.createElement("div");
		//给父元素div加样式
		now.className="now";
		//获取now的父元素
		var nowp=document.getElementById("now");
		//把now插入到父元素中
		nowp.appendChild(now);

		var now_time=document.createElement("h2");
		now_time.className="now_time";
		now_time.innerHTML=weather.hourly_forecast[i].hour+":00";
		now.appendChild(now_time);

		var now_icon=document.createElement("div");
		now_icon.className="now_icon";
		now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png);`;
		now.appendChild(now_icon);

		var now_temperature=document.createElement("h3");
		now_temperature.className="now_time";
		now_temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
		now.appendChild(now_temperature);
	}



	for(var j in weather.forecast_list){
		//创建父元素
		var recent=document.createElement("div");
		//给父元素div加样式
		recent.className="recent";
		//获取now的父元素
		var recentp=document.getElementById("recent");
		//把now插入到父元素中
		recentp.appendChild(recent);


		// console.log("weather");
		// 最近时间的天数
		var recent_time=document.createElement("div");
		recent_time.className="recent_time";
		recent_time.innerHTML=weather.forecast_list[j].date.substring(5,7)+"/"+weather.forecast_list[j].date.substring(8);
		recent.appendChild(recent_time);

		//  var month=document.createElement("span");
		//	month.className="month";
		//	console.log(weather.forecast_list[j].date.substring(5,7));
	    // 	recent_time.appendChild(month);

		// var data=document.createElement("span");
		// data.className="data";
		// console.log(weather.forecast_list[j].date.substring(8));
		// recent_time.appendChild(data);		

		var recent_weather=document.createElement("div");
		recent_weather.className="recent_weather";
		recent_weather.innerHTML=weather.forecast_list[j].condition;
		recent.appendChild(recent_weather);


		var recent_pic=document.createElement("div");
	    recent_pic.className="recent_pic";
	    recent_pic.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png);`;
	   	recent.appendChild(recent_pic);

	   	var recent_high=document.createElement("h3");
	    recent_high.className="recent_high";
	    var currentTemperature=document.getElementsByClassName("recent_high")[0];
	    recent_high.innerHTML=weather.forecast_list[j].high_temperature+"°";
	   	recent.appendChild(recent_high);

	   	var recent_low=document.createElement("h4");
	    recent_low.className="recent_low";
	    var currentTemperature=document.getElementsByClassName("recent_low")[0];
	    recent_low.innerHTML=weather.forecast_list[j].low_temperature+"°";
	   	recent.appendChild(recent_low);

	   	var recent_wind=document.createElement("h5");
	    recent_wind.className="recent_wind";
	    var currentTemperature=document.getElementsByClassName("recent_wind")[0];
	    recent_wind.innerHTML=weather.forecast_list[j].wind_direction;
	   	recent.appendChild(recent_wind);

	   	var win_level=document.createElement("h6");
	    win_level.className="win_level";
	    var currentTemperature=document.getElementsByClassName("win_level")[0];
	    win_level.innerHTML=weather.forecast_list[j].wind_level+"级";
	   	recent.appendChild(win_level);
	}
	//
	var head=document.getElementsByClassName("header")[0];
	var city_box=document.getElementsByClassName("city_box")[0];
	head.onclick=function(){
		//搜索一次后搜索框变为空白，确认键变为取消键
		$(".text").val("");
		$(".button").html("取消");
		city_box.style="display:block";
	}


	//渲染城市
	for(var k in city){
		console.log(k);

		var cityp=document.getElementById("city");

		var title=document.createElement("h1");
		title.className="title";
		title.innerHTML=k;
		cityp.appendChild(title);

		var con=document.createElement("div")
		con.className="con";

		for(var y in city[k]){
			console.log(y);
			//创建二级城市渲染
			//定义erji为div格式
			var erji=document.createElement("div");
			//erji类名为son
			erji.className="son";
			//
			erji.innerHTML=y;
			//标注con的下级为erji
			con.appendChild(erji);
		}
		cityp.appendChild(con);

	}
}


//查找各城市天气信息
function AJAX(str){
	$.ajax({
	url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		update();
		//console.log(weather);
		$(".city_box").css({"display":"none"});
		}
	})
}


// 当前页面加载完成执行代码--更新代码
window.onload=function(){
	update();
	//
	$(".son").on("click",function(){
		var cityh=this.innerHTML;
		AJAX(cityh);
	})

	//input获取焦点，button变确认
	//
	//类名为text,进行获取焦点的操作时，函数是{}
	$(".text").on("focus",function(){
		//类名为button的内容变为确认
		$(".button").html("确认");
	})

	//操作按钮
	var button=document.getElementsByClassName("button")[0];
		console.log(button);

	button.onclick=function(){
		//定义btn，设为button的内容
		var btn=this.innerHTML;
		if(btn=="取消"){
			// console.log(1);
			let citys=document.getElementsByClassName("city_box")[0];
			citys.style="display:none;";
		}
		else{
			var str=document.getElementsByClassName("text")[0].value;
			//输出
			console.log(str);
			for (var i in city){
				for(var j in city[i]){
					if(str==j){
						AJAX(str);
						return;
					}
				}
			}
			alert("没有该城市气象信息");
		}
	}
}