<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
	<div class="view">
      <span class="todo-title" v-text="todo.title" @dblclick="showModal"></span>
        <button class="todo-item-edit" @click="showModal">Edit</button>
        <button class="todo-item-remove" @click="removeTodo(todo)">Remove</button>
        <button class="todo-item-remove" @click="toggleComments(todo)">Comments</button>
    </div>

     <TodoForm v-show="isModalVisible"
                modal-type="edit" v-bind:form-object="todo" @close="closeModal"/>

     <Comments v-show="isCommentsVisible" v-bind:todo-item="todo"/>

  </li>

</template>

<style lang="scss" src="./todo.scss"></style>
<script lang="js" src="./todoItem.js"></script>
