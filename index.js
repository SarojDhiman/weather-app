// because i want that button should be workable if i click on search the 
// values of city wind etc should be filled or thta schould we connected
// so we will use javascript for that

//we create variable here by all ids
// when m using the id or classes or any other information from the html file then
//the document which i prepare here in json file is called the DOM document of model....
//this increase the intractivity with the browser and we can implement the changes too.....
//
let input = document.getElementById('cityname');
// here i make variable by using id of the different method

let searchbtn = document.getElementById('search_button');
let cityNameElement = document.getElementById('city');
let temp = document.getElementById('temp');
let description = document.getElementById('description');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let weathericon = document.getElementById('weather_icon');

//here m fetecing API 
// async because search can take time and i will use the promise here its 2 terms resole and reject
// here city name we want to make it dynmmic so we will use or we make variable of thta so here we make function first with that variable
//so we can fill value on interface

let apicall = async (cityName) => {
    let apiKey = '3d5315268dcf674d43cdfb23ff6aabd8'; // API key
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`; // Added units=metric for Celsius

    try {
        //here await i used with async function
        const response = await fetch(api);
        // response is genrated in json format so we store that in variable
        const json = await response.json();

        // now here i set the condition because the possible if nothing is coming by giving city name then error 404 will come

        if (json.cod === '404') {
            //.text content is what we want to return
            cityNameElement.textContent = "City Not Found";
            return;
        }

        cityNameElement.textContent = `Weather in ${json.name}`;
        temp.textContent = `${json.main.temp}°C`;
        description.textContent = `${json.weather[0].description}`;
        humidity.textContent = `Humidity: ${json.main.humidity}%`;
        wind.textContent = `Wind speed: ${json.wind.speed} km/h`;

        // Optional: Set the weather icon
        weathericon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`;

    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

searchbtn.addEventListener('click', () => {
    let cityname = input.value.toLowerCase();
    apicall(cityname);
});


// now we will connect this with API but the output that we get
// will be in json format so we write code accordingly



// 3d5315268dcf674d43cdfb23ff6aabd8
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=3d5315268dcf674d43cdfb23ff6aabd8