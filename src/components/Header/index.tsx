import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'
import Modal from 'react-modal'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    /* essa função nao vai receber nenhum 
    parametro nem retornar nada
    tambem definimos que o onOpenNewTransactionModal
    vai receber uma função que nao recebe nem retorna nada */
}
export function Header({ onOpenNewTransactionModal }: HeaderProps){
    /* o header recebe uma propriedade que e onOpenNewTransactionModal e repassa pro botao */
    
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo ignite" />
                <button type='button'
                onClick={onOpenNewTransactionModal}
                /* ao clicar nesse botão o valor do estado 
                isNewTransactionModalOpen sera verdadeiro 
                ou seja vai abrir o modal */
                >Nova Transação</button>

                
            </Content>
        </Container>
    )
}