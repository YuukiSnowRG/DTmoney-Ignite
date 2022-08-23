import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

/* Modal.setAppElement('root') */ /* melhor acessibilidade */

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    /* a primeira é o estado a segunda a função pra mudar o estado */
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
        /* seta q o estado do isNewTransactionModalOpen para verdadeiro */
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)

        /* seta q o estado do isNewTransactionModalOpen para falso */
  }
    /* e bom sempre iniciar o nome de uma função
     que precisar de input do usuario com handle
    entao sempre que fizermos uma função em que
    o usuario vai clicar ou executar alguma coisa
    iniciamos com handle */

    
  return (
    <TransactionsProvider> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      {/* ao passar essa função nos podemos fazer com que elementos/componentes filhos
      possam alterar o estado de outros componentes 
      nesse caso estamos passando a nossa função de abrir o modal como propriedade
      la para o botão que esta no header em outro componente */}

      <Dashboard/> {/* importa/usa o components importado */}

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      /* define que o isOpen é igual o estado do
      isNewTransactionModalOpen */
      onRequestClose={handleCloseNewTransactionModal}
      /* executa a função de fechar o modal */
      />

      <GlobalStyle/> {/* aplica o global style q criamos */}

      
    </TransactionsProvider>
  );
}
