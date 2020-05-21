<template>
  <li
      class="col-sm-12 bg-white my-1 py-1 px-1 rounded"
      :class="{'text-success': todo.complite}"
  >
    <div class="d-flex align-items-center">
      <span>
        <span class="mr-1">{{index}})</span>
        {{todo.task}}
      </span>
      <button class="btn ml-auto">
        <img class="icon" @click="edit" :src="pen" />
      </button>
    </div>
  </li>
</template>

<script>
  import pen from "../assets/pen-solid.svg";
  import cross from "../assets/times-solid.svg";
  import check from "../assets/check-solid.svg";

  export default {
    name: "todo-item",
    props: ["todo", "index"],
    data() {
      return {pen, cross, check, change: false};
    },
    methods: {
      edit() {
        this.$router.push({path:`/record/${this.todo.id}`})
      }
    }
  };
</script>
