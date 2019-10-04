<template>
  <div class="form-group col-sm-12">
    <textarea
      class="form-control mb-2"
      placeholder="Enter a title for this card..."
      rows="3"
      v-model="text"
    ></textarea>
    <button class="btn btn-success text-capitalize" @click="add">Add card</button>
    <button class="btn" @click="clear">
      <img class="icon" :src="cross" alt />
    </button>
  </div>
</template>

<script>
import cross from "../assets/times-solid.svg";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "add-todo",
  data() {
    return { text: "", cross };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    ...mapActions(["saveToStorage"]),
    add() {
      this.addTodo({
        id: Date.now(),
        task: this.text,
        complite: false
      });
      this.text = "";
      this.saveToStorage();
    },
    clear() {
      this.text = "";
    }
  }
};
</script>

<style>
</style>