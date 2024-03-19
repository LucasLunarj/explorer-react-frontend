import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
height: 100vh;

`

export const Content = styled.div`


display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

width: 100%;
height: auto;


>div{
    width: 34.0rem;
  
    margin-top: 15.7rem;

    >div:nth-child(2){
        margin-bottom: 24px;
    }
}



button{
    margin-top: 24px;
    padding:16px ;
    display: flex;
   justify-content: center;
   align-items: center;
}
`

export const UserProfile = styled.div`
    width: 18.6rem;
    height: 18.6rem;

    position: relative;
    margin: 30px auto;
    border-radius: 50%;


>img{
    
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;

    object-fit: cover;
}

>label{
    width: 48px;
    height: 48px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position:absolute;
    bottom: 7px;
    right: 9px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    input{
        display: none;
    }
}

svg{
   width: 20px;
   height: 20px;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
}

`


export const Header = styled.header`
width: 100%;
height: 14.4rem;
background: rgba(255, 133, 155, 0.05);


`
export const LinkStyle = styled(Link)`

position: relative;
    left: 168px;
    top: 64px;
    

text-decoration: none;
color: ${({ theme }) => theme.COLORS.PINK};

display: flex;
align-items: center;
margin: auto;

svg{
    margin-right: 8px;
}

`

