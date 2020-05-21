<template>
  <div class="col mb-3">
    <h4>Задачи</h4>
    <ul class="todo-list row m-0 p-0">
      <li
        is="todo-item"
        v-bind:todo="todo"
        v-bind:index="todo.index"
        v-for="(todo) in listTodos"
        :key="todo.id"
      ></li>

    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItim";
import { mapGetters } from "vuex";
export default {
  name: "todo-list",
  components: { TodoItem },
  computed: {
    ...mapGetters(["listTodos"])
  }
};
</script>

<style>
</style>