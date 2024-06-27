const { createApp } = Vue

  createApp({
    data() {
      return {

        // Assegnare email array vuota per email generate.
        emails: []
      }
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    this.emails.push(response.data.response);
                })
                .catch(error => {
                    console.error('Errore durante la generazione delle email:', error);
                });
        }
    }
}).mount('#app')