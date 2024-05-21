const toggleSwitch = document.getElementById('switch');

toggleSwitch.addEventListener('change', (e) => {
  const textMonthly = document.getElementById('js-textMonthly');
  const textYearly = document.getElementById('js-textYearly');
  const mainColor = '#de7f89';
  const blackColor = '#000';
  
  if (e.target.checked) {
    textMonthly.style.color = blackColor;
    textYearly.style.color = mainColor;
  } else {
    textMonthly.style.color = mainColor;
    textYearly.style.color = blackColor;
  }
});