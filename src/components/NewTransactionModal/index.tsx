import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './style';
import closeImg from '../../assets/xClose.svg'
import incomeImg from '../../assets/greenArrow.svg'
import outcomeImg from '../../assets/redArrow.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const [title, setTitle] = useState('')    
    const [value, setValue] = useState(0)    
    const [category, setCategory] = useState('')    
    const [type, setType] = useState('deposit')
    
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        };
        
        api.post('/transactions', data)
    }
    
    return(
    

    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        ariaHideApp={false}
        >
        <button 
        type='button' 
        onClick={onRequestClose}
        className='react-modal-close'
        >
        
        {/* ao clicar o botao a função onRequestClose é executada */}
            <img src={closeImg} alt="X to close" />
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input 
                placeholder='Título' 
                value={title}
                onChange={event => setTitle(event.target.value)}
            /><br />
            <input 
                type="number" 
                placeholder='Valor'
                value={value}
                onChange={event => setValue(Number(event.target.value))}
                /><br />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => { setType('deposit')}}
                    /* como estamos usando styled components agora
                    podemos stilizar um componente de acordo com
                    uma propiedade que ele tem e nao so classe */

                    /* primeiramente usamos a função para setar
                    o estado do type para deposit */
                    isActive={type=== 'deposit' }
                    /* isActive é uma propriedade pode ter o nome
                    que quisermos*/

                    /*  entao definimos que isActive é verdadeiro
                    se o type for 'deposit' */

                    /* como isActive não é uma propriedade do button
                    (RadioBox) é um button criado em styled components
                    ele nos da erro, entao temos que criar esse tipo
                    e o definir la no style.ts */
                    activeColor="green"

                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type="button"
                    onClick={() => { setType('withdraw')}}
                    isActive={type=== 'withdraw' }
                    activeColor="red"

                    
                >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
                /><br />
            
             
            <button type="submit">
                Cadastrar
            </button>

        </Container>
    </Modal>
    )
}