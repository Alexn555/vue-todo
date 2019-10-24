import { getRandomInt } from '../utils/number';

export default {
  addTodo ({ commit }, { title, description, todoDate, priorityLevel, comments }) {
    const id = getRandomInt(1, 10000);
    commit('addTodo', {
      id,
      title,
      description,
      todoDate,
      priorityLevel,
      comments,
      done: false
    });
  },
  removeTodo ({ commit }, todo) {
    commit('removeTodo', todo);
  },
  editTodo ({ commit }, { todo, id, title, description, todoDate, priorityLevel }) {
    commit('editTodo', { todo, id: id,
      title: title,
      description: description,
      todoDate: todoDate,
      priorityLevel: priorityLevel });
  },
  addComment ({ commit }, { todoId, author, comment, commentDate }) {
    commit('addComment', {
      todoId,
      author,
      comment,
      commentDate
    });
  }
};
