/* Написать код (одной строкой), который позволияет проверить возможность вести машину по следующим параметрам:
- hasLicence - имеет права
- age - возраст
- isDrunk

Пользователь может вести машину только если ему больше или есть 18 лет, он имеет права и не пьян. Если может - вернуть "может", если нет - "не может"
*/
const hasLicence = true;
const age = 18;
const isDrunk = false;
console.log(hasLicence && age >= 18 && !isDrunk ? 'Может' : 'Не может');
