import getWeather from "../getWeather";
import weatherHandler from "../weatherHandler";
import Switcher from "../switcher/switcher";

class Filters {
  constructor() {
    this.filters = {};
  }
  

  getFilters() {
    const filtersChecboxes = document.querySelectorAll('.filters input[type=checkbox]');
    filtersChecboxes.forEach(checkbox => {
      this.filters[checkbox.id] = checkbox.checked;
    });
    return this.filters;
  }

  setFilters(target) {
    this.filters[target.id] = target.checked;

    const cellsInColumn = document.querySelectorAll(`th.${target.id}, td.${target.id}`);

    if (target.checked) {
      cellsInColumn.forEach(td => td.style.display = 'table-cell');
    } else {
      cellsInColumn.forEach(td => td.style.display = 'none');
    }

    /* check units */
    const switcher = new Switcher();
    const units = switcher.getUnits();

    /* get data */
    const cityInput = document.querySelector('#city');
    const weather = getWeather(cityInput.value, units);
    weather.then(weatherHandler);
    
    return this.filters;
  }
}

export default Filters;