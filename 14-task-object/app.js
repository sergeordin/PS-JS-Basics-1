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
    addTask(task) {
        if (typeof task !== 'object') {
            return;
        }
        this.tasks.push(task);
    },
    deleteTask(id) {
        let index = this.tasks.findIndex((el) => el.id == id);
        this.tasks.splice(index, 1);
    },

    updateTask(id, field, value) {
        const index = this.tasks.findIndex((el) => el.id === id);
        if (index !== -1) {
            const task = this.tasks[index];
            task[field] = value;
        }
    },
    sortTask() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    },
};

toDoList.addTask({
    title: 'Выкинуть мусор',
    id: 2,
    priority: 2,
});
toDoList.addTask({
    title: 'Task 2',
    id: 3,
    priority: 4,
});
toDoList.addTask({
    title: 'Task 3',
    id: 4,
    priority: 6,
});
toDoList.addTask(2); // не будет добавлено, потому что не объект

toDoList.updateTask(1, 'title', 'task 1');
console.log(toDoList.tasks);
toDoList.sortTask();
