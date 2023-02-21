/*
Дан массив чисел arr = [1, 40, -5, 10, 0]
Написать функцию, которая сортирует данный массив при помощи циклов
-Нужно использовать 2 цикла, вложенных друг в друга
-Нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function sortArr(arr) {
	let temp = [];
	for (let i=0; i<arr.length; i++)
    {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j+1])
                {
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp; 
                } 
		}    
	}
	return arr
}

console.log(sortArr(arr));