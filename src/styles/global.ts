import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #F0F2F5;
    --blue: #5429CC;
    --red: #E52E40;
    --green: #33cc95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969cb3;

    --shape: #FFFFFF;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size:0.894427rem; /* 16 px at max size */
}
html{
    @media (max-width:1080px){
        /* quando o usuario tiver uma tela de ate 1080 px */
        font-size: 93.75%;/* diminui o tamanho da fonte para 93.75% ou 15px */
    }
    @media (max-width:720px){
        /* quando o usuario tiver uma tela de ate 720 px de largura */
        font-size: 87.5%;/* diminui o tamanho da fonte para 87.5% ou 14px */
    }

    /* REM = 1rem é igual a o tamanho original do fontsize ou seja 16px */
}
body{
    background: var(--background); /* define que o bg vai ser igual o da variavel --background definida no root*/
    -webkit-font-smoothing: antialiased; /* deixa a fonte mais nitida */
}
body, input, textarea, button {
    font-family: 'Cascadia Code', Consolas,'Courier New', monospace;
    font-weight: 350;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
}

button{
    cursor: pointer;/* faz aquela maozinho de cliucar */
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    /* esses 3 centraliza tudo pro meio da tela */
}
.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s; 

    &:hover{
        filter: brightness(0.8);
    }
}
`