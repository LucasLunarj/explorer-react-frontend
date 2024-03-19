import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Content, AddMovies, ButtonLink, PreviewLink } from "./styles";
import { FiPlus } from "react-icons/fi";
import { MovieAdded } from "../../components/MovieAdded";





export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <AddMovies>
                    <span>Meus filmes</span>
                    <ButtonLink to='/create'>
                        <Button name={`Adicionar filme`} icon={FiPlus} />
                    </ButtonLink>
                </AddMovies>
                <PreviewLink to="/preview">
                    <MovieAdded />
                </PreviewLink>
                <PreviewLink to="/preview">
                    <MovieAdded />
                </PreviewLink>
            </Content>
        </Container>
    )
}