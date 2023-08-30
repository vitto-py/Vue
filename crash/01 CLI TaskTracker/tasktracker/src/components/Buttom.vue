<template>
  <button @click="onClick()" :style="{ background: color }" 
  class="btn">{{text}}</button>
</template>

<script>
export default {
  name: "Buttom",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("Aquiles");
    },
  },
};
</script>
