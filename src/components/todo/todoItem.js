import { mapActions } from 'vuex';
import TodoForm from '../todo-form/todoForm.vue';
import Comments from '../comments/comments.vue';

export default {
  components: { TodoForm, Comments },
  name: 'Todo',
  props: ['todo'],

  data () {
    return {
      editing: false,
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
      'removeTodo'
    ]),

    doneEdit (e) {
      const title = e.target.value.trim();
      const { todo } = this;
      if (!title) {
        this.removeTodo(todo);
      } else if (this.editing) {
        this.editing = false;
      }
    },

    toggleComments () {
      this.isCommentsVisible = !this.isCommentsVisible;
    },
    showComments (item) {
      this.isCommentsVisible = true;
    },
    closeComments () {
      this.isCommentsVisible = false;
    },
    showModal () {
      this.isModalVisible = true;
    },
    closeModal () {
      this.isModalVisible = false;
    }
  }

};
