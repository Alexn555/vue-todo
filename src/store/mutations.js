export const STORAGE_KEY = 'tasks-vuejs';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

export const mutations = {
  addTask (state, task) {
    state.tasks.push(task);
  },

  removeTask (state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  editTask (state, { task,
    id = task.id,
    title = task.title,
    description = task.description,
    todoDate = task.todoDate,
    priorityLevel = task.priorityLevel
  }) {
    task.title = title;
    task.description = description;
    task.todoDate = todoDate;
    task.priorityLevel = priorityLevel;
    // save in storage
    for (let i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].id === id) {
        state.tasks[i].title = title;
        state.tasks[i].description = description;
        state.tasks[i].todoDate = todoDate;
        state.tasks[i].priorityLevel = priorityLevel;
      }
    }
  },

  addComment (state, comment) {
    for (let i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].id === comment.taskId) {
        state.tasks[i].comments.push(comment);
      }
    }
  }
};
