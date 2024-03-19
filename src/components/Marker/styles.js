import styled from "styled-components";

export const Container = styled.div`
width: fit-content;
padding: 16px;
background: #262529;

display: flex;
align-items: center;
gap: 16px;
color: #fff;
svg{
    color: ${({ theme }) => theme.COLORS.PINK};
}
`