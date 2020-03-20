let data = [{
        base: 'USD',
        rates: {
            EUR: 0.85,
            RUB: 34.456,
            BYN: 2.345,
        }
    },
    {
        base: 'EUR',
        rates: {
            USD: 1.285,
            RUB: 44.456,
            BYN: 2.545,
        }
    },
    {
        base: 'RUB',
        rates: {
            USD: 0.00285,
            EUR: 0.00156,
            BYN: 0.0545,
        }
    },
    {
        base: 'BYN',
        rates: {
            USD: 0.585,
            EUR: 0.4156,
            RUB: 20.564,
        }
    },
]

document.querySelector('#add').addEventListener('click', function() {
    return currencyConvert();
})

function currencyConvert() {
    let select_from = document.querySelector('#select_from').value,
        select_to = document.querySelector('#select_to').value,
        from = document.querySelector('#input_from'),
        to = document.querySelector('#input_to');



    if (select_from == 'USD') {
        return usd()
    }
    if (select_from == 'EUR') {
        return eur()
    }
    if (select_from == 'RUB') {
        return rub()
    }
    if (select_from == 'BYN') {
        return byn()
    }

    function usd() {
        let rates = {
            EUR: 0.85,
            RUB: 34.456,
            BYN: 2.345,
        }
        let arr = Object.values(rates);
        if (select_to == 'EUR') {
            to.value = (arr[0] * from.value).toFixed(2);
        } else if (select_to == 'RUB') {
            to.value = (arr[1] * from.value).toFixed(2);
        } else if (select_to == 'BYN') {
            to.value = (arr[2] * from.value).toFixed(2);
        } else {
            to.value = from.value;
        }
    }

    function eur() {
        let rates = {
            USD: 1.285,
            RUB: 44.456,
            BYN: 2.545,
        }
        let arr = Object.values(rates);
        if (select_to == 'USD') {
            to.value = (arr[0] * from.value).toFixed(2);
        } else if (select_to == 'RUB') {
            to.value = (arr[1] * from.value).toFixed(2);
        } else if (select_to == 'BYN') {
            to.value = (arr[2] * from.value).toFixed(2);
        } else {
            to.value = from.value;
        }
    }

    function rub() {
        let rates = {
            USD: 0.00285,
            EUR: 0.00156,
            BYN: 0.0545,
        }
        let arr = Object.values(rates);
        if (select_to == 'USD') {
            to.value = (arr[0] * from.value).toFixed(2);
        } else if (select_to == 'EUR') {
            to.value = (arr[1] * from.value).toFixed(2);
        } else if (select_to == 'BYN') {
            to.value = (arr[2] * from.value).toFixed(2);
        } else {
            to.value = from.value;
        }
    }

    function byn() {
        let rates = {
            USD: 0.585,
            EUR: 0.4156,
            RUB: 20.564,
        }
        let arr = Object.values(rates);
        if (select_to == 'USD') {
            to.value = (arr[0] * from.value).toFixed(2);
        } else if (select_to == 'EUR') {
            to.value = (arr[1] * from.value).toFixed(2);
        } else if (select_to == 'RUB') {
            to.value = (arr[2] * from.value).toFixed(2);
        } else {
            to.value = from.value;
        }
    }
}