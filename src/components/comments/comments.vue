<template>

 <div class="comments_wrapper">

      <section>
          <ul class="comments"
              v-for="(comment, index) in todoItem.comments"
              :key="index">
              <li>
                  <div class="comment-header">
                    comment # {{index + 1}}
                      <span class="comment-author">{{ comment.author}}</span> |
                      <span class="comment-date">{{ comment.commentDate }}</span>
                  </div>
                  <div class="comment-body">
                     " {{ comment.comment }} "
                  </div>
              </li>
          </ul>
      </section>

  <hr />

  <section>
      <slot name="comment" class="form-body">
          <ul>
              <li class="form-label">
                  <span>Author</span>
                  <input v-model="commentAuthor" class="form-control"/>
              </li>
              <li class="form-label">
                  <span>Comment</span>
                  <textarea v-model="commentBody" rows="1" class="form-control"/>
              </li>
          </ul>
          <button type="button" class="btn-green" aria-label="Comment"
                  @click="onAddComment()">
              Add Comment
          </button>
      </slot>
  </section>

 </div>
</template>

<style lang="scss" src="./comments.scss"></style>
<script lang="js" src="./comments.js"></script>
