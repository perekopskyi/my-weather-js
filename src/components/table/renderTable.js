import formatDateAndTime from "./formatDate";

const renderTable = (list) => {
 
  // const tableSection = document.querySelector('.table-wrap');
  // tableSection.innerHTML = '';  // clear table section

  // const table = document.createElement('table');
  // table.className = 'table';
  // tableSection.appendChild(table); 

  // renderThead();
  const tbody = document.querySelector('tbody');

  // const tbody = document.createElement('tbody');
  // table.appendChild(tbody);
  tbody.innerHTML = '';

  

  list.forEach(element => renderRows(element));



  function renderThead() {
    const thead = document.createElement('thead');
    thead.innerHTML = `
      <thead>
        <tr>
          <th>Date/Time</th>
          <th class="weather">Weather</th>
          <th class="temperature">Temperature</th>
          <th class="max-temp">Max Temp.</th>
          <th class="min-temp">Min Temp.</th>
          <th class="pressure">Pressure</th>
          <th class="humidity">Humidity</th>
          <th class="feels-like">Feels like</th>
        </tr>
      </thead>`;
    table.appendChild(thead);
  }


  
  function renderRows(elem) {

    const date = formatDateAndTime(elem.dt_txt);
    const icon = `<img class="weather-img"
    src="http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png" 
    alt="${elem.weather[0].description}" title="${elem.weather[0].description}">`;
    const temperature = elem.main.temp;
    const maxTemp = elem.main.temp_max;
    const minTemp = elem.main.temp_min;
    const pressure = elem.main.pressure;
    const humidity = elem.main.humidity;
    const feelsLike = elem.main.feels_like;


    // create new table row
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${date}</td>
      <td class="weather">${icon}</td>
      <td class="temperature">${temperature}</td>
      <td class="max-temp">${maxTemp}</td>
      <td class="min-temp">${minTemp}</td>
      <td class="pressure">${pressure}</td>
      <td class="humidity">${humidity}</td>
      <td class="feels-like">${feelsLike}</td>`;
    tbody.appendChild(tr);
  }

};

export default renderTable;