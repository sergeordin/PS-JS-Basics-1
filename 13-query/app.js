const query = {
    search: 'Вася',
    take: 10,
};

function searchStr(q) {
    const values = [];
    const keys = [];
    let str = '';
    for (key in q) {
        keys.push(key);
    }
    for (val of Object.values(q)) {
        values.push(val);
    }
    if (values.length == 1) {
        str = `${keys[0]}=${values[0]}`;
    } else if (values.length > 1) {
        str = `${keys[0]}=${values[0]}&${keys[1]}=${values[1]}`;
    }
    return str;
}

console.log(searchStr(query));
