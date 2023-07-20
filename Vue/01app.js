console.log("new file")

const app = Vue.createApp({
    // data, function
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'I am the template',
            author: 'loquita',
            age: 34
        }
    },
    methods: {
        changeAutor() {
            this.author = 'Dovstoyesky'
        }
    } 
})
app.mount('#app')