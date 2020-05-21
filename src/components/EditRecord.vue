<template>
    <HandlerTodo v-bind:todo="record" />
</template>


<script>
  import {mapGetters} from 'vuex'
  import HandlerTodo from "./HandlerTodo";

  export default {
    name: 'edit-record',
    components: {HandlerTodo},
    methods: {

    },
    computed: {
      ...mapGetters(['getTodo']),
      record() {
        return this.getTodo(this.$route.params.id)
      }
    }
  }
</script>