import { mapActions } from 'vuex';
import { createDate } from '../../utils/date';

export default {
  name: 'Comments',
  props: {
    todoItem: Object
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
      const { todoItem } = this;
      if (todoItem && todoItem.id) {
        const commentObj = {
          todoId: this.todoItem.id,
          author: this.commentAuthor,
          comment: this.commentBody,
          commentDate: createDate()
        };
        this.addComment(commentObj);
      }
    }

  }

};
