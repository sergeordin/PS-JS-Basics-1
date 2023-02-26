/*
Написать функцию, которая получает на вход строку с:
- суммой средств - 1000
- валютой средств - руб
- целевой валютой $

возвращает число в новой валюте, если конвертация поддерживается или null, если нет. Ставки конвертации хранятся внутри функции
*/

function convertCurrency(amount, from, to) {
    const rubToUsd = 75;
    const rubToEuro = 85;
    const euroToUsd = 1.2;
    const euroToRub = 1 / rubToEuro;
    const usdToRub = 1 / rubToUsd;
    const usdToEuro = 1 / euroToUsd;

    if (from === 'RUB' && to === 'USD') {
        return console.log(amount * rubToUsd);
    } else if (from === 'RUB' && to === 'EUR') {
        return console.log(amount * rubToEuro);
    } else if (from === 'USD' && to === 'RUB') {
        return console.log(amount * usdToRub);
    } else if (from === 'USD' && to === 'EUR') {
        return console.log(amount * usdToEuro);
    } else if (from === 'EUR' && to === 'RUB') {
        return console.log(amount * euroToRub);
    } else if (from === 'EUR' && to === 'USD') {
        return console.log(amount * euroToUsd);
    } else {
        return console.log(null);
    }
}

let amountInput = prompt('Введите сумму');
let fromInput = prompt('Введите исходную валюту (RUB, USD, EUR)');
let toInput = prompt(
    'Введите валюту, в которую нужно конвертировать (RUB, USD, EUR)'
);

convertCurrency(amountInput, fromInput, toInput);
/* 
Написать код, рассчитывающий дистанцию до объекта

- addressLat - адрес назначения Lat
- addressLong - адрес назначения Long
- positionLat - текущее положение пользователя Lat
- positionLong - текущее положение пользователя Long

В результате на основе этих координат нужно посчитать расстояние от текущего месторасположения до назначения

*/

const addressLat = 30;
const addressLong = 50;
const positionLat = 10;
const positionLong = 20;

const aSideLat = addressLat - positionLat;
const bSideLong = addressLong - positionLong;
const distance = Math.sqrt(aSideLat ** 2 + bSideLong ** 2).toFixed(2);

console.log(
    `Расстояние между координатами местоположения ${positionLat}, ${positionLong} и местом назначения ${addressLat}, ${addressLong} если двигаться напрямую равно ${distance}`
);
