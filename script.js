let APIkey = "4579767b6d10a2faa2c5248d373065fe"

const getWeather = (cityname)=>{
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`)
	.then(response => response.json())
	.then(response => {
		console.log(response);

		city.innerText = response.name;

		temp.innerText = response.main.temp
		max_temp.innerText = response.main.temp_max;
		min_temp.innerText = response.main.temp_min;
		feels_like.innerText = response.main.feels_like;

		icon.setAttribute("src",`http://openweathermap.org/img/w/${response.weather[0].icon}.png`)
		main.innerText = response.weather[0].main;
		desc.innerText = response.weather[0].description;
		sunrise.innerText = new Date(response.sys.sunrise*1000).getHours() + ":" + new Date(response.sys.sunrise*1000).getMinutes();
		sunset.innerText = new Date(response.sys.sunset*1000).getHours() + ":" + new Date(response.sys.sunset*1000).getMinutes();

		speed.innerText = response.wind.speed
		hum.innerText = response.main.humidity
		deg.innerText = response.wind.deg
	})
	.catch((err) => {
		console.log(err," is my error");
		al.classList.toggle("d-none");
		setTimeout(()=>{
			al.classList.toggle("d-none")
			getWeather("Hyderabad")
		},4000)
	});	
}
getWeather("Hyderabad")
submit.addEventListener("click",(e)=>{
	e.preventDefault();
		getWeather(searchCity.value)
})

let jokp = fetch("https://v2.jokeapi.dev/joke/Any");
jokp.then((res)=>{
	return res.json();
}).then((res)=>{
	console.log(res);
	if(res.type=="twopart"){
		line1.innerText = res.setup;
		line2.innerText = res.delivery;
	}
	else{
		line1.innerText = res.joke;
		line2.innerText = "";
	}
})
	
	