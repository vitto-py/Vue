<template>
  <h1>{{title}}</h1>
  <Modal_M header="Sending this message to Modal" ninga="I am a second props"
  :aComplexOne = "['texto', 4]"/>
  <input type="text" ref="imALink">
  <button @click="handleClick">send</button>
   
</template>

<script>

//import from the folder component
import Modal_M from "./components/Modal.vue"

export default {
  name: 'App', //name of the component
  components: {Modal_M}, //to use Modal
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
