const day = document.getElementById("day");
const date = document.getElementById("date");
const button = document.getElementById("done");
const city = document.getElementById("city_name");
const cityname = document.getElementById("cityname");
const tempstatus = document.getElementById("temp_status");
const temp = document.getElementById("temp");

button.addEventListener("click", async function (e) {
  e.preventDefault();
  let empty = city.value;
  if (empty === "") {
    cityname.innerText = "Please Enter a city name!";
    tempstatus.innerText = "";
    temp.innerHTML = `<span>0</span><sup>o</sup>`;
  } else {
    try {
      let link = `https://api.openweathermap.org/data/2.5/weather?q=${empty}&appid=b000f6133ae90ea3305437023cbb3f1d`;
      const response = await fetch(link);
      const json = await response.json();
      const arr = [json];

      cityname.innerHTML = `${arr[0].name} ${arr[0].sys.country} `;
      temp.innerText = arr[0].main.temp;
      tempstatus.innerText = arr[0].weather[0].main;

      const tempmod = arr[0].weather[0].main;

      if (tempmod === "Clear") {
        temp.innerHTML = `${arr[0].main.temp} <i class="fas  fa-sun" style='color: #f1c40f'></i>`;
      } else if (tempmod === "Clouds") {
        temp.innerHTML = `${arr[0].main.temp}<i class="fas fa-cloud" style='color: #2980b9'></i>`;
      } else if (tempmod === "Rain") {
        temp.innerHTML = `${arr[0].main.temp}<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>`;
      } else {
        temp.innerHTML = `${arr[0].main.temp}<i class='fa-solid fa-cloud' style='color: #2980b9'></i>`;
      }
    } catch (error) {
      cityname.innerText = "Please Enter a correct city name!";
    }
  }
});

const fndday = () => {
  let day = new Array(7);
  day[0] = "Sunday";
  day[1] = "Monday";
  day[2] = "Tuesday";
  day[3] = "Wednesday";
  day[4] = "Thursday";
  day[5] = "Friday";
  day[6] = "Saturday";
  const date = new Date();
  let newday = day[date.getDay()];
  return newday;
};
const time = () => {
  let now = new Date();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let day = now.getDate();
  return `${month} | ${day} |${year}  `;
};
day.innerHTML = fndday();
date.innerHTML = time();
