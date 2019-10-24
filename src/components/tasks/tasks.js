import TaskItem from '../task/task.vue';
import TaskForm from '../task-form/taskForm.vue';

export default {
  name: 'Tasks',
  components: { TaskItem, TaskForm },
  data () {
    return {
      isModalVisible: false
    };
  },

  computed: {
    tasks () {
      return this.$store.state.tasks;
    }
  },

  methods: {
    addTask (e) {
      const title = e.target.value;
      if (title.trim()) {
        const addObj = {
          title: title,
          description: '',
          todoDate: '',
          priorityLevel: '',
          comments: []
        };
        this.$store.dispatch('addTask', addObj);
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
