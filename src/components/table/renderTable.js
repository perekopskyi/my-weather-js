import formatDateAndTime from "./formatDate";
import getIcon from './getIcon';

const renderTable = (list) => {
 
  /* clear table wrapper */
  const tableSection = document.querySelector('.table-wrap');
  tableSection.innerHTML = '';  // clear table section

  /* create new table */
  const table = document.createElement('table');
  table.className = 'table';
  tableSection.appendChild(table); 



  /* create filters object */
  const filtersChecboxes = document.querySelectorAll('.filters input[type=checkbox]');
  let filters = {};
  filtersChecboxes.forEach(checkbox => {
    filters[checkbox.id] = checkbox.checked;
  });

  /* create an array of filters whose status is true */
  const filtersTrue = []
  for (const key in filters) {
    if (filters.hasOwnProperty(key) && filters[key] === true) {
      const filter = key;
      filtersTrue.push(filter);
    }
  }

  renderThead(filtersTrue);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  tbody.innerHTML = '';

  list.forEach(element => renderRows(element, filtersTrue));



  /* create and fill thead with filters */
  function renderThead(filtersTrue) {

    const thead = document.createElement('thead');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>Date/Time</th>
    <th class="weather">Weather</th>`;

    filtersTrue.forEach(filter => {

      const th = document.createElement('th');
      th.className = filter;

      switch (filter) {
        case 'temperature':
          th.innerHTML = 'Temperature';
          break;
        case 'max-temp':
          th.innerHTML = 'Max Temp.';
          break;
        case 'min-temp':
          th.innerHTML = 'Min Temp.';
          break;
        case 'pressure':
          th.innerHTML = 'Pressure';
          break;
        case 'humidity':
          th.innerHTML = 'Humidity';
          break;
        case 'feels-like':
          th.innerHTML = 'Feels like';
          break;

        default:
          break;
      }
      tr.appendChild(th);
    });
    
    thead.appendChild(tr);
    table.appendChild(thead);
  }


  /* create and fill rows in tbody with filters */
  function renderRows(elem, filtersTrue) {

    const date = formatDateAndTime(elem.dt_txt);
    const icon = getIcon(elem);
    const temperature = Math.round(elem.main.temp);
    const maxTemp = Math.round(elem.main.temp_max);
    const minTemp = Math.round(elem.main.temp_min);
    const pressure = elem.main.pressure;
    const humidity = elem.main.humidity;
    const feelsLike = Math.round(elem.main.feels_like);


    // create new table row
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${date}</td>
    <td class="weather">${icon}</td>`;


    filtersTrue.forEach(filter => {

      const td = document.createElement('td');
      td.className = filter;
      td.innerHTML = filter;
      
      switch (filter) {
        case 'temperature':
          td.innerHTML = temperature;
          break;
        case 'max-temp':
          td.innerHTML = maxTemp;
          break;
        case 'min-temp':
          td.innerHTML = minTemp;
          break;
        case 'pressure':
          td.innerHTML = pressure;
          break;
        case 'humidity':
          td.innerHTML = humidity;
          break;
        case 'feels-like':
          td.innerHTML = feelsLike;
          break;

        default:
          break;
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }
};

export default renderTable;