<template>
  <div id="app" class="container">
    <div class="row bg-silver font-weight-bold rounded my-3 mx-1 mb-5">
      <h2 class="ml-2 col-sm-12">Задачи</h2>
      <add-todo></add-todo>
      <todo-list></todo-list>
    </div>
    <pagination></pagination>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Pagination from "./components/Pagination";

export default {
  name: "app",
  mounted() {
    this.$store.dispatch("fetchTodos");
  },
  components: { TodoList, AddTodo, Pagination }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

.bg-silver {
  background-color: silver;
}
.todo-list {
  list-style: none;
}
.icon {
  $size-icon: 16px;
  width: $size-icon;
  height: auto;
}
</style>

