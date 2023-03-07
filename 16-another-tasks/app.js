'use strict';

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

const newTask = {
    tasks: [
        {
            id: 1,
            name: 'test',
            desciption: 'описание',
            order: 0,
        },
    ],
};

const addTaskFunc = toDoList.addTask;
addTaskFunc.call(newTask, 'newTask', 10);

console.log(newTask.tasks);
