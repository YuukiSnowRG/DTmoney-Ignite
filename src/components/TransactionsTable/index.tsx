import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction {
    id: number
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {

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


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td>{transaction.amount}</td>
                                <td className={transaction.type}>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}