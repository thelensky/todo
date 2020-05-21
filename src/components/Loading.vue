<template>
  <div v-bind:class=" {'d-flex': loading}">
    <div v-if="loading" class="spinner-border mx-auto" role="status">
      <span class="sr-only ">Loading...</span>
    </div>
    <div v-else>
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['loading']
  }
</script>