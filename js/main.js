/**
 *  Descrizione:
    Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 *  Bonus:
    Aggiungere alla pagina un’immagine, presa anch’essa da un data, magari volendo sperimentare anche prendendola da un input.
 */

// Mi creo una nuova istanza dell oggetto 'Vue'
const app = new Vue({
    el: '#app',
    data: {
        message: '',
        outputText: 'Questa è la prova di un titolo in Vue.',
        image: {
            name: 'Vue logo',
            source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png'
        }
    }
});