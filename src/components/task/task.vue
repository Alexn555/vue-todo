<template>
  <li class="task">
	<div class="view">
      <span class="task-title" v-text="task.title" @dblclick="showForm"></span>
        <button class="task-item-edit" @click="showForm">Edit</button>
        <button class="task-item-remove" @click="removeTask(task)">Remove</button>
        <button class="task-item-remove" @click="toggleComments(task)">Comments</button>
    </div>

     <TaskForm v-show="isModalVisible"
                modal-type="edit" v-bind:form-object="task" @close="closeForm"/>

     <Comments v-show="isCommentsVisible" v-bind:task-item="task"/>

  </li>

</template>

<style lang="scss" src="./task.scss"></style>
<script lang="js" src="./task.js"></script>
