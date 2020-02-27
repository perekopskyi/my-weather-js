import renderTable from "./table/renderTable";
import renderCity from "./renderCity";

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
  
  renderCity(data);
  renderTable(data.list);
};

export default weatherHandler;