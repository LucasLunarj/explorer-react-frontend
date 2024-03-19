import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

 width: 100%;
 margin-bottom: 8px;
 background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
 border-radius: 10px;
 
 border: 1px solid transparent;

 &:hover{
        border: 1px solid black;
    }


input{
    width: 100%;

    outline: none;
    border: none;
    background: transparent;
    padding: 18px 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
   
 
}


>svg{
    color: #948F99;
    margin: 0 16px;
}
`