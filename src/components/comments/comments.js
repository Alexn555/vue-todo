import { mapActions } from 'vuex';
import { createDate } from '../../utils/date';
import { isInputLengthCorrect } from '../../utils/validator';

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
        let error = isInputLengthCorrect(this.commentAuthor, 'Author', 2, 30);
        if (error === '') {
          error = isInputLengthCorrect(this.commentBody, 'Comment body', 2, 100);
        }
        if (error === '') {
          const commentObj = {
            taskId: this.taskItem.id,
            author: this.commentAuthor,
            comment: this.commentBody,
            commentDate: createDate()
          };
          this.addComment(commentObj);
          this.clearFields();
        } else {
          alert('Comment error ' + error);
        }
      }
    },
    clearFields () {
      this.commentAuthor = '';
      this.commentBody = '';
      this.commentDate = '';
    }
  }

};
