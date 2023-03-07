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
        let append = {
            title: title,
            id: this.tasks.length + 1,
            priority: priority,
        };
        this.tasks = [...this.tasks, append];
        return `Задача ${append.title} добавлена`;
    },
    deleteTask(id) {
        let index = this.tasks.map((x) => x.id).indexOf(id);
        this.tasks.splice(index, 1);
        return `Задача c ID ${id} удалена`;
    },
    updateTask(id, title, priority) {
        let item = this.tasks.find((x) => x.id === id);
        item.title = title || item.title;
        item.priority = priority || item.priority;
        return `Задача c ID ${id} обновлена`;
    },
    sortTask() {
        this.tasks.sort((a, b) => a.priority - b.priority);
        return `Задачи отсортированы по приоритету`;
    },
};

console.log(toDoList.addTask('task 2', 5));
console.log(toDoList.addTask('task 3', 3));
console.log(toDoList.addTask('task 4', 7));
console.log(toDoList.tasks);
console.log(toDoList.deleteTask(2));
console.log(toDoList.tasks);
console.log(toDoList.updateTask(1, 'task 1', 9));
console.log(toDoList.tasks);
console.log(toDoList.sortTask());
console.log(toDoList.tasks);
