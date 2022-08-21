import { Container } from "./style";
import incomeImg from '../../assets/greenArrow.svg'
import outcomeImg from '../../assets/redArrow.svg'
import totalImg from '../../assets/cashIcon.svg'
export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ 20.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>R$ 5.000,00</strong>
            </div>
            <div className ='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 15.000,00</strong>
            </div>
        </Container>
    )
}