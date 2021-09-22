const Person = {
  data() {
    return {
      "person": {},
    }
  },
  created() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then((parsedJson) => {
        console.log(parsedJson);
        this.person = parsedJson.results[0]
        this.picture = this.person.picture.large
        this.address = this.person.location.street.number + this.person.location.street.name
        console.log("C");
      })
      .catch(err => {
        console.error(err)
      })

    console.log("B");
  },
    computed: {
        pretty() {
          return dayjs(this.person.dob.date)
          .format('D MMM YYYY');
  
        }
      },
}

Vue.createApp(Person).mount('#personApp');