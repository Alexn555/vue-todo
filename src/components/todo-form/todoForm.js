import { mapActions } from 'vuex';
import MaskedInput from 'vue-masked-input';

export default {
  name: 'modal',
  props: {
    modalType: String,
    formObject: Object
  },
  components: {
    MaskedInput
  },
  data: function () {
    return {
      formTitle: this.modalType === 'add' ? 'Add todo' : 'Edit todo',
      title: this.setValue('title'),
      description: this.setValue('description'),
      todoDate: this.setValue('todoDate'),
      priorityLevel: this.setValue('priorityLevel')
    };
  },
  methods: {
    ...mapActions([
      'editTodo'
    ]),
    setValue (key) {
      return this.formObject && this.formObject[key] !== '' ? this.formObject[key] : '';
    },
    close () {
      this.$emit('close');
    },
    saveTodo: function () {
      if (this.isValidForm(this.title, this.description)) {
        const methodType = this.modalType === 'add' ? 'addTodo' : 'editTodo';

        if (this.modalType === 'edit') {
          const todo = this.formObject;
          const id = todo.id;
          const title = this.title;
          const description = this.description;
          const todoDate = this.todoDate;
          const priorityLevel = this.priorityLevel;
          this.editTodo({ todo, id, title, description, todoDate, priorityLevel });
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
      }
    },
    isValidForm: function (title, description) {
      if (!title || !description) { // only obligatory values
        return false;
      }
      return true;
    }
  }
};
