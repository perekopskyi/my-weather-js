import getWeather from "../getWeather";
import weatherHandler from "../weatherHandler";

class Switcher {
  constructor() {
    this.units = 'metric';
  }

  getUnits() {
    const checkbox = document.querySelector('#units');
    if (checkbox && checkbox.checked) {
      this.units = 'imperial';
    } else {
      this.units = 'metric';
    }
    return this.units;
  }

  setUnits() {
    const checkbox = document.querySelector('#units');
    // click checking unuts
    if (checkbox && !checkbox.checked) {
      this.units = 'imperial';
    } else {
      this.units = 'metric';
    }

    // get data API and render result
    const cityInput = document.querySelector('#city');
    const weather = getWeather(cityInput.value, this.units);
    weather.then(weatherHandler);

    return this.units;
  }
}

export default Switcher;