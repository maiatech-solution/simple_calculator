import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #23145b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10em;
    h1{
        color: white;
    }
`

export const Content = styled.div`
    background-color: white;
    width: 50%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .opera{
        background-color: #1ca39e;
    }
    .clear{
        background-color: red;
    }
`