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
export default showError;