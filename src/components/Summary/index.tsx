import { Container } from "./style";
import {useTransactions } from "../../hooks/useTransactions";

import incomeImg from '../../assets/greenArrow.svg'
import outcomeImg from '../../assets/redArrow.svg'
import totalImg from '../../assets/cashIcon.svg'

export function Summary(){
    const {transactions} = useTransactions()
    const summary = transactions.reduce((acc, transaction) => { 
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}</strong>
            </div>
            <div className ='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}