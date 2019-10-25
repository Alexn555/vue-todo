import { mapActions } from 'vuex';
import MaskedInput from 'vue-masked-input';
import { isInputLengthCorrect, isCorrectDate } from '../../utils/validator';

export default {
  name: 'TaskForm',
  props: {
    modalType: String,
    formObject: Object
  },
  components: {
    MaskedInput
  },
  data: function () {
    return {
      formTitle: this.modalType === 'add' ? 'Add task' : 'Edit task',
      title: this.setValue('title'),
      description: this.setValue('description'),
      todoDate: this.setValue('todoDate'),
      priorityLevel: this.setValue('priorityLevel')
    };
  },
  methods: {
    ...mapActions([
      'editTask'
    ]),
    setValue (key) {
      return this.formObject && this.formObject[key] !== '' ? this.formObject[key] : '';
    },
    close () {
      this.$emit('close');
    },
    saveTask: function () {
      const error = this.isValidForm(this.title, this.description, this.todoDate);
      if (error === '') {
        const methodType = this.modalType === 'add' ? 'addTask' : 'editTask';
        if (this.modalType === 'edit') {
          const task = this.formObject;
          const id = task.id;
          const title = this.title;
          const description = this.description;
          const todoDate = this.todoDate;
          const priorityLevel = this.priorityLevel;
          this.editTask({ task, id, title, description, todoDate, priorityLevel });
        } else {
          const addObj = {
            title: this.title,
            description: this.description,
            todoDate: this.todoDate,
            priorityLevel: this.priorityLevel,
            comments: []
          };
          this.$store.dispatch(methodType, addObj);
        }
        this.close();
      } else {
        alert('Error ' + error);
      }
    },
    isValidForm: function (title, description, todoDate) {
      let error = '';
      if (!title || !description) { // only obligatory values
        error = 'No title or description set!';
      }
      if (error === '') {
        error = isInputLengthCorrect(title, 'Title', 3, 50);
      }
      if (error === '') {
        error = isInputLengthCorrect(description, 'Description', 3, 100);
      }
      if (error === '') {
        error = isCorrectDate(todoDate);
      }
      return error;
    }
  }
};
