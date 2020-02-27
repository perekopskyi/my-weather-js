import weatherHandler from "../weatherHandler";
import getWeaher from "../getWeaher";
import switcherHandler from "../switcher/switcherHandler";

/**
 * Accept checkbox change event and
 * hides a column depending on its className
 * which matches the checkbox.id
 * 
 * @param {event} event 
 */
const filtersHandler = event => {

  const target = event.target;
  const cellsInColumn = document.querySelectorAll(`th.${target.id}, td.${target.id}`);

  if (target.checked) {
    cellsInColumn.forEach(td => td.style.display = 'table-cell');
  } else {
    cellsInColumn.forEach(td => td.style.display = 'none');
  }

  /* check units */
  const units = switcherHandler();

  const cityInput = document.querySelector('#city');
  const weather = getWeaher(cityInput.value, units);
  weather.then(weatherHandler);
};

export default filtersHandler;