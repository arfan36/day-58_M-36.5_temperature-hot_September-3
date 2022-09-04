// Do not show API KEY on your JS File
const API_KEY = `77e46918e58af8ea7f4609e1c0c022ca`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
};

const displayTemperature = data => {
    console.log(data);
    const temperature = document.getElementById('temperature');
    temperature.innerText = `${data.main.temp}`;
};

loadTemperature('dhaka');