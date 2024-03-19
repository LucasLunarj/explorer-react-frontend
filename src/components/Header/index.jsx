import { Input } from "../Input";
import { Container, Content, Profile } from "./styles";
import Avatar from '../../assets/avatar.jpg'
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Content>
                <h1>RocketNotes</h1>
                <Input placeholder='Pesquisar pelo título' />
                <Profile>
                    <div>
                        <span>Lucas Luna</span>
                        <p>sair</p>
                    </div>
                    <Link to="/profile">
                        <img src={Avatar} alt="" />
                    </Link>

                </Profile>
            </Content>
        </Container>
    )
}