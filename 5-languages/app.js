/* 
Написать код, который при передаче пользователем языка en, ru, de выводит в консоль соответствующее приветствие на указанном языке
*/

const lang = prompt('Ваш язык? (ru, en, de)');

switch (lang) {
    case 'ru':
        console.log('Здравствуйте!');
        break;
    case 'en':
        console.log('Hello!');
        break;
    case 'de':
        console.log('Gutten Tag!');
        break;
    default:
        console.log('Ошибка');
        break;
}
