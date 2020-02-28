/**
 * show city, latitude and longitude
 * @param {json} data from API
 */
const renderCity = data => {

  const city = document.querySelector('.city_title');
  city.innerText = `${data.city.name}, ${data.city.country}`;

  const latitude = document.querySelector('#latitude');
  latitude.innerText = data.city.coord.lat;

  const longitude = document.querySelector('#longitude');
  longitude.innerText = data.city.coord.lon;
  
};
export default renderCity;