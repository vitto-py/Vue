<template>
    <div class="backdrop">
        <div class="modal" >
            <h1>{{header}}</h1>
            <p>Modal Content</p>
        </div>
    </div>
</template>

<script>
//use of props: (receive a value from the code, save it as data)
export default {
    props: ['header'] // in the HTML must be a header="I am a text"
    //now is available in here {{header}}
}
</script>

<style scoped>
/* Now this styles apply this component 
go InspectQ and see the html, creates a new atributte*/
.modal {
    width: 400px;
    padding: 10px;
    margin: 100px  auto;
    background: gray;
    border-radius: 10px;
}

.backdrop {
    top:0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
h1 {
    color: aqua;
    border: none;
    padding: none;
}
</style>