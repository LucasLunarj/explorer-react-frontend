import styled from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
margin: 0 126px;
margin-top:4.0rem ;
`

export const TitleArea = styled.div`
display: flex;
align-items: center;
gap: 24px;
margin-top: 2.4rem;
>h1{
    font-size: 36px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};

    
}

>div{
    width: auto;
    display: flex;
    align-items: center;
    gap: 10px;

  svg{
  
    color: ${({ theme }) => theme.COLORS.PINK};
    fill: ${({ theme }) => theme.COLORS.PINK};
    width: 20px;
    height: 20px;
  }
}

`
export const UserInfo = styled.div`
display: flex;
align-items: center;
gap: 8px;

color: #F4EDE8;
margin-top: 24px;

img{
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

svg{
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.COLORS.PINK};
}
`

export const TagsArea = styled.div`
margin-top:40px ;
margin-bottom: 40px;

display: flex;
gap: 8px;

color: white;

>div{
  background: #282124;
  
}
`

export const MovieText = styled.p`
text-align: justify;
color: #F4EDE8;
line-height: normal;
font-weight: 400;
`