import styled from "styled-components";



export const Container = styled.footer`
    width: 100%;
    padding-block: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 4%;

    .logo{
        display: flex;
        align-items: center;
        gap: 10px;

        img{
            width: 60px;
        }

        p{
            font-size: 20px;
            font-weight: bold;
            color: #009edb;
        }
    }

    @media(max-width: 600px){
        justify-content: center;

        .text{
            display: none;
        }
    }
`;