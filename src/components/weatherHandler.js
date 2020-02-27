import renderTable from "./table/renderTable";

/**
 * Show error message, city data and render weather table
 * @param {json} weatherData from API
 */
const weatherHandler = weatherData => {

  /* show error message if API return error */
  const error = document.querySelector('.error');
  if (weatherData.message !== 0) {
    error.innerText = weatherData.message;
    error.style.opacity = 1;
    return;
  } else {
    error.style.opacity = 0;
  }

  const data = weatherData;
  
  /* show city, latitude and longitude */
  const city = document.querySelector('.city_title');
  city.innerText = data.city.name;
  const latitude = document.querySelector('#latitude');
  latitude.innerText = data.city.coord.lat;
  const longitude = document.querySelector('#longitude');
  longitude.innerText = data.city.coord.lon;


  renderTable(data.list);

};

export default weatherHandler;