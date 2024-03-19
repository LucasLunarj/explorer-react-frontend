import styled from "styled-components";
import BackgroundImg from '../../assets/background.png'
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
`
export const Content = styled.div`
padding-top: 23.5rem;
padding-left: 13.4rem;
width: 637px;

display: flex;

flex-direction: column;

text-align: justify;
>header{
    h1{
        font-size:4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK}
    }

   
    p{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 1.4rem;
        font-weight: 400;
    }
}

>main{
    display: flex;
    flex-direction: column;
    margin-right: 16.3rem;

    h2{
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: 48px 0;
        font-weight: 500;
    }
     button{
        margin-top: 2.3rem;
        margin-bottom: 42px;
        padding: 16px;
     }
}

`

export const StyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;



width: 100%;

text-align: center;

text-decoration: none;
color: ${({ theme }) => theme.COLORS.PINK};
text-align: center;
font-weight: 400;

svg{
    font-size: 20px;
    margin-right:8px;
}

`;

`

`

export const Background = styled.div`

flex: 1;
background: url(${BackgroundImg}) no-repeat ;
background-size: cover;
`
