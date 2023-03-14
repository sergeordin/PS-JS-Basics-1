const query = {
    search: 'Вася',
    take: 10,
};

function searchStr(query) {
    const keys = [];
    for (const [key, value] of Object.entries(query)) {
        keys.push(`${key}=${value}`);
    }
    return keys.join('&');
}
console.log(searchStr(query));
