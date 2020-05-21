<template>
  <div id="app" class="container">
    <div class="row bg-silver font-weight-bold rounded my-3 mx-1 mb-5">
      <div class="my-2 col-sm-12">
        <Loading v-bind:loading="getLoading">
          <router-view/>
        </Loading>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from "./components/Loading";
  import {mapGetters} from 'vuex'

  export default {
    name: "app",
    mounted() {
      this.$store.dispatch("fetchTodos");
    },
    components: {Loading},
    computed: {...mapGetters(['getLoading'])}
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

