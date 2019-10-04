<template>
  <li
    class="col-sm-12 bg-white my-1 py-1 px-1 rounded"
    @click="complitionChange(todo.id)"
    :class="{'text-success': todo.complite}"
  >
    <div v-if="!change" class="d-flex align-items-center">
      <span>
        <span class="mr-1">{{index + 1}})</span>
        {{innerTodo.task}}
      </span>
      <button class="btn ml-auto">
        <img class="icon" @click="edit" :src="pen" alt />
      </button>
    </div>
    <div v-else class="d-flex align-items-center">
      <input v-model="innerTodo.task" class="todo-input" type="text" />
      <button class="btn ml-auto">
        <img class="icon" @click="remove" :src="cross" alt />
      </button>
      <button class="btn ml-auto">
        <img class="icon" @click="save" :src="check" alt />
      </button>
    </div>
  </li>
</template>

<script>
import pen from "../assets/pen-solid.svg";
import cross from "../assets/times-solid.svg";
import check from "../assets/check-solid.svg";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "todo-item",
  props: ["todo", "index"],
  data() {
    return { pen, cross, check, change: false };
  },
  computed: {
    innerTodo: {
      get() {
        return this.todo;
      },
      set(newValue) {
        todo.tesk = newValue;
      }
    }
  },
  methods: {
    ...mapMutations(["deleteTodo", "addTodo", "changeComlitionTodo"]),
    ...mapActions(["saveToStorage"]),
    edit() {
      this.change = !this.change;
    },
    save() {
      const todo = { ...this.innerTodo };
      this.deleteTodo(this.innerTodo.id);
      this.addTodo(todo);
      this.change = !this.change;
      this.saveToStorage();
    },
    remove() {
      this.deleteTodo(this.innerTodo.id);
      this.saveToStorage();
    },
    complitionChange(id) {
      this.changeComlitionTodo(id);
      this.saveToStorage();
    }
  }
};
</script>

<style>
.todo-input {
  border: none;
  flex-grow: 2;
}
</style>>
