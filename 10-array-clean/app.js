/*
Напишите функцию, которая принимает:
- Массив чисел
- Функцию удалению элементов
И возвращает отфильтрованный массив. 
При этом функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить
*/

const numArray = [1, 3, 5, 2, 4, 6, 7, 9, 8, 0, -2, -5, -9]; //Исходный рандомный массив

function filterFn(arr, fn) {
    const filterArr = [];
    for (const item of arr) {
        if (fn()) {
            filterArr.push(item);
        } else {
            return arr;
        }
    }
    return filterArr;
}

function deleteRule(num) {
    return num > 0;
}

console.log(filterFn(numArray, deleteRule(23)));
