<template>
  <li class="page-item" :class="{active: isActive}">
    <router-link class="page-link"
                 :to="{path: `/record/page/${page + 1}`}">
      {{page +1}}
    </router-link>
  </li>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    props: ["page"],
    computed: {
      ...mapGetters(["getActivePage"]),
      isActive() {
        return this.page === this.getActivePage;
      }
    }
  };
</script>

<style>
</style>