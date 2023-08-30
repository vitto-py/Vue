
<template>
  <header>
    <h1>Some Text</h1>
  </header>  
</template>

<script>
/* vamos a enviar este Component a App.vue */
/* Um componente contiene una pieza terminada: html, JS y CSS */

/* Tenes que exportarlo como ves aqui */
export default {
  name: 'Header'
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
