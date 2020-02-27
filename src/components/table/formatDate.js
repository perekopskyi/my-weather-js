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

export default formatDateAndTime;