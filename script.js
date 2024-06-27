const { createApp } = Vue

  createApp({
    data() {
      return {

        // Assegnare email array vuota per email generate.
        emails: []
      }
    },

    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(email => {
                    const arrayMail = email.data.response;
                    this.emails.email.push(arrayMail)
                })
        }
            
    }

  }).mount('#app')