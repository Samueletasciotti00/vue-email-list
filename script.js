const { createApp } = Vue

  createApp({
    data() {
      return {

        // Assegnare email array vuota per email generate.
        emails: []
      }
    },

    // Funzioni
    methods: {
        generaMail(){
            
            //Ciclo per mail
            for (let i = 0; i < 100; i++) {
                fetch('https://flynn.boolean.careers/exercises/api/random/mail')
                  .then(response => response.json())
                  .then(data => {
                    this.emails.push(data.response + i);
                  });
              }
        }
    },
    mounted(){
        this.generaMail();
    }

  }).mount('#app')