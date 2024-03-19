import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
flex-direction: column;

`

export const AddMovies = styled.div`
display: flex;
justify-content: space-between;

padding-top: 48px;
padding-bottom: 4.0rem;

>span{
    font-size: 3.2rem;
    color: #fff;
}


svg{
    margin-right:8px ;
}
`

export const Content = styled.main`
margin: 4.8rem 12.6rem ;
overflow-y: auto;

`

export const ButtonLink = styled(Link)`
 text-decoration: none;
>button{
  
   width: 20.7rem;
   height: 4.8rem;
}
`

export const PreviewLink = styled(Link)`
text-decoration: none;

color: inherit;
`