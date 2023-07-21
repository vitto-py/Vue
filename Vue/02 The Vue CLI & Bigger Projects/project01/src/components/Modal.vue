<template>
    <div class="backdrop">
        <div class="modal" >
            <h1>Title H1</h1>
            <p>Modal Content</p>
        </div>
    </div>
</template>

<style>
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