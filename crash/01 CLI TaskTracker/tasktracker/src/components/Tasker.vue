<template>
  <div v-for="x in tasks">
    <h3>{{ x.text }}</h3>
  </div>
</template>

<script>
  export default {
    name: "Tasker",
    props: {
      tasks: Array,
    },
  };
</script>
