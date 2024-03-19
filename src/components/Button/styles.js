import styled from "styled-components";

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
background-color: ${({ theme }) => theme.COLORS.PINK};
border-radius: 10px;
color: #312E38;

border: none;
font-weight: 500;

cursor: pointer;
&:hover{
    opacity: 0.8;
}
`