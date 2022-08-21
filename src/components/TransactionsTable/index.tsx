import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {

    useEffect(() =>{
        api.get('transactions')
        .then(response => console.log(response.data))

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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$20.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20222</td>
                    </tr>
                    <tr>
                        <td>LSD, Cocaina,Maconha, Metanfetamina </td>
                        <td className="withdraw">R$5.000</td>
                        <td>Drogas para reacreação</td>
                        <td>20/02/20222</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}