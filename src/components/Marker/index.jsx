import { FiX } from "react-icons/fi";
import { Container } from "./styles";

export function Marker({ name, ...rest }) {
    return (
        <Container>
            {name}
            <FiX />
        </Container>
    )
}