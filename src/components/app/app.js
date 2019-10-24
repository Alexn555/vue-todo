import { mapActions } from 'vuex';
import TodoItem from '../todo/todoItem.vue';
import TodoForm from '../todo-form/todoForm.vue';

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
};

export default {
  components: { TodoItem, TodoForm },
  data () {
    return {
      visibility: 'all',
      filters: filters,
      isModalVisible: false
    };
  },

  computed: {
    todos () {
      return this.$store.state.todos;
    },
    filteredTodos () {
      return filters[this.visibility](this.todos);
    }
  },

  methods: {
    ...mapActions([
      'toggleAll',
      'clearCompleted'
    ]),

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

    showModal () {
      this.isModalVisible = true;
    },
    closeModal () {
      this.isModalVisible = false;
    }

  },

  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
};
