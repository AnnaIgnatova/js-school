const changeTime = (target, element) => {
  const input = element;
  if (target.classList.contains('more-btn')) {
    if (Number(input.value) >= 30) input.value = 30;
    else input.value = +input.value + 5;
  }
  if (target.classList.contains('less-btn')) {
    if (Number(input.value) <= 5) input.value = 5;
    else input.value = +input.value - 5;
  }
};

export default changeTime;
