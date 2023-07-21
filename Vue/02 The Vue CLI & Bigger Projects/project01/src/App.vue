<template>
  <h1>{{title}}</h1>
   <input type="text" ref="imALink">
   <button @click="handleClick">send</button>
</template>

<script>

export default {
  name: 'App', //name of the component
  data() {
    return {
      title: 'my first vue App'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.imALink) //look how it connects ref
      this.$refs.imALink.classList.add('active') //inspect the HTML to see how the class is added
      this.$refs.imALink.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #2c3e50;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
