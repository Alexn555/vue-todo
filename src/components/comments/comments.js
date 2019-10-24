import { mapActions } from 'vuex';
import { createDate } from '../../utils/date';

export default {
  name: 'Comments',
  props: {
    taskItem: Object
  },
  data () {
    return {
      commentAuthor: '',
      commentBody: '',
      commentDate: ''
    };
  },
  methods: {
    ...mapActions([
      'addComment'
    ]),

    onAddComment (e) {
      const { taskItem } = this;
      if (taskItem && taskItem.id) {
        const commentObj = {
          taskId: this.taskItem.id,
          author: this.commentAuthor,
          comment: this.commentBody,
          commentDate: createDate()
        };
        this.addComment(commentObj);
        this.clearFields();
      }
    },
    clearFields () {
      this.commentAuthor = '';
      this.commentBody = '';
      this.commentDate = '';
    }
  }

};
