<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h3>PawaTask</h3>

      <div class="add-todo">
        <label>Title</label>
         <input class="new-todo"
               autofocus
               autocomplete="off"
               placeholder="Task, press enter"
               @keyup.enter="addTodo">
      </div>

      <button type="button" class="btn-new-todo" @click="showForm">Add task</button>

    </header>

    <!-- main section -->
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
        />
      </ul>
    </section>

    <TodoForm v-show="isModalVisible" modal-type="add" v-bind:form-object="{}" @close="closeForm"/>

  </section>
</template>

<style lang="scss" src="./todos.scss"></style>
<script lang="js" src="./todos.js"></script>
