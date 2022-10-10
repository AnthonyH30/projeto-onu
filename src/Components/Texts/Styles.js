import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    margin-top: 50px;

    h2{
        font-size: 30px;
    }

    p{
        font-size: 18px;
        margin-top: 15px;
    }

    @media(max-width: 768px){
        width: 100%;
    }
`;