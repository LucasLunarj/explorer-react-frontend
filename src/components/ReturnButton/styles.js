import { Link } from "react-router-dom";
import styled from "styled-components";

export const ReturnContainer = styled(Link)`
width: fit-content;
color: ${({ theme }) => theme.COLORS.PINK};

display: flex;
align-items: center;



text-decoration: none;
margin-top: 4.0rem;




svg{
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right:8px ;
}

>div:nth-child(2){
 
}
`
