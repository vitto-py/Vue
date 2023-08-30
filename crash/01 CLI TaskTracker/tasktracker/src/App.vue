<template>
  <div class="container">
    <Header title="Task Tracker" />
    <Tasker :tasks="taskList" />
  </div>
</template>

<script>
/* Aqui llamas a los componentes pero para usarlos
tenes que declararlos en export default > components > Header */
import Header from "./components/Header.vue";
import Tasker from "./components/Tasker.vue";

export default {
  name: "App",
  /* Aqui tambien */
  components: {
    Header,
    Tasker
  },
  //create the variable
  data() {
    return {
      taskList: [],
    };
  },
  //fill in the variable
  created() {
    this.taskList = [{ text: "Dentist" }, { text: "Football" }];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
