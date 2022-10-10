import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-inline: 2%;
    background-color: white;
    position: sticky;
    top: 0;
    padding-block: 10px;

    .search{
        margin-left: auto;
    }

    .logo{
        display: flex;
        gap: 10px;
        align-items: center;
        border-right: #e5e7eb 1px solid;
        padding-right: 20px;
        margin-right: 20px;

        figure{
            img{
                width: 60px;
            }
        }

        div{
            color: #009edb;
            display: flex;
            flex-direction: column;

            h2{
                font-weight: 600;
            }

            img{
                margin-top: 10px;
            }
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        gap: 5px;

        p{
            :last-child{
                font-weight: bold;
            }
        }
    }

    .search{
        border: #e5e7eb 2px solid;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        background-color: white;

        input{
            height: 30px;
            min-width: 270px;
            border: none;
            outline: none;
            padding-left: 10px;
        }

        button{
            width: 30px;
            height: 30px;
            border: none;
            background-color: #009edb;
            border-radius: 50%;
            cursor: pointer;

            svg{
                font-size: 20px;
                color: white;
            }
        }
    }

    @media(max-width: 600px){
        align-items: center;
        justify-content: center;
        padding-bottom: 15px;
        gap: 10px;

        .search{
        margin: 0;
    }
    }
`;