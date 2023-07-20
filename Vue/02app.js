console.log("new file")

const app = Vue.createApp({
    // data, function
    //template: '<h2>I am the template</h2>'


    data() {
        return {
            showBooks: true,
            title: 'I am the template',
            author: 'loquita',
            age: 34
        }
    },
    methods: {
        toggleShowBooks() {
            //this.author = 'Dovstoyesky'
            this.showBooks = !this.showBooks
        }
    } 
})
app.mount('#app')