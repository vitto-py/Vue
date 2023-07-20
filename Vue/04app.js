console.log("new file")

const app = Vue.createApp({

    data() {
        return {
            url:'www.google.com',
            showBooks: true,
            books:  [
                {title: 'I am the template',author: 'VF'},
                {title: 'Relacionismo', author: 'desespero'},
                {title: 'Conexionismo', author: 'Sabina'},

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