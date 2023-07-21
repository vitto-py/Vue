console.log("new file")

const app = Vue.createApp({

    data() {
        return {
            showBooks: true,
            title: 'I am the template',
            author: 'loquita',
            age: 34,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            //this.author = 'Dovstoyesky'
            this.showBooks = !this.showBooks
        },
        handleEvents(e,n) { 
            console.log(n,e,e.type,'your mouse is over the rectangle');
        }, 
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
        
    } 
})
app.mount('#app')