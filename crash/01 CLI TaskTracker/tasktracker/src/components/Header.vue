
<template>
  <header>
    <h1>{{title}}</h1>
    <Buttom text = "Add Task" color="green"/>
  </header>  
</template>

<script>
import Buttom from './Buttom.vue'

/* vamos a enviar este Component a App.vue */
/* Um componente contiene una pieza terminada: html, JS y CSS */

/* Tenes que exportarlo como ves aqui */
export default {
  name: 'Header', 
  components:{
    Buttom
  } ,
  props: {
    title: String,
    default: "Some Text"
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
