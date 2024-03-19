import styled from "styled-components";



export const Container = styled.div`
height: 100vh;
width: 100%;


`

export const Content = styled.div`
display: flex;
flex-direction: column;
margin: 0 126px;

h1{

    font-size: 36px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 2.4rem;
    margin-bottom: 5.8rem;
}

>div{
    display: flex;
    width: 100%;
    gap: 4.0rem;
}

>textarea{
    padding: 19px 16px;
    height:27.4rem;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;

    margin-top: 40px;
    margin-bottom: 40px;
    resize: none;
}
input{
    padding: 18px 16px;
}

h3{
    font-size: 2.0rem;
    color: #999591;
    margin-bottom: 24px;
}

`


export const MarkArea = styled.div`
display: flex;

height: 8.8rem;
width: 100%;

border-radius: 8px;
background: #0D0C0F;

padding: 16px;



`
export const NewMarker = styled.div`
border: 2px dashed #948F99;
border-radius: 10px;


padding: 16px;

display: flex;
justify-content: center;
align-items: center;
gap: 16px;

color: #948F99;
svg{
    height: 22px;
    width: 22px;
    font-size: 24px;
color:${({ theme }) => theme.COLORS.PINK} ;
}
`
export const ButtonArea = styled.div`
margin-top:4.0rem ;
display: flex;

button:nth-child(1){
background-color: #0D0C0F;
color: ${({ theme }) => theme.COLORS.PINK};
padding: 16px 0;
}

`