'use strict';
/*
Написать объект ToDoList, который хранит в себе задачи {}, и имеет методы:
- Добавить задачу
- Удалить задачу по ID
- Обновить имя или приоритет по ID
- Отсортировать задачи по приоритету
*/

const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        },
    ],
    addTask(title, priority) {
        this.tasks.push({
            title,
            id: this.tasks.length + 1,
            priority,
        });
    },
    deleteTask(id) {
        let index = this.tasks.findIndex((el) => el.id == id);
        this.tasks.splice(index, 1);
    },

    updateTask(id, title, priority) {
        let item = this.tasks.find((x) => x.id === id);
        item.title = title || item.title;
        item.priority = priority || item.priority;
    },
    sortTask() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    },
};

toDoList.addTask('task 2', 5);
toDoList.addTask('task 3', 3);
toDoList.addTask('task 4', 7);
// console.log(toDoList.tasks);
// toDoList.deleteTask(2);
// console.log(toDoList.tasks);
toDoList.updateTask(1, 'task 1', 10);
console.log(toDoList.tasks);
// toDoList.sortTask();
// console.log(toDoList.tasks);
