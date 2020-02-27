import getWeaher from "../getWeaher";
import weatherHandler from "../weatherHandler";

/**
 * Set units for API requst, get request and render result
 */
const switcherHandler = () => {

  const switcher = document.querySelector('.toggleCheck_switch');
  const checkbox = document.querySelector('#units');

  // custom checking units
  let units = '';
  if (checkbox && checkbox.checked) {
    units = 'imperial';
  } else {
    units = 'metric';
  }

  switcher.addEventListener('click', () => {
    // click checking unuts
    if (checkbox && !checkbox.checked) {
      units = 'imperial';
    } else {
      units = 'metric';
    }

    // get data API and render result
    const cityInput = document.querySelector('#city');
    const weather = getWeaher(cityInput.value, units);
    weather.then(weatherHandler);
    return;
  });
  return units;
};
export default switcherHandler;