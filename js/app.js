// Do not show API KEY on your JS File
const API_KEY = `77e46918e58af8ea7f4609e1c0c022ca`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
};

const displayTemperature = data => {
    // console.log(data.weather[0].main);
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = `${data.main.temp}`;
    // const clouds = document.getElementById('clouds').innerText = `${data.weather[0].main}`;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
};

const setInnerTextById = (id, text) => {
    const textElement = document.getElementById(id);
    textElement.innerText = text;
};

document.getElementById('btn-search').onclick = () => {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;

    loadTemperature(city);
};
loadTemperature('dhaka');