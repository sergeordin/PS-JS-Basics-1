/*
Напишите функцию, которая принимает:
- Массив чисел
- Функцию удалению элементов
И возвращает отфильтрованный массив. 
При этом функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить
*/

const numArray = [1, 3, 5, 2, 4, 6, 7, 9, 8, 0, -2, -5, -9]; //Исходный рандомный массив

function filter(arr, fn) { //принимаем массив и функцию 
	for (let i = 0; i < arr.length; i++) { //проходим по массиву циклом и применяем на каждом элементе функцию
		const res = fn(arr[i]);
		if (res) {
			//Оставляем число 
		} else {
			//Удаляем
		}
	}
	return newArr; //массив в котором удалены элементы которые попадают под необходимость удаления
}

function del(el) { //Принимает элемент
	if (el > 5) { // Вводим рандомное правило (например все что больше 5 - удалить)
		return true;
	}
	return false;
}

console.log(filter(numArray, del(3)));













// const res = [];
// for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] > 5) {
// 	  res.push(numArray[i]);
//   }
// }
// console.log(res);
















// // Функция удаления элементов
// const delArrItems = (item) => {
//   numArray.filter(num => {
//     if(num !== item) {
//       return console.log(true)
//     }
//     console.log(false)
//   })
// }

// delArrItems(2)
























// function deleteElements(arr) {
// 	const rule = 5; // Переменная правила удаления. Если значение больше этой переменной - удалять
// 	for (let i = 0; i < arr.length; i++) { 
// 		if (arr[i] > rule) { 
// 			arr.splice(i, 1); 
// 			i--;
// 	  }
// 	}
// 	return arr;
// 	}

// function filterArr(arr, fn) {
// 	for (let i = 0; i < arr.length; i++) { 
// 		fn(arr[i]);
// 	}
//   return arr; 
// };

// console.log(filterArr(numArray, deleteElements))
