const cardNum = '4561-2612-1234-5464';

function lunaAlgo(cardNumber) {
    const card = cardNumber.replaceAll('-', '');
    let sum;
    for (let i = card.length - 1; i >= 0; i--) {
        let number = card[i];
        if (i % 2 == 0) {
            number *= 2;
            if (number > 9) {
                number -= 9;
            }
        }
        sum += number;
    }
    return sum % 10 == 0;
}

console.log(lunaAlgo(cardNum));
