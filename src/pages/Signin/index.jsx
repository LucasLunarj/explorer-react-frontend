import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Content, Background, StyledLink } from "./style";
import { FiMail, FiLock } from 'react-icons/fi'

export function Signin() {
    return (
        <Container>
            <Content>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                </header>
                <main>
                    <h2>Faça seu login</h2>
                    <Input type="text" placeholder='E-mail' icon={FiMail} />
                    <Input type="password" placeholder='Senha' icon={FiLock} />
                    <Button name="Entrar" />
                    <StyledLink to="/register" >
                        Criar conta
                    </StyledLink>
                </main>
            </Content>
            <Background />
        </Container>
    )
}