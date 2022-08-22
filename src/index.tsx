import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model} from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-15 11:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
     /* todas as chamadas serão a partir desse endereço
     ou seja localhost:3000/api/ */

    this.get('/transactions', () => {
      return  this.schema.all('transaction')
        
          /* devolve um vetor ao cliente com as
           trransações e seus dados 
           /* isso td define qual vai ser o
            comportamento do get no /transactions */
        
      
    })
    this.post('/transactions',(schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
      /* para podermos ver esses dados dentro do
       mirage usando o codigo acima
       estamos pedindo o requestBody do request
        
       como o requestbody vai vir por padrao em
        texto
        
        como estamos enviando esses dados atraves 
        de JSON?????
        
        como estamos enviando esse texto em um 
        formato de javascript
        
        como queremos receber na nossa api??? 
        isso? eu literalmente nao faço ideia
        o instrutor ta falando gibrish 
        q nem um retardado
        
        eu preciso parsear esses dados por algum
        motivo misterioso?
        
        ou seja converter esses dados de  um 
        formato de texto para um objeto no 
        javascript
        
        então pelo q eu entendi nos estamos 
        transformando os dados em JSON para a 
        API poder receber
        
        serio me contratem pra dar instrução*/

    })

  }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
