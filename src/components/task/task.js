import { mapActions } from 'vuex';
import TaskForm from '../task-form/taskForm.vue';
import Comments from '../comments/comments.vue';

export default {
  components: { TaskForm, Comments },
  name: 'TaskItem',
  props: ['task'],

  data () {
    return {
      isModalVisible: false,
      isCommentsVisible: false
    };
  },

  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus();
        });
      }
    }
  },

  methods: {
    ...mapActions([
      'removeTask'
    ]),

    doneEdit (e) {
      const title = e.target.value.trim();
      const { task } = this;
      if (!title) {
        this.removeTask(task);
      }
    },

    toggleComments () {
      this.isCommentsVisible = !this.isCommentsVisible;
    },
    showForm () {
      this.isModalVisible = true;
    },
    closeForm () {
      this.isModalVisible = false;
    }
  }

};
