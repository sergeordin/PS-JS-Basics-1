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
