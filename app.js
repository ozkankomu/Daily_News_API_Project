const getNewsSience = () => {
  const key = "7bf94028e4cb4de1a9b278cc03c55fd0";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=" +
    key;

  fetch(url)
    .then((result) => {
      if (!result.status) {
        console.log("warning Errorrrrrrr....!!!!");
      }
      return result.json();
    })
    .then((data) => siencePage(data.articles));
};

const siencePage = (news) => {
  const div1 = document.querySelector("#div1");
  news.forEach((news) => {
    const { description, title, url, urlToImage } = news;
    div1.innerHTML += `
    <div class=" card gap-4 mb-3">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" class="btn btn-primary">Details of the News</a>
  </div>
</div>
    `;
  });
};

getNewsSience();

//! ////////////////////////////////////   second section ///////////////////

const getNewsBusines = () => {
  const key = "7bf94028e4cb4de1a9b278cc03c55fd0";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=" +
    key;

  fetch(url)
    .then((result) => {
      if (!result.status) {
        console.log("warning Errorrrrrrr....!!!!");
      }
      return result.json();
    })
    .then((data) => businesPage(data.articles));
};

const businesPage = (news) => {
  const div1 = document.querySelector("#div2");
  news.forEach((news) => {
    const { description, title, url, urlToImage } = news;
    div1.innerHTML += `
    <div class="card gap-4 mb-3">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" class="btn btn-primary">Details of the News</a>
  </div>
</div>
    `;
  });
};

getNewsBusines();

//! /////////////////  section 3 /////////////////////////

const getNewsJs = () => {
  const key = "7bf94028e4cb4de1a9b278cc03c55fd0";
  const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + key;

  fetch(url)
    .then((result) => {
      if (!result.status) {
        console.log("warning Errorrrrrrr....!!!!");
      }
      return result.json();
    })
    .then((data) => jsPage(data.articles));
};

const jsPage = (news) => {
  const div1 = document.querySelector("#div3");
  news.forEach((news) => {
    const { description, title, url, urlToImage } = news;
    div1.innerHTML += `
    <div class="card gap-4 mb-3">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" class="btn btn-primary">Details of the News</a>
  </div>
</div>
    `;
  });
};

getNewsJs();

//! //////////////////// /////////////////////////////////
const url = "https://api.openweathermap.org/data/2.5/";
const key = "8c38f1e0c78955af74faebdb3c43902b";
let cities = [];
const getweather = (city) => {
  let urll = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`;
  fetch(urll)
    .then((weather) => {
      return weather.json();
    })
    .then((data) => {
      weather(data);
    });
};

const weather = (city) => {
  const search = document.querySelector("#divrow");
  const { main, name, weather } = city;
  let { temp, humidity, pressure } = main;
  temp = Math.trunc(temp);

  console.log(city);
  console.log(weather[0].description);
  console.log(city.main);

  cities.push(name.toLowerCase());
  console.log(city);
  search.innerHTML =
    `
  <div class="weathercondition card col-lg-3" style="max-width: 540px; box-shadow:3px 3px 5px darkgray">
    <div class="row g-0 weathercondition">     
      <div class="col ">
      <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Temp : ${temp} °C  </p>
      <img class=img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="...">
          <p class="card-text"> ${weather[0].description}</p>
          <p class="card-text"><small>Humidity : ${humidity}</small></p>
        </div>
      </div>
    </div>
  </div>
  ` + search.innerHTML;

  document.getElementById("searchBar").value = "";
  document.getElementById("searchBar").focus();
};
const button = document.getElementById("button");
button.addEventListener("click", () => {
  const city = searchbar.value;
  if (cities.includes(city.toLowerCase())) {
    console.log(searchbar.value);
    document.querySelector("h4").innerText = "(This city was just shown..!!!)";
    document.querySelector("h4").style.color = "red";
    document.querySelector("h4").style.fontSize = "1.5rem";
    document.getElementById("searchBar").value = "";
    document.getElementById("searchBar").focus();
    return;
  }
  if (cities.length >= 3) {
    document.querySelector("h4").innerText =
      "(Sorry, you can query up to 3 cities at a time.. !!!)";
    document.querySelector("h4").style.color = "red";
    document.querySelector("h4").style.fontSize = "1.5rem";
    document.getElementById("searchBar").value = "";
    document.getElementById("searchBar").focus();
    return;
  }
  document.querySelector("h4").innerText =
    "(You can learn the weather of the city you want by typing it in the left box.)";
  document.querySelector("h4").style.color = "white";
  getweather(searchbar.value);
});

const searchbar = document.getElementById("searchBar");
searchbar.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    button.click();
  }
});

//! date section /////
const updateTime = () => {
  document.querySelector(".date").innerText = `Date : ${new Date()}`;
};
document.querySelector(".date").innerText = `Date : ${new Date()}`;
setInterval(updateTime, 1000);
updateTime();
