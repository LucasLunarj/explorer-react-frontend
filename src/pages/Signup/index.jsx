
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { Container, Content, Background, StyledLink } from "./style";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

export function Signup() {
    return (
        <Container>
            <Content>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                </header>
                <main>
                    <h2>Crie sua conta</h2>
                    <Input type="text" placeholder='Nome' icon={FiUser} />
                    <Input type="text" placeholder='E-mail' icon={FiMail} />
                    <Input type="password" placeholder='Senha' icon={FiLock} />
                    <Button name="Cadastrar" />
                    <StyledLink to="/" >
                        <FiArrowLeft /> Voltar para o login
                    </StyledLink >
                </main>
            </Content>
            <Background />
        </Container>
    )
}