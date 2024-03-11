// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const apiKey = `3e86b8c34510447bbb7124924241601`;
let city = "Aurangabad";
const url2 = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

fetchWhetherData(url2);

async function fetchWhetherData(ur) {
  let response = await fetch(ur);

  if (!response.ok) {
    alert("Something went Wrong");
  }
  const data = await response.json();

  console.log(data);
  let city = document.querySelector(".city");
  let date = document.querySelector(".date");
  let temp = document.querySelector(".temp");
  let humidity = document.querySelector(".humidityLevel");
  let visiblity = document.querySelector(".visiblityDistance");
  let windSpeed = document.querySelector(".windSpeed");
  let whetherImg = document.querySelector(".desciption img");
  let whether = document.querySelector(".desciptionText");

  whether.innerHTML = data.current.condition.text;
  whetherImg.src = data.current.condition.icon;

  city.innerHTML = data.location.name;
  date.innerHTML = data.location.localtime;
  temp.textContent = data.current.temp_c;
  humidity.innerHTML = data.current.humidity + "%";
  visiblity.innerHTML = data.current.vis_km + "KM/H";
  windSpeed.innerHTML = data.current.wind_kph;
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityInput = document.querySelector("input").value;

  const url2 = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`;

  fetchWhetherData(url2);
});
