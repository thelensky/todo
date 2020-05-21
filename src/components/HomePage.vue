<template>
  <div>
    <AddTodo/>
    <TodoList/>
    <Pagination/>
  </div>
</template>
<script>

  import AddTodo from "./HandlerTodo";
  import TodoList from "./TodoList";
  import Pagination from "./Pagination";

  export default {
    name: 'home-page',
    components: {AddTodo, TodoList, Pagination}
  }
</script>