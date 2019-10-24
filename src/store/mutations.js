export const STORAGE_KEY = 'todos-vuejs';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

export const mutations = {
  addTodo (state, todo) {
    state.todos.push(todo);
  },

  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo (state, { todo,
    id = todo.id,
    title = todo.title,
    description = todo.description,
    todoDate = todo.todoDate,
    priorityLevel = todo.priorityLevel
  }) {
    todo.title = title;
    todo.description = description;
    todo.todoDate = todoDate;
    todo.priorityLevel = priorityLevel;
    // save in storage
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i].id === id) {
        state.todos[i].title = title;
        state.todos[i].description = description;
        state.todos[i].todoDate = todoDate;
        state.todos[i].priorityLevel = priorityLevel;
      }
    }
  },

  addComment (state, comment) {
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i].id === comment.todoId) {
        state.todos[i].comments.push(comment);
      }
    }
  }
};
