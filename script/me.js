const  addCurrencyBtn = document.querySelector('.add-currency-btn'),
addCyrrencyList=document.querySelector('.add-currency-list');

const currencies = [
  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagimg: '<img src="img/united_states.gif" alt="">',
  },
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagimg: '<img src="img/euro.jpg.webp" alt="">'
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagimg: '<img src="img/australia.gif" alt="">'
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagimg:'<img src="img/china.gif" alt="">'
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagimg: '<img src="img/singapore.gif" alt="">'
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagimg: '<img src="img/russia.gif" alt="">'
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: '<img src="img/indonesia.gif" alt="">'
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: '<img src="img/denmark.gif" alt="">'
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagimg: '<img src="img/poland.gif" alt="">'
  },
  {
    name: "Belarussian Ruble",
    abbreviation: "BYN",
    symbol: "\u20BD",
    flagURL: '<img src="img/belarus.gif" alt="">'
  }
];


addCurrencyBtn.addEventListener('click', function(e){
  addCurrencyBtn.classList.toggle('open')
})
