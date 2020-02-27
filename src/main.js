import './scss/style.scss';
import getWeaher from './components/getWeaher';
import weatherHandler from './components/weatherHandler';
import filtersHandler from './components/filters/filtersHandler';
import switcherHandler from './components/switcher/switcherHandler';
import showError from './components/form/showError';

document.addEventListener('DOMContentLoaded', () => {

  // Show error if input are empty
  const cityInput = document.querySelector('#city');
  cityInput.addEventListener('input', showError);

  
  // filters
  const filtersDiv = document.querySelector('.filters');
  const filtersChecboxes = filtersDiv.querySelectorAll('input[type=checkbox]');
  filtersChecboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filtersHandler);
  });


  // event toggle switcher
  const switcherUnits = switcherHandler();


  // event submit form
  const form = document.querySelector('.form');
  form.addEventListener('submit', () => {
    event.preventDefault();
    const units = switcherHandler();

    const weather = getWeaher(cityInput.value, units);
    weather.then(weatherHandler);
  });


});