<template>
  <div class="form-group col-sm-12 mt-4">
    <textarea
        class="form-control mb-2"
        placeholder="Enter a title for this card..."
        rows="3"
        v-model="text"
    ></textarea>
    <div class="d-flex flex-row">
      <button v-if="todo !== null" class="btn btn-primary text-capitalize"
              @click="updateCard">Update card
      </button>
      <button v-else class="btn btn-success text-capitalize"
              @click="addCard">Add card
      </button>

      <button v-if="todo !== null" class="btn btn-danger text-capitalize mx-2"
              @click="deleteCard">Delete card
      </button>
      <button v-if="todo !== null"
              class="btn  text-capitalize mx-2"
              v-bind:class="{ 'btn-outline-success' : !todo.complite ,
              'btn-success' : todo.complite }"
              @click="complete">Complete
      </button>
      <button class="btn" @click="clear">
        <img class="icon" :src="cross" alt/>
      </button>
      <button v-if="todo !== null"
              class="btn btn-primary text-capitalize ml-auto"
              @click="goBack">Go back
      </button>
    </div>
  </div>
</template>

<script>
  import cross from "../assets/times-solid.svg";
  import {mapActions, mapMutations} from "vuex";

  export default {
    props: {
      todo: {
        default: null
      }
    },
    data() {
      return {
        text: this.todo !== null ? this.todo.task : "",
        cross
      };
    },
    methods: {
      ...mapActions(["createRecord", 'deleteRecord', 'updateRecord']),
      ...mapMutations(['setActivePage']),
      addCard() {
        this.createRecord({
          task: this.text,
          complite: false,
          timestamp: new Date()
        }).then(() => {
          this.setActivePage(0);
        });

        this.text = "";
      },
      clear() {
        this.text = "";
      },
      deleteCard() {
        this.deleteRecord(this.todo).then(() => {
          this.setActivePage(0);
          this.goBack();
        });


      },
      updateCard() {
        this.updateRecord({...this.todo, task: this.text})
      },
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      complete() {
        this.updateRecord({...this.todo, complite: !this.todo.complite})
      }
    },
  };
</script>

<style>
</style>