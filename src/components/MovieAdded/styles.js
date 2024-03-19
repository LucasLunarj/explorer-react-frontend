import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 22.2rem;
background: rgba(255, 133, 155, 0.05);

margin-bottom: 2.4rem;
border-radius: 16px;


`

export const Content = styled.div`
width: 100%;
padding: 3.2rem;



h1{
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
}

>p{
    width: 100%;
    height: auto;
    font-size: 1.6rem;
    color: #999591;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;


}


`
export const Stars = styled.div`
margin-bottom: 15px;
svg{
    fill:#FF859B ;
    color: #FF859B;
}

`

export const TagsArea = styled.div`
display: flex;
gap: 8px;
margin-top: 20px;
`