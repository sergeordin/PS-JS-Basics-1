'use strict';
/*
Написать объект ToDoList, который хранит в себе задачи {}, и имеет методы:
- Добавить задачу
- Удалить задачу по ID
- Обновить имя или приоритет по ID
- Отсортировать задачи по приоритету
*/

const toDoList = {
    title: 'Помыть посуду',
    id: 1,
    priority: 1,
    tasks: [],
    addTask: function () {
        res = this.tasks.push(this.title);
        return res;
    },
};

console.log(toDoList.addTask());
