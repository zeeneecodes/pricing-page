const toggleSwitch = document.getElementById('switch');

const pricing = {
  starter: ['1,376','950'],
  professional: ['2,184','1,790'],
  business: ['4,424','2,910']
}

toggleSwitch.addEventListener('change', (e) => {
  const textMonthly = document.getElementById('js-textMonthly');
  const textYearly = document.getElementById('js-textYearly');
  const mainColor = '#de7f89';
  const blackColor = '#000';
  
  if (e.target.checked) {
    textMonthly.style.color = blackColor;
    textYearly.style.color = mainColor;
    changePrice('yearly');
  } else {
    textMonthly.style.color = mainColor;
    textYearly.style.color = blackColor;
    changePrice('monthly');
  }
});

function changePrice(status) {
  const priceStarter = document.getElementById('js-amountStarter');
  const pricePro = document.getElementById('js-amountProfessional');
  const priceBusiness = document.getElementById('js-amountBusiness');
  let priceStarterNew;
  let priceProNew;
  let priceBusinessNew;

  if (status === 'yearly') {
    priceStarterNew = document.createTextNode(pricing.starter[1]);
    priceProNew = document.createTextNode(pricing.professional[1]);
    priceBusinessNew = document.createTextNode(pricing.business[1]);

    // BEGINNER
    while (priceStarter.firstChild) {
      priceStarter.removeChild(priceStarter.firstChild);
    }
    priceStarter.appendChild(priceStarterNew);
    
    // PROFESSIONAL
    while (pricePro.firstChild) {
      pricePro.removeChild(pricePro.firstChild);
    }
    pricePro.appendChild(priceProNew);
    
    // BUSINESS
    while (priceBusiness.firstChild) {
      priceBusiness.removeChild(priceBusiness.firstChild);
    }
    priceBusiness.appendChild(priceBusinessNew);
  } else if (status === 'monthly') {
    priceStarterNew = document.createTextNode(pricing.starter[0]);
    priceProNew = document.createTextNode(pricing.professional[0]);
    priceBusinessNew = document.createTextNode(pricing.business[0]);

    // BEGINNER
    while (priceStarter.firstChild) {
      priceStarter.removeChild(priceStarter.firstChild);
    }
    priceStarter.appendChild(priceStarterNew);

    // PROFESSIONAL
    while (pricePro.firstChild) {
      pricePro.removeChild(pricePro.firstChild);
    }
    pricePro.appendChild(priceProNew);

    // BUSINESS
    while (priceBusiness.firstChild) {
      priceBusiness.removeChild(priceBusiness.firstChild);
    }
    priceBusiness.appendChild(priceBusinessNew);
  }
}