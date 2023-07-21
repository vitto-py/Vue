console.log("new file")

const app = Vue.createApp({
    data() {
        return {
            url:'www.google.com',
            showBooks: true,
            books:  [
                {title: 'I am the template',author: 'VF', image: 'assets/1.jpg', isFav: true},
                {title: 'Relacionismo', author: 'desespero', image: 'assets/2.jpeg', isFav: false},
                {title: 'Conexionismo', author: 'Sabina', image: 'assets/3.jpeg', isFav: true},

            ]
            
        }
    },
    methods: {
        toggleShowBooks(x) {
            //change the propertie isFav if dblclick
            console.log('toggleShowBooks');
            x.isFav = !x.isFav;
        }
    }, 
    computed: {
        computedArray() {
            return this.books.filter( (x) => x.isFav )
        }
    }
})
app.mount('#app')