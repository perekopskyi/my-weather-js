
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

export default filtersHandler;