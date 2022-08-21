import styled from "styled-components";

export const Container = styled.div`

/* dentro do styled cria um elemento, 
nesse caso uma div e entao é exportada para o index*/
display: grid;
grid-template-columns: repeat(3,1fr);
/* na grid em template de colunas
3 colunas que sao 1fr */
gap: 2rem;
margin-top: -10rem;

div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    strong{ 
        display:block;
        margin-top:1rem;
        font-size:2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    &.highlight-background{
        background: var(--green);
        color: white
    }
}
`