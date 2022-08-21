import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; /* centraliza o elemento */

    padding: 1.5rem 1rem 10rem;
    display: flex ;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 0.8rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0.19rem 1.8rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.88);
        }
    }
`