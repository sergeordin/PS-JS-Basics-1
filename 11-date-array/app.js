/*
Дан массив строк
Необходимо написать функцию, которая удаляла бы из массива все строки, которые нельзя перевести в дату и возвращала бы новый массив вида - ['10-10-2022']
*/

function transformDateStringToArray(dateString) {
    let dateArray = dateString.split('/');

    if (dateArray.length !== 3) {
        dateArray = dateString.split('-');
    }

    if (dateArray.length !== 3) {
        return null;
    }

    return dateArray;
}

function checkCorrectDate(dateArray) {
    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

    function isLeapYear(year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    }

    const [day, month, year] = dateArray.map((dateEl) => Number(dateEl));

    // check month
    if (month > 12) {
        return false;
    }

    // check day
    if (day > 31) {
        return false;
    }

    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
        return false;
    }

    // check February for correct day and leap year
    if (month === 2) {
        if (day === 30 || (day === 29 && !isLeapYear(year))) {
            return false;
        }
    }

    return true;
}

function checkDateFormat(date) {
    if (typeof date !== 'string') {
        return false;
    }

    let dateNumbersArray = transformDateStringToArray(date);

    if (dateNumbersArray === null) {
        return false;
    }

    // filter empty and not number variables
    if (dateNumbersArray.some((number) => !number || !(Number(number) >= 0))) {
        return false;
    }

    if (!checkCorrectDate(dateNumbersArray)) {
        return false;
    }

    return true;
}

function getDates(arr) {
    const formattedArray = arr
        .filter(checkDateFormat)
        .map((filteredDate) =>
            transformDateStringToArray(filteredDate).join('-')
        );

    return formattedArray;
}

const arr = [
    '10-02-2022',
    '29-02-2022',
    '30-02-2022',
    '31-02-2022',
    'test',
    5,
    '11/12/2023',
    '00/13/2022',
    '41/12/2023',
    '41/-12/2023',
    'aaaa/bbbb/vvvv',
    '//',
    [],
    '',
];

console.log(getDates(arr));
