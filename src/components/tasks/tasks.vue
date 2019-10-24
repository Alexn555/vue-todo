<template>
  <section class="taskapp">
    <!-- header -->
    <header class="header">
      <h3>PawaTask</h3>

      <div class="add-task">
        <label>Title</label>
         <input class="new-task"
               autofocus
               autocomplete="off"
               placeholder="Task, press enter"
               @keyup.enter="addTask">
      </div>

      <button type="button" class="btn-new-task" @click="showForm">Add task</button>

    </header>

    <!-- main section -->
    <section class="main" v-show="tasks.length">
      <ul class="task-list">
        <TaskItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
        />
      </ul>
    </section>

    <TaskForm v-show="isModalVisible" modal-type="add" v-bind:form-object="{}" @close="closeForm"/>

  </section>
</template>

<style lang="scss" src="./tasks.scss"></style>
<script lang="js" src="./tasks.js"></script>
