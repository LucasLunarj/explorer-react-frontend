import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Content, MarkArea, NewMarker, ButtonArea } from "./styles";
import { ReturnButton } from "../../components/ReturnButton";
import { Button } from "../../components/Button";
import { Marker } from "../../components/Marker";


export function CreateMovie() {
    return (
        <Container>
            <Header />
            <Content>
                <ReturnButton to="/" />
                <h1>Novo Filme</h1>
                <div>
                    <Input placeholder="Título" />
                    <Input type="number" placeholder="Sua nota (de 0 a 5)" max="5" />
                </div>
                <textarea name="" placeholder="Observações" ></textarea>

                <h3>Marcadores</h3>
                <MarkArea>
                    <Marker name={'React'} />
                    <NewMarker>
                        <span>Novo Marcador</span>
                        <FiPlus />
                    </NewMarker>
                </MarkArea>
                <ButtonArea>
                    <Button name='Excluir Filme' />
                    <Button name='Salvar Alterações' />
                </ButtonArea>
            </Content>
        </Container>
    )
}