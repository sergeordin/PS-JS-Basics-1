/*
Написать функцию, которая получает на вход строку с:
- суммой средств - 1000
- валютой средств - руб
- целевой валютой $

возвращает число в новой валюте, если конвертация поддерживается или null, если нет. Ставки конвертации хранятся внутри функции
*/

function convertCurrency(sum, currency = 'руб') {
	const rubToUsd = 75;
	const euroToUsd = 1.2;
	if (currency === 'руб') {
		return console.log(sum * rubToUsd);
	} else if (currency === 'euro') {
		return console.log(sum * euroToUsd);
	} else {
		return console.log(null);
	}
}

convertCurrency(1000);