/*
Написать 2 функции
1) Шифратор пароля - функция принимает пароль, разбивает пароль по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку
2) Проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со вторым паролем и false, если нет
*/

let passInput;
do {
	passInput = prompt('Введите пароль (не менее 6 символов)');
}
while (passInput.length < 6);

function crypto(pass) {
	const passArr = pass.split(''); //раскладываем символы пароля как объекты массива
	const passArrSlice = passArr.slice(0, 3); // отрезаем кусок пароля с 1 по 3 символ включительно
	const passArrSplice = passArr.splice(3); // забираем остаток пароля в отдельную переменную с 4 символа
	const cryptoPass = passArrSplice.concat(passArrSlice); // Соединяем в обратном порядке 2 части пароля
	cryptoPass.reverse(); // делаем реверс криптопароля
	const cryptoPassStr = cryptoPass.join(''); // соединяем массив обратно в строку
	return cryptoPassStr; // возвращаем зашифрованный пароль в формате строки из функции
};

const cryptoPassStr = crypto(passInput);


function check(cryptoPass, secondPass) {
	const cryptoPassArr = cryptoPass.split(''); // делаем из строки массив
	cryptoPassArr.reverse(); // делаем реверс
	const origCrPass = cryptoPassArr; // Кладем реверс в отдельную переменную
	const passArrSplice = cryptoPassArr.splice(0, cryptoPassArr.length-3);
	const passArrSlice = origCrPass.slice(0, 3); 
	const decryptoPass = passArrSlice.concat(passArrSplice); 
	const decryptoStr = decryptoPass.join('');
	decryptoStr === secondPass ? console.log(true) : console.log(false);
}


let passCheckInput;
passCheckInput = prompt('Введите второй пароль для сравнения');


crypto(passInput);
check(cryptoPassStr, passCheckInput);