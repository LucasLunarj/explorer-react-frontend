import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    background-color: #1c1b1e;
    font-family: "Roboto Slab", serif;
}

body, input-security, button, textarea{
    font-family: "Roboto Slab", serif;
}
`