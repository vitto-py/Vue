let url_randomUser = "https://randomuser.me/api/";

fetch(url_randomUser)
  .then((response) => response.json())
  .then((json) => console.log(json.results));

const App = Vue.createApp({
  //HTML CODE
  //template: '<h1>Name: {{firstName}}</h1>',

  data() {
    return {
      firstName: "Vitto",
      lastName: "Fiorito",
      gender: "male",
      email: "vitto@fiorito.com",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      let response = await fetch(url_randomUser);
      let json  = await response.json();
      //console.log(json);
      this.firstName = json.results[0].name.first;
      this.lastName = json.results[0].name.last;
      this.gender = json.results[0].gender;
      this.email = json.results[0].email;
      this.picture = json.results[0].picture.large;
    },
  },
});

App.mount("#app");


