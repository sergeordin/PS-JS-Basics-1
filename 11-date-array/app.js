/*
Дан массив строк
Необходимо написать функцию, которая удаляла бы из массива все строки, которые нельзя перевести в дату и возвращала бы новый массив вида - ['10-10-2022']
*/

const arrStr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

// Valid data = '10-02-2022' or '11/12/2023'

function splitStr(arr) {
    const res = arr.map((item) => {
        return item.split(/\/|-/).filter(Number); // регулярное выражение для того, чтобы сделать сплит сразу по 2 правилам + фильтр, который оставляет только численные значения
    });
    return res;
}

function checkDate(arr) {
    const res = arr.map((item) => {
        if (item.length > 2) {
            if (item[0] <= 31 && item[1] <= 12 && item[2].length === 4) {
                return item;
            } else {
                return null;
            }
        } else {
            return null;
        }
    });
    return res;
}

function isDate(str) {
    const res = str.map((item) => {
        if (item != null) {
            return item.join('-');
        }
    });
    return res;
}

console.log(isDate(checkDate(splitStr(arrStr))));
