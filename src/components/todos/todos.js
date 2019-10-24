import TodoItem from '../todo/todoItem.vue';
import TodoForm from '../todo-form/todoForm.vue';

export default {
  components: { TodoItem, TodoForm },
  data () {
    return {
      visibility: 'all',
      isModalVisible: false
    };
  },

  computed: {
    todos () {
      return this.$store.state.todos;
    }
  },

  methods: {
    addTodo (e) {
      const title = e.target.value;
      if (title.trim()) {
        const addObj = {
          title: title,
          description: '',
          todoDate: '',
          priorityLevel: '',
          comments: []
        };
        this.$store.dispatch('addTodo', addObj);
      }
      e.target.value = '';
    },
    showForm () {
      this.isModalVisible = true;
    },
    closeForm () {
      this.isModalVisible = false;
    }
  }
};
