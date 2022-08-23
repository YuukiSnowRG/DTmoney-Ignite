import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";


export function TransactionsTable() {
    const { transactions } = useTransactions()

/* define que transactions é o valor que provemos no transactions context */

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
                                <td  className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                    {/* formata para moeda real */}

                                    </td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                    )}
                                    {/* formata para moeda data */}
                                    
                                    </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}