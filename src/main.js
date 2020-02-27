import './scss/style.scss';
import getWeather from './components/getWeather';
import weatherHandler from './components/weatherHandler';
import showError from './components/form/showError';
import Filters from './components/filters/filters';
import Switcher from './components/switcher/switcher';

document.addEventListener('DOMContentLoaded', () => {

  // Show error if input are empty
  const cityInput = document.querySelector('#city');
  cityInput.addEventListener('input', showError);

  
  // filters
  const filters = new Filters();
  filters.getFilters();

  const filtersChecboxes = document.querySelectorAll('.filters input[type=checkbox]');
  filtersChecboxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
      filters.setFilters(event.target);
    });
  });


  // event toggle switcher
  const switcher = new Switcher();

  const switcherButton = document.querySelector('.toggleCheck_switch');
  switcherButton.addEventListener('click', switcher.setUnits);


  // event submit form
  const form = document.querySelector('.form');
  form.addEventListener('submit', () => {
    event.preventDefault();
    const units = switcher.getUnits();

    const weather = getWeather(cityInput.value, units);
    weather.then(weatherHandler);
  });

});