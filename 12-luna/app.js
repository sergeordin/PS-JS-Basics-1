const cardNum = '4561-2612-1234-5444';

function lunaAlgo(cardNumber) {
    const card = cardNumber.replaceAll('-', '');
    card.length < 16 ? console.log('Length error') : console.log('Length ok');

    const res = card.split('').reduce((acc, value, index) => {
        if (index % 2 !== 0) {
            value = value * 2;
            if (value > 9) {
                value = value - 9;
            }
        }
        return acc;
    }, 0);
    return res % 10 == 0;
}

console.log(lunaAlgo(cardNum));
