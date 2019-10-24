<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h3>todos</h3>

      <div class="add-todo">
        <label>Title</label>
         <input class="new-todo"
               autofocus
               autocomplete="off"
               placeholder="Task, press enter"
               @keyup.enter="addTodo">
      </div>

      <button type="button" class="btn-new-todo" @click="showModal">Add todo</button>

    </header>

    <!-- main section -->
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <TodoItem
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :todo="todo"
        />
      </ul>
    </section>

    <TodoForm v-show="isModalVisible" modal-type="add" v-bind:form-object="{}" @close="closeModal"/>

  </section>
</template>

<style lang="scss" src="./app.scss"></style>
<script lang="js" src="./app.js"></script>
