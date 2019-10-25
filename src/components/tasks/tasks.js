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
      let title = e.target.value;
      title = title.trim();
      if (title.length > 3 && title.length < 50) {
        const addObj = {
          title: title,
          description: '',
          todoDate: '',
          priorityLevel: '',
          comments: []
        };
        this.$store.dispatch('addTask', addObj);
      } else {
        alert('Title must be between 3 and 50 chars');
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
