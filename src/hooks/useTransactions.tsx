import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id'| 'createdAt'>

interface TransactionProviderProps{
  children: ReactNode;
  /* define q o transaction provider vai ter 
  filhos de qualquer componente jsx tsx */
}

interface TransactionContextData{
  transactions: Transaction[];
  /* define que o formato do contexto vai retornar
  um estado transactions que na verdade é um array de TransactionInput  */
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  /* Define que o formato do contexto vai retornar
  uma função createTransaction, que recebe uma transaction
  como parametro um objeto transaction que é do tipo
  transactionInput e nao vai dar retorno  */
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  /* fala pro typescript confia que ta certo
  esse objeto tem sim esse formato, para de reclamar */
  )

/* assim como no useState <Transaction[]>
define que o tipo dsse valor vai ser um array de
Transaction */

export function TransactionsProvider( {children}:TransactionProviderProps){

/* children é desestruturado do transactionprops
 */

const [transactions, setTransactions ] = useState<Transaction[]>([])

useEffect(() =>{
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))

    /* usa o axios pra dar um "fetch" no 
    baseURL/transactions
     esse fetch ta no index main q deefine as rotas e cria o srver

    baseURL esta setado em services/api
    useEffect significa que isso vai ser 
    carregado assim q a pagina iniciar  */
}, []);
  async function createTransaction(transactionInput: TransactionInput){
  /* essa função recebe uma transaction com o transactionInput props */
   const response = await api.post('/transactions', {
    ...transactionInput,
    createdAt: new Date(),})
   const {transaction} = response.data

   setTransactions([
    ...transactions,
      transaction
   ])
  }

return (
  <TransactionsContext.Provider value={{transactions, createTransaction}}>
    {/* agora transformamos em um objeto para que o createTransaction
    possa ser tambem exportado */}

    {/* define que o valor que vai ser exportado é o transactions */}

    {/* usa o metodo provider para fazer o TransactionsContext
    ter/retornar o valor que nos provemos nesse caso
    o estado transactions */}

    {children}

    {/* isso é feito para que o transaction context provider tenha filhos
    e nao seja um tag self closing */}
  </TransactionsContext.Provider>
)
}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context
}