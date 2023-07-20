console.log("new file")

const app = Vue.createApp({

    data() {
        return {
            url:'www.google.com',
            showBooks: true,
            books:  [
                {title: 'I am the template',author: 'VF', image: 'assets/1.jpg'},
                {title: 'Relacionismo', author: 'desespero', image: 'assets/2.jpeg'},
                {title: 'Conexionismo', author: 'Sabina', image: 'assets/3.jpeg'},

            ]
            
        }
    },
    methods: {
        toggleShowBooks() {
            //this.author = 'Dovstoyesky'
            this.showBooks = !this.showBooks
        },
       
        
        
    } 
})
app.mount('#app')