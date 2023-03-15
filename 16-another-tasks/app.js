'use strict';

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
addTaskFunc.call(newTask, {
    id: 2,
    name: 'tes2',
    desciption: 'описание2',
    order: 0,
});

console.log(newTask.tasks);
