/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/filters/filtersHandler.js":
/*!**************************************************!*\
  !*** ./src/components/filters/filtersHandler.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Accept checkbox change event and
 * hides a column depending on its className
 * which matches the checkbox.id
 * 
 * @param {event} event 
 */
const filtersHandler = event => {
  const target = event.target;
  const colum = document.querySelectorAll(`th.${target.id}, td.${target.id}`);

  if (target.checked) {
    colum.forEach(td => {
      td.style.display = 'table-cell';
    });
  } else {
    colum.forEach(td => {
      td.style.display = 'none';
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (filtersHandler);

/***/ }),

/***/ "./src/components/form/showError.js":
/*!******************************************!*\
  !*** ./src/components/form/showError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showError = event => {
  const target = event.target;
  const error = document.querySelector('.error');

  if (target.value.length === 0) {
    error.innerText = 'the field must not be empty';
    error.style.opacity = 1;
  } else {
    error.style.opacity = 0;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showError);

/***/ }),

/***/ "./src/components/getWeaher.js":
/*!*************************************!*\
  !*** ./src/components/getWeaher.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Fetch data from API and return JSON
 * 
 * @param {string} city name
 * @param {string} units 
 */
const getWeaher = (city, units = 'metric') => {
  const openWeatherApiKey = 'a71cbacce1b2b9aa059f27a00094c380'; // мой ключ

  const weatherApiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${openWeatherApiKey}`;
  return fetch(weatherApiLink).then(response => response.json()).then(result => {
    if (result.cod && result.cod === 400) {
      return result.message;
    }

    return result;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getWeaher);

/***/ }),

/***/ "./src/components/switcher/switcherHandler.js":
/*!****************************************************!*\
  !*** ./src/components/switcher/switcherHandler.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeaher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getWeaher */ "./src/components/getWeaher.js");
/* harmony import */ var _weatherHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weatherHandler */ "./src/components/weatherHandler.js");


/**
 * Set units for API requst, get request and render result
 */

const switcherHandler = () => {
  const switcher = document.querySelector('.toggleCheck_switch');
  const checkbox = document.querySelector('#units'); // custom checking units

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
    } // get data API and render result


    const cityInput = document.querySelector('#city');
    const weather = Object(_getWeaher__WEBPACK_IMPORTED_MODULE_0__["default"])(cityInput.value, units);
    weather.then(_weatherHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);
    return;
  });
  return units;
};

/* harmony default export */ __webpack_exports__["default"] = (switcherHandler);

/***/ }),

/***/ "./src/components/table/formatDate.js":
/*!********************************************!*\
  !*** ./src/components/table/formatDate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formatDateAndTime = data => {
  const newDate = new Date(data);
  const date = formatNumber(newDate.getDate());
  const month = formatNumber(newDate.getMonth() + 1);
  const hour = formatNumber(newDate.getHours());
  const minutes = formatNumber(newDate.getMinutes());
  return `${date}/${month}/${newDate.getFullYear()} ${hour}:${minutes}`;
};

function formatNumber(number) {
  return number > 9 ? number : `0${number}`;
}

/* harmony default export */ __webpack_exports__["default"] = (formatDateAndTime);

/***/ }),

/***/ "./src/components/table/renderTable.js":
/*!*********************************************!*\
  !*** ./src/components/table/renderTable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDate */ "./src/components/table/formatDate.js");


const renderTable = list => {
  // const tableSection = document.querySelector('.table-wrap');
  // tableSection.innerHTML = '';  // clear table section
  // const table = document.createElement('table');
  // table.className = 'table';
  // tableSection.appendChild(table); 
  // renderThead();
  const tbody = document.querySelector('tbody'); // const tbody = document.createElement('tbody');
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
    const date = Object(_formatDate__WEBPACK_IMPORTED_MODULE_0__["default"])(elem.dt_txt);
    const icon = `<img class="weather-img"
    src="http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png" 
    alt="${elem.weather[0].description}" title="${elem.weather[0].description}">`;
    const temperature = elem.main.temp;
    const maxTemp = elem.main.temp_max;
    const minTemp = elem.main.temp_min;
    const pressure = elem.main.pressure;
    const humidity = elem.main.humidity;
    const feelsLike = elem.main.feels_like; // create new table row

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

/* harmony default export */ __webpack_exports__["default"] = (renderTable);

/***/ }),

/***/ "./src/components/weatherHandler.js":
/*!******************************************!*\
  !*** ./src/components/weatherHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_renderTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table/renderTable */ "./src/components/table/renderTable.js");

/**
 * Show error message, city data and render weather table
 * @param {json} weatherData from API
 */

const weatherHandler = weatherData => {
  /* show error message if API return error */
  const error = document.querySelector('.error');

  if (weatherData.message !== 0) {
    error.innerText = weatherData.message;
    error.style.opacity = 1;
    return;
  } else {
    error.style.opacity = 0;
  }

  const data = weatherData;
  /* show city, latitude and longitude */

  const city = document.querySelector('.city_title');
  city.innerText = data.city.name;
  const latitude = document.querySelector('#latitude');
  latitude.innerText = data.city.coord.lat;
  const longitude = document.querySelector('#longitude');
  longitude.innerText = data.city.coord.lon;
  Object(_table_renderTable__WEBPACK_IMPORTED_MODULE_0__["default"])(data.list);
};

/* harmony default export */ __webpack_exports__["default"] = (weatherHandler);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_getWeaher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/getWeaher */ "./src/components/getWeaher.js");
/* harmony import */ var _components_weatherHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weatherHandler */ "./src/components/weatherHandler.js");
/* harmony import */ var _components_filters_filtersHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters/filtersHandler */ "./src/components/filters/filtersHandler.js");
/* harmony import */ var _components_switcher_switcherHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/switcher/switcherHandler */ "./src/components/switcher/switcherHandler.js");
/* harmony import */ var _components_form_showError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form/showError */ "./src/components/form/showError.js");






document.addEventListener('DOMContentLoaded', () => {
  // Show error if input are empty
  const cityInput = document.querySelector('#city');
  cityInput.addEventListener('input', _components_form_showError__WEBPACK_IMPORTED_MODULE_5__["default"]); // filters

  const filtersDiv = document.querySelector('.filters');
  const filtersChecboxes = filtersDiv.querySelectorAll('input[type=checkbox]');
  filtersChecboxes.forEach(checkbox => {
    checkbox.addEventListener('change', _components_filters_filtersHandler__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }); // event toggle switcher

  const switcherUnits = Object(_components_switcher_switcherHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(); // event submit form

  const form = document.querySelector('.form');
  form.addEventListener('submit', () => {
    event.preventDefault();
    const units = Object(_components_switcher_switcherHandler__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const weather = Object(_components_getWeaher__WEBPACK_IMPORTED_MODULE_1__["default"])(cityInput.value, units);
    weather.then(_components_weatherHandler__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL3Nob3dFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nZXRXZWFoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3dpdGNoZXIvc3dpdGNoZXJIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlL2Zvcm1hdERhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvcmVuZGVyVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJmaWx0ZXJzSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwiY29sdW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpZCIsImNoZWNrZWQiLCJmb3JFYWNoIiwidGQiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93RXJyb3IiLCJlcnJvciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImxlbmd0aCIsImlubmVyVGV4dCIsIm9wYWNpdHkiLCJnZXRXZWFoZXIiLCJjaXR5IiwidW5pdHMiLCJvcGVuV2VhdGhlckFwaUtleSIsIndlYXRoZXJBcGlMaW5rIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY29kIiwibWVzc2FnZSIsInN3aXRjaGVySGFuZGxlciIsInN3aXRjaGVyIiwiY2hlY2tib3giLCJhZGRFdmVudExpc3RlbmVyIiwiY2l0eUlucHV0Iiwid2VhdGhlciIsIndlYXRoZXJIYW5kbGVyIiwiZm9ybWF0RGF0ZUFuZFRpbWUiLCJkYXRhIiwibmV3RGF0ZSIsIkRhdGUiLCJkYXRlIiwiZm9ybWF0TnVtYmVyIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdldEZ1bGxZZWFyIiwibnVtYmVyIiwicmVuZGVyVGFibGUiLCJsaXN0IiwidGJvZHkiLCJpbm5lckhUTUwiLCJlbGVtZW50IiwicmVuZGVyUm93cyIsInJlbmRlclRoZWFkIiwidGhlYWQiLCJjcmVhdGVFbGVtZW50IiwidGFibGUiLCJhcHBlbmRDaGlsZCIsImVsZW0iLCJkdF90eHQiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJ0ZW1wZXJhdHVyZSIsIm1haW4iLCJ0ZW1wIiwibWF4VGVtcCIsInRlbXBfbWF4IiwibWluVGVtcCIsInRlbXBfbWluIiwicHJlc3N1cmUiLCJodW1pZGl0eSIsImZlZWxzTGlrZSIsImZlZWxzX2xpa2UiLCJ0ciIsIndlYXRoZXJEYXRhIiwibmFtZSIsImxhdGl0dWRlIiwiY29vcmQiLCJsYXQiLCJsb25naXR1ZGUiLCJsb24iLCJmaWx0ZXJzRGl2IiwiZmlsdGVyc0NoZWNib3hlcyIsInN3aXRjaGVyVW5pdHMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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a0QsQ0FtQmxEOztBQUNBLFFBQU0yRCxJQUFJLEdBQUd0RixRQUFRLENBQUNVLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBNEUsTUFBSSxDQUFDeEQsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsTUFBTTtBQUNwQ2pDLFNBQUssQ0FBQzBGLGNBQU47QUFDQSxVQUFNdEUsS0FBSyxHQUFHVSxvRkFBZSxFQUE3QjtBQUVBLFVBQU1LLE9BQU8sR0FBR2pCLHFFQUFTLENBQUNnQixTQUFTLENBQUNwQixLQUFYLEVBQWtCTSxLQUFsQixDQUF6QjtBQUNBZSxXQUFPLENBQUNYLElBQVIsQ0FBYVksa0VBQWI7QUFDRCxHQU5EO0FBU0QsQ0E5QkQsRTs7Ozs7Ozs7Ozs7QUNQQSx5QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIlxyXG4vKipcclxuICogQWNjZXB0IGNoZWNrYm94IGNoYW5nZSBldmVudCBhbmRcclxuICogaGlkZXMgYSBjb2x1bW4gZGVwZW5kaW5nIG9uIGl0cyBjbGFzc05hbWVcclxuICogd2hpY2ggbWF0Y2hlcyB0aGUgY2hlY2tib3guaWRcclxuICogXHJcbiAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IFxyXG4gKi9cclxuY29uc3QgZmlsdGVyc0hhbmRsZXIgPSBldmVudCA9PiB7XHJcblxyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICBjb25zdCBjb2x1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHRoLiR7dGFyZ2V0LmlkfSwgdGQuJHt0YXJnZXQuaWR9YCk7XHJcblxyXG4gIGlmICh0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgY29sdW0uZm9yRWFjaCh0ZCA9PiB7XHJcbiAgICAgIHRkLnN0eWxlLmRpc3BsYXkgPSAndGFibGUtY2VsbCc7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29sdW0uZm9yRWFjaCh0ZCA9PiB7XHJcbiAgICAgIHRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJzSGFuZGxlcjsiLCJjb25zdCBzaG93RXJyb3IgPSBldmVudCA9PiB7XHJcblxyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xyXG5cclxuICBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZXJyb3IuaW5uZXJUZXh0ID0gJ3RoZSBmaWVsZCBtdXN0IG5vdCBiZSBlbXB0eSc7XHJcbiAgICBlcnJvci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3Iuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzaG93RXJyb3I7IiwiLyoqXHJcbiAqIEZldGNoIGRhdGEgZnJvbSBBUEkgYW5kIHJldHVybiBKU09OXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eSBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1bml0cyBcclxuICovXHJcbmNvbnN0IGdldFdlYWhlciA9IChjaXR5LCB1bml0cyA9ICdtZXRyaWMnKSA9PiB7XHJcblxyXG4gIGNvbnN0IG9wZW5XZWF0aGVyQXBpS2V5ID0gJ2E3MWNiYWNjZTFiMmI5YWEwNTlmMjdhMDAwOTRjMzgwJzsgLy8g0LzQvtC5INC60LvRjtGHXHJcbiAgY29uc3Qgd2VhdGhlckFwaUxpbmsgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke29wZW5XZWF0aGVyQXBpS2V5fWA7XHJcblxyXG4gIHJldHVybiBmZXRjaCh3ZWF0aGVyQXBpTGluaylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuY29kICYmIHJlc3VsdC5jb2QgPT09IDQwMCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQubWVzc2FnZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWFoZXI7IiwiaW1wb3J0IGdldFdlYWhlciBmcm9tIFwiLi4vZ2V0V2VhaGVyXCI7XHJcbmltcG9ydCB3ZWF0aGVySGFuZGxlciBmcm9tIFwiLi4vd2VhdGhlckhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdW5pdHMgZm9yIEFQSSByZXF1c3QsIGdldCByZXF1ZXN0IGFuZCByZW5kZXIgcmVzdWx0XHJcbiAqL1xyXG5jb25zdCBzd2l0Y2hlckhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZUNoZWNrX3N3aXRjaCcpO1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzJyk7XHJcblxyXG4gIC8vIGN1c3RvbSBjaGVja2luZyB1bml0c1xyXG4gIGxldCB1bml0cyA9ICcnO1xyXG4gIGlmIChjaGVja2JveCAmJiBjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICB1bml0cyA9ICdpbXBlcmlhbCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHVuaXRzID0gJ21ldHJpYyc7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNsaWNrIGNoZWNraW5nIHVudXRzXHJcbiAgICBpZiAoY2hlY2tib3ggJiYgIWNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgdW5pdHMgPSAnaW1wZXJpYWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5pdHMgPSAnbWV0cmljJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgZGF0YSBBUEkgYW5kIHJlbmRlciByZXN1bHRcclxuICAgIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZ2V0V2VhaGVyKGNpdHlJbnB1dC52YWx1ZSwgdW5pdHMpO1xyXG4gICAgd2VhdGhlci50aGVuKHdlYXRoZXJIYW5kbGVyKTtcclxuICAgIHJldHVybjtcclxuICB9KTtcclxuICByZXR1cm4gdW5pdHM7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN3aXRjaGVySGFuZGxlcjsiLCJjb25zdCBmb3JtYXREYXRlQW5kVGltZSA9IGRhdGEgPT4ge1xyXG5cclxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0YSk7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBmb3JtYXROdW1iZXIobmV3RGF0ZS5nZXREYXRlKCkpO1xyXG4gIGNvbnN0IG1vbnRoID0gZm9ybWF0TnVtYmVyKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gIGNvbnN0IGhvdXIgPSBmb3JtYXROdW1iZXIobmV3RGF0ZS5nZXRIb3VycygpKTtcclxuICBjb25zdCBtaW51dGVzID0gZm9ybWF0TnVtYmVyKG5ld0RhdGUuZ2V0TWludXRlcygpKTtcclxuXHJcbiAgcmV0dXJuIGAke2RhdGV9LyR7bW9udGh9LyR7bmV3RGF0ZS5nZXRGdWxsWWVhcigpfSAke2hvdXJ9OiR7bWludXRlc31gO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlcikge1xyXG4gIHJldHVybiBudW1iZXIgPiA5ID8gbnVtYmVyIDogYDAke251bWJlcn1gO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREYXRlQW5kVGltZTsiLCJpbXBvcnQgZm9ybWF0RGF0ZUFuZFRpbWUgZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5cclxuY29uc3QgcmVuZGVyVGFibGUgPSAobGlzdCkgPT4ge1xyXG4gXHJcbiAgLy8gY29uc3QgdGFibGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXdyYXAnKTtcclxuICAvLyB0YWJsZVNlY3Rpb24uaW5uZXJIVE1MID0gJyc7ICAvLyBjbGVhciB0YWJsZSBzZWN0aW9uXHJcblxyXG4gIC8vIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAvLyB0YWJsZS5jbGFzc05hbWUgPSAndGFibGUnO1xyXG4gIC8vIHRhYmxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0YWJsZSk7IFxyXG5cclxuICAvLyByZW5kZXJUaGVhZCgpO1xyXG4gIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKTtcclxuXHJcbiAgLy8gY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gIC8vIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICB0Ym9keS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgXHJcblxyXG4gIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHJlbmRlclJvd3MoZWxlbWVudCkpO1xyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclRoZWFkKCkge1xyXG4gICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgdGhlYWQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPkRhdGUvVGltZTwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3M9XCJ3ZWF0aGVyXCI+V2VhdGhlcjwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPlRlbXBlcmF0dXJlPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzcz1cIm1heC10ZW1wXCI+TWF4IFRlbXAuPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzcz1cIm1pbi10ZW1wXCI+TWluIFRlbXAuPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzcz1cInByZXNzdXJlXCI+UHJlc3N1cmU8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzPVwiaHVtaWRpdHlcIj5IdW1pZGl0eTwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3M9XCJmZWVscy1saWtlXCI+RmVlbHMgbGlrZTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5gO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGZ1bmN0aW9uIHJlbmRlclJvd3MoZWxlbSkge1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBmb3JtYXREYXRlQW5kVGltZShlbGVtLmR0X3R4dCk7XHJcbiAgICBjb25zdCBpY29uID0gYDxpbWcgY2xhc3M9XCJ3ZWF0aGVyLWltZ1wiXHJcbiAgICBzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2VsZW0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdcIiBcclxuICAgIGFsdD1cIiR7ZWxlbS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufVwiIHRpdGxlPVwiJHtlbGVtLndlYXRoZXJbMF0uZGVzY3JpcHRpb259XCI+YDtcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZWxlbS5tYWluLnRlbXA7XHJcbiAgICBjb25zdCBtYXhUZW1wID0gZWxlbS5tYWluLnRlbXBfbWF4O1xyXG4gICAgY29uc3QgbWluVGVtcCA9IGVsZW0ubWFpbi50ZW1wX21pbjtcclxuICAgIGNvbnN0IHByZXNzdXJlID0gZWxlbS5tYWluLnByZXNzdXJlO1xyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBlbGVtLm1haW4uaHVtaWRpdHk7XHJcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBlbGVtLm1haW4uZmVlbHNfbGlrZTtcclxuXHJcblxyXG4gICAgLy8gY3JlYXRlIG5ldyB0YWJsZSByb3dcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIHRyLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRkPiR7ZGF0ZX08L3RkPlxyXG4gICAgICA8dGQgY2xhc3M9XCJ3ZWF0aGVyXCI+JHtpY29ufTwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzcz1cInRlbXBlcmF0dXJlXCI+JHt0ZW1wZXJhdHVyZX08L3RkPlxyXG4gICAgICA8dGQgY2xhc3M9XCJtYXgtdGVtcFwiPiR7bWF4VGVtcH08L3RkPlxyXG4gICAgICA8dGQgY2xhc3M9XCJtaW4tdGVtcFwiPiR7bWluVGVtcH08L3RkPlxyXG4gICAgICA8dGQgY2xhc3M9XCJwcmVzc3VyZVwiPiR7cHJlc3N1cmV9PC90ZD5cclxuICAgICAgPHRkIGNsYXNzPVwiaHVtaWRpdHlcIj4ke2h1bWlkaXR5fTwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzcz1cImZlZWxzLWxpa2VcIj4ke2ZlZWxzTGlrZX08L3RkPmA7XHJcbiAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhYmxlOyIsImltcG9ydCByZW5kZXJUYWJsZSBmcm9tIFwiLi90YWJsZS9yZW5kZXJUYWJsZVwiO1xyXG5cclxuLyoqXHJcbiAqIFNob3cgZXJyb3IgbWVzc2FnZSwgY2l0eSBkYXRhIGFuZCByZW5kZXIgd2VhdGhlciB0YWJsZVxyXG4gKiBAcGFyYW0ge2pzb259IHdlYXRoZXJEYXRhIGZyb20gQVBJXHJcbiAqL1xyXG5jb25zdCB3ZWF0aGVySGFuZGxlciA9IHdlYXRoZXJEYXRhID0+IHtcclxuXHJcbiAgLyogc2hvdyBlcnJvciBtZXNzYWdlIGlmIEFQSSByZXR1cm4gZXJyb3IgKi9cclxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xyXG4gIGlmICh3ZWF0aGVyRGF0YS5tZXNzYWdlICE9PSAwKSB7XHJcbiAgICBlcnJvci5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5tZXNzYWdlO1xyXG4gICAgZXJyb3Iuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YSA9IHdlYXRoZXJEYXRhO1xyXG4gIFxyXG4gIC8qIHNob3cgY2l0eSwgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSAqL1xyXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eV90aXRsZScpO1xyXG4gIGNpdHkuaW5uZXJUZXh0ID0gZGF0YS5jaXR5Lm5hbWU7XHJcbiAgY29uc3QgbGF0aXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0aXR1ZGUnKTtcclxuICBsYXRpdHVkZS5pbm5lclRleHQgPSBkYXRhLmNpdHkuY29vcmQubGF0O1xyXG4gIGNvbnN0IGxvbmdpdHVkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb25naXR1ZGUnKTtcclxuICBsb25naXR1ZGUuaW5uZXJUZXh0ID0gZGF0YS5jaXR5LmNvb3JkLmxvbjtcclxuXHJcblxyXG4gIHJlbmRlclRhYmxlKGRhdGEubGlzdCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckhhbmRsZXI7IiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBnZXRXZWFoZXIgZnJvbSAnLi9jb21wb25lbnRzL2dldFdlYWhlcic7XHJcbmltcG9ydCB3ZWF0aGVySGFuZGxlciBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlckhhbmRsZXInO1xyXG5pbXBvcnQgZmlsdGVyc0hhbmRsZXIgZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyc0hhbmRsZXInO1xyXG5pbXBvcnQgc3dpdGNoZXJIYW5kbGVyIGZyb20gJy4vY29tcG9uZW50cy9zd2l0Y2hlci9zd2l0Y2hlckhhbmRsZXInO1xyXG5pbXBvcnQgc2hvd0Vycm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3Nob3dFcnJvcic7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAvLyBTaG93IGVycm9yIGlmIGlucHV0IGFyZSBlbXB0eVxyXG4gIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XHJcbiAgY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2hvd0Vycm9yKTtcclxuXHJcbiAgXHJcbiAgLy8gZmlsdGVyc1xyXG4gIGNvbnN0IGZpbHRlcnNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVycycpO1xyXG4gIGNvbnN0IGZpbHRlcnNDaGVjYm94ZXMgPSBmaWx0ZXJzRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgZmlsdGVyc0NoZWNib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbHRlcnNIYW5kbGVyKTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vIGV2ZW50IHRvZ2dsZSBzd2l0Y2hlclxyXG4gIGNvbnN0IHN3aXRjaGVyVW5pdHMgPSBzd2l0Y2hlckhhbmRsZXIoKTtcclxuXHJcblxyXG4gIC8vIGV2ZW50IHN1Ym1pdCBmb3JtXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdW5pdHMgPSBzd2l0Y2hlckhhbmRsZXIoKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZ2V0V2VhaGVyKGNpdHlJbnB1dC52YWx1ZSwgdW5pdHMpO1xyXG4gICAgd2VhdGhlci50aGVuKHdlYXRoZXJIYW5kbGVyKTtcclxuICB9KTtcclxuXHJcblxyXG59KTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=