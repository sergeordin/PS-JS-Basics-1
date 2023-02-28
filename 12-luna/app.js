const cardNum = '4561-2612-1234-5444';

function lunaAlgo(cardNumber) {
    const card = cardNumber.replaceAll('-', '');
    card.length < 16 ? console.log('Length error') : console.log('Length ok');

    let sum = 0;
    for (let i = card.length - 1; i >= 0; i--) {
        let number = card[i];
        if (i % 2 == 0) {
            number *= 2;
            if (number > 9) {
                number -= 9;
            }
        }
        sum += number;
        console.log(typeof number);
    }
    return sum % 10 == 0;

    // let sum = card.reduce((acc, number, i) => {
    //     console.log(acc, number);
    //     if (i % 2 == 0) {
    //         number *= 2;
    //         if (number > 9) {
    //             number -= 9;
    //         }
    //     }
    //     acc += number;
    // }, 0);
    // console.log(sum)
}

console.log(lunaAlgo(cardNum));
