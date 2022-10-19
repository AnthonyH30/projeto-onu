import styled from "styled-components";

export const Container = styled.section`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    .card{
        width: 20%;
        min-width: 200px;
        cursor: pointer;
    }

    .card img{
        width: 100%;
    }

    .modalContent{
        background-color: red;
    }

    @media(max-width: 433px){
        .card{
            width: 90%;
            min-width: 90%;
        }
    }
`;