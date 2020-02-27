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
  const tbody = document.querySelector('tbody');
  filtersChecboxes.forEach(checkbox => {
   
    /* lock filters if table are empty */
    if (tbody.children.length === 0) {
      checkbox.setAttribute('disabled', true);
    } else {
      checkbox.removeAttribute('disabled');
      checkbox.addEventListener('change', filtersHandler);
    }
  });


  // event submit form
  const form = document.querySelector('.form');
  form.addEventListener('submit', () => {
    event.preventDefault();
    const units = switcherHandler();

    const weather = getWeaher(cityInput.value, units);
    weather.then(weatherHandler);
  });


  // event toggle switcher
  switcherHandler();

});