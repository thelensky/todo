<template>
  <li class="page-item" :class="{active: isActive}">
    <button class="page-link" @click="setActivePage(page)">{{page +1}}</button>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["page"],
  computed: {
    ...mapGetters(["getActivePage"]),
    isActive() {
      return this.page === this.getActivePage;
    }
  },
  methods: {
    ...mapMutations(["setActivePage"])
  }
};
</script>

<style>
</style>