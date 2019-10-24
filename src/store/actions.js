import { getRandomInt } from '../utils/number';

export default {
  addTask ({ commit }, { title, description, todoDate, priorityLevel, comments }) {
    const id = getRandomInt(1, 10000);
    commit('addTask', {
      id,
      title,
      description,
      todoDate,
      priorityLevel,
      comments,
      done: false
    });
  },
  removeTask ({ commit }, task) {
    commit('removeTask', task);
  },
  editTask ({ commit }, { task, id, title, description, todoDate, priorityLevel }) {
    commit('editTask', { task, id: id,
      title: title,
      description: description,
      todoDate: todoDate,
      priorityLevel: priorityLevel });
  },
  addComment ({ commit }, { taskId, author, comment, commentDate }) {
    commit('addComment', {
      taskId,
      author,
      comment,
      commentDate
    });
  }
};
