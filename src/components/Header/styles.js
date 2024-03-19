import styled from "styled-components";

export const Container = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

height: 11.6rem;
border-bottom: 1px solid #3E3B47;
`
export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;

margin: 0 126px;

>div:nth-child(2){
    flex: 1;

padding:0  16px;
}
>h1{
    margin-right:  48px;
   color: ${({ theme }) => theme.COLORS.PINK};
   font-size: 2.4rem;
}


`

export const Profile = styled.div`
display: flex;
align-items: center;
margin-left: 48px;

span{
    font-size: 14px;
}

img{
    width: 64px;
    height: 64px;
    margin-left: 8px;
    border-radius: 50%;
    object-fit: cover;
}
>div{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: right;

    p{
        cursor: pointer;
        font-size: 14px;
        color: #948F99;
    }
}
` 